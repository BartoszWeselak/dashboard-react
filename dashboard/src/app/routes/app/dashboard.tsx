import React, { useEffect, useState } from "react";
import {
  faBitcoinSign,
  faDollar,
  faDroplet,
} from "@fortawesome/free-solid-svg-icons";
import { Divider } from "../../../components/Divider";
import { Tab, Tabs } from "../../../components/Tab";
import { DashboardLayout } from "../../../layout/dashboard-layout";
import { DashboardTab } from "../../../features/app/dashboard-tab";
import cryptobanner from "../../../assets/banners/Cryptocurrency.png";
import { Banner } from "../../../components/Banner";
import { Card, CardDescription } from "../../../components/Card";
export const DashboardRoute: React.FC = () => {
  return (
    <DashboardLayout>
      <Tabs defaultActiveTab={0}>
        <Tab label="Crypto" icon={faBitcoinSign}>
          <Divider />

          <Banner src={cryptobanner} />

          <DashboardTab name="Crypto" dataset="cryptocurrencies" />
        </Tab>
        <Tab label="Stocks" icon={faDollar}>
          <Divider />
          <DashboardTab name="Stocks" dataset="stocks" />
        </Tab>
        <Tab label="Commodities" icon={faDroplet}>
          <Divider />
          <DashboardTab name="Commodities" dataset="commodities" />
        </Tab>
      </Tabs>
    </DashboardLayout>
  );
};
