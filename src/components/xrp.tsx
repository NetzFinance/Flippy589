"use client";

import { Button, Heading, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import {
  Client,
  TransactionMetadata,
  Wallet,
  dropsToXrp,
  xrpToDrops,
} from "xrpl";

export default function WalletGenerator() {
  const [wallet, setWallet] = useState<Wallet | null>(null);
  const [client, setClient] = useState<Client | null>(null);
  const [balance, setBalance] = useState<number>(0);
  const [destination, setDestination] = useState<string>("");
  const [amount, setAmount] = useState<string>("0");
  const [statusMessage, setStatusMessage] = useState<string>("");
  const [secret, setSecret] = useState<string>("");

  function createWalletFromSecret(secret: string) {
    const newWallet = Wallet.fromSeed(secret);
    setWallet(newWallet);
  }

  function generateWallet() {
    const newWallet = Wallet.generate();
    setWallet(newWallet);
  }

  useEffect(() => {
    const connectClient = async () => {
      const newClient = new Client("wss://xrplcluster.com/");
      await newClient.connect();
      setClient(newClient);
    };
    connectClient();
  }, []);

  useEffect(() => {
    if (client && wallet) {
      const fetchBalance = async () => {
        try {
          const response = await client.request({
            command: "account_info",
            account: wallet.classicAddress,
            ledger_index: "validated",
          });

          const drops = response.result.account_data.Balance;
          setBalance(dropsToXrp(drops)); // Convert drops to XRP
        } catch (error) {
          console.error("Error fetching balance:", error);
        }
      };

      // Fetch balance immediately and then every 5 seconds
      fetchBalance();
      const interval = setInterval(fetchBalance, 5000);

      // Cleanup on unmount
      return () => clearInterval(interval);
    }
  }, [client, wallet]);

  const handleTransfer = async () => {
    if (!client || !wallet) return;

    try {
      // Prepare the transaction
      const prepared = await client.autofill({
        TransactionType: "Payment",
        Account: wallet.address,
        Destination: destination,
        Amount: xrpToDrops(amount), // Convert XRP to drops
      });

      // Sign the transaction
      const signed = wallet.sign(prepared);

      // Submit the transaction
      const res = await client.submitAndWait(signed.tx_blob);

      console.log(res);
      const transactionResult = (res.result?.meta as TransactionMetadata)
        .TransactionResult;

      if (transactionResult === "tesSUCCESS") {
        setStatusMessage("Transaction successful!");
        // Refresh balance
        const response = await client.request({
          command: "account_info",
          account: wallet.address,
          ledger_index: "validated",
        });
        const drops = response.result.account_data.Balance;
        setBalance(dropsToXrp(drops));
      } else {
        const errorMessage =
          res.result?.meta?.toString() || "Transaction failed";
        setStatusMessage(`Transaction failed: ${errorMessage}`);
      }
    } catch (error: any) {
      console.error("Error during transfer:", error);
      setStatusMessage(`Transaction error: ${error.message.toString()}`);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      {!wallet && (
        <VStack h="100vh" justify={"center"} align={"center"}>
          <Heading>Start fuckin around on XRPL today!</Heading>
          <Button onClick={generateWallet}>Generate Wallet</Button>{" "}
          <input
            type="text"
            placeholder="Secret Address"
            value={destination}
            onChange={(e) => createWalletFromSecret(e.target.value)}
            style={{ width: "300px", padding: "5px" }}
          />
        </VStack>
      )}
      {wallet && (
        <>
          <h1>Your New XRP Wallet</h1>
          <p>
            <strong>Address:</strong> {wallet.address}
          </p>
          <p>
            <strong>Secret:</strong> {wallet.seed}
          </p>
          <div style={{ display: "inline-block", marginTop: "20px" }}>
            <QRCode value={wallet.classicAddress} size={256} />
          </div>
          <p style={{ marginTop: "20px" }}>
            Scan this QR code to fund your wallet.
          </p>
          <h2>Balance: {balance.toString()} XRP</h2>
          <div style={{ marginTop: "20px" }}>
            <h3>Transfer Tokens</h3>
            <input
              type="text"
              placeholder="Destination Address"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              style={{ width: "300px", padding: "5px" }}
            />
            <br />
            <br />
            <input
              type="text"
              placeholder="Amount (XRP)"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              style={{ width: "300px", padding: "5px" }}
            />
            <br />
            <br />
            <Button
              onClick={handleTransfer}
              style={{ padding: "10px 20px", border: "1px solid white" }}
            >
              Transfer Tokens
            </Button>
            {statusMessage && <p>{statusMessage.toString()}</p>}
          </div>
        </>
      )}
    </div>
  );
}
