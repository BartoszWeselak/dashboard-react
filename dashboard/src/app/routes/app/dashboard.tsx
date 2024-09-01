import {
  faBitcoinSign,
  faDollar,
  faDroplet,
} from "@fortawesome/free-solid-svg-icons";
import { Divider } from "../../../components/Divider";
import { Tab, Tabs } from "../../../components/Tab";
import { ContentLayout } from "../../../layout/content-layout";
import { DashboardLayout } from "../../../layout/dashboard-layout";

export const DashboardRoute = () => {
  return (
    <DashboardLayout>
      <Tabs defaultActiveTab={1}>
        <Tab label="Crypto" icon={faBitcoinSign}>
          <Divider />
          <ContentLayout />
        </Tab>
        <Tab label="Currency" icon={faDollar}>
          <Divider />
          <ContentLayout />
        </Tab>
        <Tab label="Materials" icon={faDroplet}>
          <Divider />
          <ContentLayout />
        </Tab>
      </Tabs>
    </DashboardLayout>
  );
};
