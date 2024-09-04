import { Card, CardDescription } from "../../components/Card";
import { useAuth } from "../../hooks/auth-context";
import { ContentLayout } from "../../layout/content-layout";
import { DashboardLayout } from "../../layout/dashboard-layout";

export const LandingRoute = () => {
  const { user, logout } = useAuth();

  return (
    <DashboardLayout>
      {" "}
      <ContentLayout>
        {" "}
        <Card size={"full"}>
          <CardDescription>test</CardDescription>
        </Card>
        <Card size={"full"}>
          <CardDescription>test</CardDescription>
        </Card>
      </ContentLayout>
    </DashboardLayout>
  );
};
