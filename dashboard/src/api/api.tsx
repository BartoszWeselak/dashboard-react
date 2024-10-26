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
  volume?: string;
  marketCap?: string;
  unit?: string;
  color?: string | "red";
  icon?: string | "?";
  snapshots: Snapshot[];
}

export const useFetchAllData = () => {
  const [assets, setAssets] = useState<Asset[]>([]);

  useEffect(() => {
    const fetchData = () => {
      const cryptoData = require("../data/cryptocurrencies.json");
      const stocksData = require("../data/stocks.json");
      const commoditiesData = require("../data/commodities.json");

      const allAssets = [...cryptoData, ...stocksData, ...commoditiesData];

      setAssets(allAssets);
    };

    fetchData();
  }, []);

  return { assets };
};

export const useFetchData = (
  dataType: "cryptocurrencies" | "stocks" | "commodities"
) => {
  const [assets, setAssets] = useState<Asset[]>([]);

  useEffect(() => {
    let data;
    if (dataType === "cryptocurrencies") {
      data = require("../data/cryptocurrencies.json");
    } else if (dataType === "stocks") {
      data = require("../data/stocks.json");
    } else if (dataType === "commodities") {
      data = require("../data/commodities.json");
    }

    setAssets(data);
  }, [dataType]);

  return { assets };
};

export const useFetchDataSingle = (
  dataType: "cryptocurrencies" | "stocks" | "commodities",
  id?: number,
  type?: string
) => {
  const [assets, setAsset] = useState<Asset | null>(null);

  useEffect(() => {
    const allData = {
      cryptocurrencies: require("../data/cryptocurrencies.json"),
      stocks: require("../data/stocks.json"),
      commodities: require("../data/commodities.json"),
    };

    const data = allData[dataType];

    const foundAsset = data.find(
      (item: Asset) =>
        (id !== undefined && item.id === id) ||
        (type !== undefined && item.type === type)
    );

    setAsset(foundAsset);
  }, [dataType, id, type]);

  return { assets };
};
