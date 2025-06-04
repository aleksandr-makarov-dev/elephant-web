import { BoardPage } from "@/features/task-management/pages/board-page";
import { BoardsPage } from "@/features/task-management/pages/boards-page";
import { createBrowserRouter, RouterProvider } from "react-router";

const createAppRouter = () =>
  createBrowserRouter([
    {
      path: "/d/boards",
      element: <BoardsPage />,
    },
    {
      path: "/d/boards/:boardId",
      element: <BoardPage />,
    },
  ]);

export function AppRouter() {
  return <RouterProvider router={createAppRouter()} />;
}
