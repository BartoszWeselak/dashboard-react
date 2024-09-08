import { useEffect, useState } from "react";
interface Snapshot {
  date: string;
  price: number;
}

interface Asset {
  id: number;
  name: string;
  symbol: string;
  snapshots: Snapshot[];
}

const useFetchData = (
  dataType: "cryptocurrencies" | "stocks" | "commodities"
) => {
  const [assets, setAssets] = useState<Asset[]>([]);

  useEffect(() => {
    let data;
    if (dataType === "cryptocurrencies") {
      data = require("../data/cryptocurrencies.json");
    } else if (dataType === "stocks") {
      data = require("../data/stock.json");
    } else if (dataType === "commodities") {
      data = require("../data/commodities.json");
    }

    setAssets(data);
  }, [dataType]);

  return { assets };
};

export default useFetchData;
