import React from "react";

import { Card, CardDescription, CardTitle } from "../../../components/Card";

import { DashboardLayout } from "../../../layout/dashboard-layout";
import { useAuth } from "../../../hooks/auth-context";
import { usePortfolio } from "../../../hooks/use-portfolio";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "../../../components/Table";

export const WalletRoute = () => {
  const { user } = useAuth();
  const { portfolio, addAsset, removeAsset, clearPortfolio } = usePortfolio(
    user?.email
  );

  return (
    <DashboardLayout>
      <Card>
        <CardDescription>
          <h2>Portfolio</h2>
          {portfolio.length === 0 ? (
            <p>No assets in your portfolio.</p>
          ) : (
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Leverage</TableCell>
                  <TableCell>Sell</TableCell>
                </TableRow>
              </TableHead>
              {portfolio.map((asset, index) => (
                <TableBody key={index}>
                  <TableRow>
                    <TableCell>{asset.name}</TableCell>
                    <TableCell>{asset.type}</TableCell>
                    <TableCell> {asset.price}$</TableCell>
                    <TableCell>{asset.quantity}</TableCell>
                    {asset.leverage && <TableCell>{asset.leverage}</TableCell>}

                    <button onClick={() => removeAsset(index)}>
                      Remove Asset
                    </button>
                  </TableRow>
                </TableBody>
              ))}
            </Table>
          )}
          {/* <button onClick={clearPortfolio}>Clear Portfolio</button> */}
        </CardDescription>
      </Card>
    </DashboardLayout>
  );
};
