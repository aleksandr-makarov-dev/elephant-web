import { createBrowserRouter, RouterProvider } from "react-router";
import { LandingPage } from "./pages/landing-page";
import { BoardsPage } from "./pages/dashboard/boards-page";

const createAppRouter = () =>
  createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/dashboard/boards",
      element: <BoardsPage />,
    },
  ]);

export function AppRouter() {
  return <RouterProvider router={createAppRouter()} />;
}
