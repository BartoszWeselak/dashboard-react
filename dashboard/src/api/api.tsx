import { useEffect, useState } from "react";
import cryptocurrenciesData from "../data/cryptocurrencies.json";

interface Snapshot {
  date: string;
  price: number;
}

interface Cryptocurrency {
  id: number;
  name: string;
  symbol: string;
  snapshots: Snapshot[];
}

const useFetchData = () => {
  const [cryptocurrencies, setCryptocurrencies] = useState<Cryptocurrency[]>(
    []
  );

  useEffect(() => {
    setCryptocurrencies(cryptocurrenciesData);
  }, []);

  return { cryptocurrencies };
};

export default useFetchData;
