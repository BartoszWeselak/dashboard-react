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
import {
  useFetchAllData,
  useFetchData,
  useFetchDataSingle,
} from "../../../api/api";

export const WalletRoute = () => {
  const { user, updateBalance } = useAuth();
  const { portfolio, addAsset, removeAsset, clearPortfolio } = usePortfolio(
    user?.email
  );
  const debug = 100;
  const { assets } = useFetchAllData();

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
                  <TableCell>Sell price</TableCell>
                  <TableCell>Margin</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Leverage</TableCell>
                  <TableCell>Sell</TableCell>
                </TableRow>
              </TableHead>
              {portfolio.map((asset, index) => {
                const foundAsset = assets.find(
                  (a) => a.id === asset.referenceId && a.type === asset.type
                );

                return (
                  <TableBody key={index}>
                    <TableRow>
                      <TableCell>{asset.name}</TableCell>
                      <TableCell>{asset.type}</TableCell>
                      <TableCell> {asset.price}$</TableCell>
                      <TableCell> {foundAsset?.snapshots[0].price}$</TableCell>
                      <TableCell>
                        {" "}
                        {asset.price - (foundAsset?.snapshots[0].price || 0)}$
                      </TableCell>

                      <TableCell>{asset.quantity}</TableCell>
                      {asset.leverage && (
                        <TableCell>{asset.leverage}</TableCell>
                      )}

                      <button
                        onClick={() => {
                          updateBalance(
                            asset.price - (foundAsset?.snapshots[0].price || 10)
                          );
                          removeAsset(index);
                        }}
                      >
                        Remove Asset
                      </button>
                    </TableRow>
                  </TableBody>
                );
              })}
            </Table>
          )}
          {/* <button onClick={clearPortfolio}>Clear Portfolio</button> */}
        </CardDescription>
      </Card>
    </DashboardLayout>
  );
};
