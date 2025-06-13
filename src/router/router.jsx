import { createBrowserRouter } from "react-router";
import App from "../App";
import { RootLayout } from "../modules/shared/Layout";
import ProtectedRoute from "./ProtectedRoute";
// import AuthRoute from "../modules/jobs/AuthRoute";
import AuthRoute from "../modules/Auth/AuthRoute";
import CreateAssignment from "../modules/assignments/pages/CreateAssignment";
import Assignments from "../modules/assignments/pages/Assignments";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        path: "/",
        Component: App,
      },

      // faq pages

      // assignments route
      {
        path: "assignments/create",
        element: (
          <ProtectedRoute>
            <CreateAssignment />
          </ProtectedRoute>
        ),
      },
      {
        path: "assignments",
        element: (
          <ProtectedRoute>
            <Assignments />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/about",
    element: <div>About</div>,
  },

  AuthRoute,
]);

export default router;
