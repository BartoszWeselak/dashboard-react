import { QueryClient, useQueryClient } from "@tanstack/react-query";
import { useMemo } from "react";

import {
  LoaderFunctionArgs,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

const Home = () => <h1>Home Page</h1>;
const About = () => <h1>About Page</h1>;
const NotFound = () => <h1>404 - Not Found</h1>;

export const createAppRouter = (queryClient: QueryClient) => {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ];
  const router = createBrowserRouter(routes);

  return router;
};
const AppRouter = () => {
  const queryClient = useMemo(() => new QueryClient(), []);
  const router = createAppRouter(queryClient);

  return <RouterProvider router={router} />;
};
