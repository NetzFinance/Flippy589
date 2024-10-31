import { useEffect, useState } from "react";
export interface SimpleTokenPriceAttributes {
  token_prices: {
    [key: string]: string;
  };
}

export interface SimpleTokenPriceData {
  id: string;
  type: string;
  attributes: SimpleTokenPriceAttributes;
}

export interface SimpleTokenPriceResponse {
  data: SimpleTokenPriceData;
}

const useGeckoGetSimplePrice = (tokenAddresses: string, networkid: string) => {
  const [data, setData] = useState<{ [key: string]: string } | null>(null);
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
          `https://pro-api.coingecko.com/api/v3/onchain/simple/networks/${networkid}/token_price/${tokenAddresses}`,
          options,
        );

        const data: SimpleTokenPriceResponse = await response.json();
        console.log(data);

        setData(data?.data?.attributes.token_prices);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError(err as Error);
        setData(null);
        setLoading(false);
      }
    };

    fetchData();
  }, [trigger, tokenAddresses, networkid]);

  const refetch = () => {
    setLoading(true);
    setTrigger((value) => value + 1); // Increment trigger to refetch data
  };
  return { data, loading, refetch, error };
};

export default useGeckoGetSimplePrice;
