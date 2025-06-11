import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../../../utils/fetchData";
import useAuth from "../../../hooks/useAuth";
import Spinner from "../../shared/Layout/Spinner";
import ErrorMessage from "../../../utils/ErrorMessage";
import ApplicationTable from "../component/ApplicationTable";
const MyApplication = () => {
  const { user } = useAuth();
  const {
    isPending,
    error,
    data: applications,
  } = useQuery({
    queryKey: ["myApplication"],
    queryFn: () =>
      fetchData("applications", {
        email: user?.email,
      }),
  });
  if (isPending) return <Spinner />;
  if (error) return <ErrorMessage error={error} />;
  return (
    <div className="my-10">
      <h1 className="text-2xl sm:text-3xl font-semibold text-purple-400 text-center mb-9 text-shadow-initial ">
        🚀 Nice! {applications.length} job{applications.length > 1 && "s"}{" "}
        application submitted.
      </h1>
      {/*  render applications ,, in a table*/}
      <ApplicationTable applications={applications} />
    </div>
  );
};

export default MyApplication;
