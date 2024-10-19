import { useAuth } from "../../hooks/auth-context";

export const TradeForm = () => {
  const { addAssetToPortfolio } = useAuth();

  const handleAddAsset = () => {
    const newAsset = {
      name: "Bitcoin",
      type: "crypto",
      price: 60000,
      quantity: 0.5,
      leverage: 2,
      referenceId: 1,
    };
    addAssetToPortfolio(newAsset);
  };

  return <button onClick={handleAddAsset}>Add Asset</button>;
};
