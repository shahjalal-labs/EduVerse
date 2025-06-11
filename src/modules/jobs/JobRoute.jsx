import JobDetails from "./pages/JobDetails";
import Jobs from "./pages/Jobs";

const jobRoute = {
  path: "/jobs",
  // element: <Jobs />,
  children: [
    {
      path: "/jobs/:id",
      element: <JobDetails />,
    },
  ],
};

export default jobRoute;
