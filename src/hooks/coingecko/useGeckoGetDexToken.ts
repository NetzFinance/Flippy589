import { useState, useEffect } from "react";
export type GetDexTokenData = {
  id: string;
  type: string;
  attributes: {
    address: string;
    name: string;
    symbol: string;
    image_url: string;
    coingecko_coin_id: null | string;
    decimals: number;
    total_supply: string;
    price_usd: string;
    fdv_usd: string;
    total_reserve_in_usd: string;
    volume_usd: {
      h24: string;
    };
    market_cap_usd: null | string;
  };
  relationships: {
    top_pools: {
      data: Array<{
        id: string;
        type: string;
      }>;
    };
  };
};

interface TokenInfoProps {
  data: GetDexTokenData;
}
const useGeckoGetDexToken = (tokenAddress: string, networkid: string) => {
  const [data, setData] = useState<GetDexTokenData | null>(null);
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
          `https://pro-api.coingecko.com/api/v3/onchain/networks/${networkid}/tokens/${tokenAddress}`,
          options,
        );

        const data: TokenInfoProps = await response.json();
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
  }, [trigger, tokenAddress, networkid]);

  const refetch = () => {
    setLoading(true);
    setTrigger((value) => value + 1); // Increment trigger to refetch data
  };
  return { data, loading, refetch, error };
};

export default useGeckoGetDexToken;
