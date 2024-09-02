import { Card, CardDescription } from "../../components/Card";
import { ContentLayout } from "../../layout/content-layout";
import { DashboardLayout } from "../../layout/dashboard-layout";

export const LandingRoute = () => {
  return (
    <DashboardLayout>
      {" "}
      <ContentLayout>
        {" "}
        <Card size={"full"}>
          <CardDescription>landing page</CardDescription>
        </Card>
        <Card size={"full"}>
          <CardDescription>landing page</CardDescription>
        </Card>
      </ContentLayout>
    </DashboardLayout>
  );
};
