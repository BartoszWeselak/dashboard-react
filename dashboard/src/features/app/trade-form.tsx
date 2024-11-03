import { useState } from "react";
import { useAuth } from "../../hooks/auth-context";
import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Card, CardDescription } from "../../components/Card";
import { Divider } from "../../components/Divider";
import { Image } from "../../components/Image";
interface TradeFormProps {
  name: string;
  referenceId: number;
  type: string;
  price: number;
  icon: string;
}

export const TradeForm = ({
  referenceId,
  type,
  name,
  price,
  icon,
}: TradeFormProps) => {
  const { user, addAssetToPortfolio, updateBalance } = useAuth();
  const [quantity, setQuantity] = useState("");
  const [leverage, setLeverage] = useState("");

  const handleAddAsset = () => {
    const priceToPay = price * 100 * parseInt(quantity);
    if (user?.balance >= priceToPay) {
      const newAsset = {
        name: name,
        type: type,
        price: price,
        quantity: parseInt(quantity),
        leverage: parseInt(leverage),
        referenceId: referenceId,
      };
      updateBalance(-priceToPay);
      addAssetToPortfolio(newAsset);
    } else {
      alert("Not enought funds");
    }
  };

  return (
    <>
      <Form className="flex flex-col gap-4">
        <Divider />
        <Card>
          <CardDescription display={"col"}>
            {" "}
            <div>
              <Image size={"large"} src={`data:image/png;base64,${icon}`} />{" "}
            </div>
            <div>
              <h1>Name: {name}</h1>
              <h1>Type: {type}</h1>
              <h1>Current price: {price}$</h1>
            </div>
          </CardDescription>
        </Card>
        <Divider />
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
        <Button onClick={handleAddAsset} variant={"buy"}>
          buy
        </Button>
      </Form>
    </>
  );
};
