import { useEffect, useState } from "react";
interface Snapshot {
  date: string;
  price: number;
}

interface Asset {
  id: number;
  type: string;
  name: string;
  symbol: string;
  volume: string;
  marketCap: string;
  snapshots: Snapshot[];
}

export const useFetchData = (
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

export const useFetchDataSingle = (
  dataType: "cryptocurrencies" | "stocks" | "commodities",
  id: number
) => {
  const [assets, setAsset] = useState<Asset | null>(null);

  useEffect(() => {
    let data;
    if (dataType === "cryptocurrencies") {
      data = require("../data/cryptocurrencies.json");
    } else if (dataType === "stocks") {
      data = require("../data/stock.json");
    } else if (dataType === "commodities") {
      data = require("../data/commodities.json");
    }

    const foundAsset = data.find((item: Asset) => item.id === id);

    setAsset(foundAsset);
  }, [dataType, id]);

  return { assets };
};
