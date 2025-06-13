import { createBrowserRouter } from "react-router";
import App from "../App";
import { RootLayout } from "../modules/shared/Layout";
import ProtectedRoute from "./ProtectedRoute";
// import AuthRoute from "../modules/jobs/AuthRoute";
import AuthRoute from "../modules/Auth/AuthRoute";
import CreateAssignment from "../modules/assignments/pages/CreateAssignment";
import Assignments from "../modules/assignments/pages/Assignments";
import PendingAssignments from "../modules/assignments/pages/PendingAssignments";
import MyAttemptedAssignments from "../modules/assignments/pages/MyAttemptedAssignments";
import UpdateAssignment from "../modules/assignments/pages/UpdateAssignment";
import Errorpage from "./ErrorPage";
import AssignmentDetailsPage from "../modules/assignments/pages/AssignmentDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <Errorpage />,
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
      {
        path: "assignments/pending",
        element: (
          <ProtectedRoute>
            <PendingAssignments />
          </ProtectedRoute>
        ),
      },
      {
        path: "assignments/my-attempted",
        element: (
          <ProtectedRoute>
            <MyAttemptedAssignments />
          </ProtectedRoute>
        ),
      },
      {
        path: "assignment/update/:id",
        element: (
          <ProtectedRoute>
            <UpdateAssignment />
          </ProtectedRoute>
        ),
      },
      {
        path: "assignment/details/:id",
        element: (
          <ProtectedRoute>
            <AssignmentDetailsPage />
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
