import { QueryClient, useQueryClient } from "@tanstack/react-query";
import { useMemo } from "react";

import {
  LoaderFunctionArgs,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import { AppRoot } from "./routes/app/root";
import { ProtectedRoute } from "../hooks/auth-context";

export const createAppRouter = (queryClient: QueryClient) => {
  const routes: RouteObject[] = [
    {
      path: "/",
      lazy: async () => {
        const { LandingRoute } = await import("./routes/landing");
        return { Component: LandingRoute };
      },
    },
    {
      path: "/info/:id",
      lazy: async () => {
        const { InfoRoute } = await import("./routes/app/info");
        return { Component: InfoRoute };
      },
    },
    {
      path: "/dashboard",
      lazy: async () => {
        const { DashboardRoute } = await import("./routes/app/dashboard");
        return { Component: DashboardRoute };
      },
    },
    {
      path: "/auth/login",
      lazy: async () => {
        const { LoginRoute } = await import("./routes/auth/login");
        return { Component: LoginRoute };
      },
    },
    {
      path: "*",
    },
    {
      path: "/profile",
      lazy: async () => {
        const { ProfileRoute } = await import("./routes/app/profile");
        return {
          Component: () => (
            <ProtectedRoute>
              <ProfileRoute />
            </ProtectedRoute>
          ),
        };
      },
    },
    {
      path: "/wallet",
      lazy: async () => {
        const { WalletRoute } = await import("./routes/app/wallet");
        return {
          Component: () => (
            <ProtectedRoute>
              <WalletRoute />
            </ProtectedRoute>
          ),
        };
      },
    },
  ];
  const router = createBrowserRouter(routes);

  return router;
};
export const AppRouter = () => {
  const queryClient = useMemo(() => new QueryClient(), []);
  const router = createAppRouter(queryClient);

  return <RouterProvider router={router} />;
};
