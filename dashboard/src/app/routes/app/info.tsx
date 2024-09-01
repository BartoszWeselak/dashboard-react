import { DashboardLayout } from "../../../layout/dashboard-layout";
import { useParams } from "react-router-dom";

export const InfoRoute = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <DashboardLayout>
      {" "}
      <p> ID: {id}</p>
    </DashboardLayout>
  );
};
