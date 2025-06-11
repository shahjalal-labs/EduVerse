import { createBrowserRouter } from "react-router";
import App from "../App";
import { RootLayout } from "../modules/shared/Layout";
import ProtectedRoute from "./ProtectedRoute";
import AuthRoute from "../modules/jobs/AuthRoute";
import jobRoute from "../modules/jobs/JobRoute";
import JobDetails from "../modules/jobs/pages/JobDetails";
import ThankYou from "../modules/jobs/pages/ThankYou";
import JobApply from "../modules/jobs/pages/JobApply";
import MyApplication from "../modules/myApplication/pages/MyApplication";
import AddJob from "../modules/users/recruiter/pages/AddJob";
import MyPostedJobs from "../modules/users/recruiter/pages/MyPostedJobs";
import ApplicantForPostedJobs from "../modules/users/recruiter/pages/ApplicantForPostedJobs";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        path: "/",
        Component: App,
      },
      {
        path: "jobs/thankyou",
        Component: ThankYou,
      },
      {
        path: "jobs/applyjob/:id",
        element: (
          <ProtectedRoute>
            <JobApply />
          </ProtectedRoute>
        ),
      },
      {
        path: "jobs/:id",
        element: (
          <ProtectedRoute>
            <JobDetails />
          </ProtectedRoute>
        ),
      },
      {
        path: "myApplications",
        element: (
          <ProtectedRoute>
            <MyApplication />
          </ProtectedRoute>
        ),
      },
      // recruiter routes
      {
        path: "recruiter/addjob",
        element: (
          <ProtectedRoute>
            <AddJob />
          </ProtectedRoute>
        ),
      },
      {
        path: "recruiter/mypostedjob",
        element: (
          <ProtectedRoute>
            <MyPostedJobs />
          </ProtectedRoute>
        ),
      },
      {
        path: "recruiter/applicantforpostedjobs",
        element: (
          <ProtectedRoute>
            <ApplicantForPostedJobs />
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
