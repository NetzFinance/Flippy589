import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ClipboardCopyIcon } from "@heroicons/react/outline";

export function DonationWallet() {
  const walletAddress = "rffrYBmuCAGvAWhSNvuJ48pXZ7nCqTuveV";

  const handleCopy = () => {
    navigator.clipboard.writeText(walletAddress);
    alert("Wallet address copied to clipboard!");
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Support the Flippy589 Project
      </h2>
      <p className="text-sm text-gray-700 dark:text-gray-300 mb-6 text-center">
        This is a donation wallet used to expand the Flippy589 project. Thank you for your support!
      </p>
      <div className="mb-6">
        <Image
          src="/qr_code_rffrYBmuCAGvAWhSNvuJ48pXZ7nCqTuveV.png"
          alt="Donation Wallet QR Code"
          width={200}
          height={200}
          className="rounded-md"
        />
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-sm text-gray-600 dark:text-gray-400 font-mono break-all">
          {walletAddress}
        </span>
        <Button
          variant="outline"
          onClick={handleCopy}
          className="flex items-center space-x-2 border-gray-500 dark:border-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          <ClipboardCopyIcon className="h-5 w-5" />
          <span>Copy</span>
        </Button>
      </div>
    </div>
  );
}
