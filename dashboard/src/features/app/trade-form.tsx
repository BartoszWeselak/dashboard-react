import { useState } from "react";
import { useAuth } from "../../hooks/auth-context";
import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

interface TradeFormProps {
  name: string;
  referenceId: number;
  type: string;
  price: number;
}

export const TradeForm = ({
  referenceId,
  type,
  name,
  price,
}: TradeFormProps) => {
  const { addAssetToPortfolio } = useAuth();
  const [quantity, setQuantity] = useState("");
  const [leverage, setLeverage] = useState("");

  const handleAddAsset = () => {
    const newAsset = {
      name: name,
      type: type,
      price: price,
      quantity: parseInt(quantity),
      leverage: parseInt(leverage),
      referenceId: referenceId,
    };
    addAssetToPortfolio(newAsset);
  };

  return (
    <>
      <Form className="flex flex-col gap-4">
        <h1>{name}</h1>
        {}
        <Input
          type="text"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeHolder="Set Amout to buy"
        />
        <Input
          type="text"
          value={leverage}
          onChange={(e) => setLeverage(e.target.value)}
          placeHolder="Choose leverage"
        />
        <Button onClick={handleAddAsset}>buy</Button>
      </Form>
    </>
  );
};
