import { useState, useEffect } from "react";

export interface Asset {
  name: string;
  type: string;
  price: number;
  quantity: number;
  leverage?: number;
  referenceId?: number;
}

const getPortfolioKey = (userEmail: string) => `portfolio_${userEmail}`;

export const usePortfolio = (userEmail: string | undefined) => {
  const [portfolio, setPortfolio] = useState<Asset[]>([]);

  useEffect(() => {
    if (userEmail) {
      const storedPortfolio = localStorage.getItem(getPortfolioKey(userEmail));
      if (storedPortfolio) {
        setPortfolio(JSON.parse(storedPortfolio));
      }
    }
  }, [userEmail]);

  const addAsset = (asset: Asset): void => {
    if (!userEmail) {
      alert("No user is currently logged in.");
      return;
    }

    const updatedPortfolio = [...portfolio, asset];
    setPortfolio(updatedPortfolio);
    localStorage.setItem(
      getPortfolioKey(userEmail),
      JSON.stringify(updatedPortfolio)
    );
  };

  const removeAsset = (assetIndex: number): void => {
    if (!userEmail) {
      alert("No user is currently logged in.");
      return;
    }

    const updatedPortfolio = portfolio.filter(
      (_, index) => index !== assetIndex
    );
    setPortfolio(updatedPortfolio);
    localStorage.setItem(
      getPortfolioKey(userEmail),
      JSON.stringify(updatedPortfolio)
    );
  };

  const clearPortfolio = (): void => {
    if (!userEmail) {
      alert("No user is currently logged in.");
      return;
    }

    setPortfolio([]);
    localStorage.removeItem(getPortfolioKey(userEmail));
  };

  return {
    portfolio,
    addAsset,
    removeAsset,
    clearPortfolio,
  };
};
