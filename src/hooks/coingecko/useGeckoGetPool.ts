import { useEffect, useState } from "react";
interface PoolPriceChangePercentage {
  m5: string;
  h1: string;
  h6: string;
  h24: string;
}

interface PoolTransactions {
  buys: number;
  sells: number;
  buyers: number;
  sellers: number;
}

interface PoolVolume {
  m5: string;
  h1: string;
  h6: string;
  h24: string;
}

interface PoolTransactionsData {
  m5: PoolTransactions;
  m15: PoolTransactions;
  m30: PoolTransactions;
  h1: PoolTransactions;
  h24: PoolTransactions;
}

interface PoolAttributes {
  base_token_price_usd: string;
  base_token_price_native_currency: string;
  quote_token_price_usd: string;
  quote_token_price_native_currency: string;
  base_token_price_quote_token: string;
  quote_token_price_base_token: string;
  address: string;
  name: string;
  pool_created_at: string;
  fdv_usd: string;
  market_cap_usd: string | null;
  price_change_percentage: PoolPriceChangePercentage;
  transactions: PoolTransactionsData;
  volume_usd: PoolVolume;
  reserve_in_usd: string;
}

interface PoolRelationshipData {
  id: string;
  type: string;
}

interface PoolRelationships {
  base_token: {
    data: PoolRelationshipData;
  };
  quote_token: {
    data: PoolRelationshipData;
  };
  dex: {
    data: PoolRelationshipData;
  };
}

interface PoolData {
  id: string;
  type: string;
  attributes: PoolAttributes;
  relationships: PoolRelationships;
}

interface PoolResponse {
  data: PoolData;
}

const useGeckoGetPool = (poolAddress: string, networkid: string) => {
  const [data, setData] = useState<PoolData | null>(null);
  const [loading, setLoading] = useState(true);
  const [trigger, setTrigger] = useState(0);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        headers: {
          "x-cg-pro-api-key": process.env.GECKO_API_KEY! as string,
        },
      };
      setLoading(true);

      try {
        const response = await fetch(
          `https://pro-api.coingecko.com/api/v3/onchain/networks/${networkid}/pools/${poolAddress}`,
          options,
        );

        const data: PoolResponse = await response.json();
        setData(data?.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError(err as Error);
        setData(null);
        setLoading(false);
      }
    };

    fetchData();
  }, [trigger, poolAddress, networkid]);

  const refetch = () => {
    setLoading(true);
    setTrigger((value) => value + 1); // Increment trigger to refetch data
  };
  return { data, loading, refetch, error };
};

export default useGeckoGetPool;
