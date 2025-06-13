import { motion } from "motion/react";
import ErrorMessage from "../../../utils/ErrorMessage";
import Spinner from "../../shared/Layout/Spinner";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../../../utils/fetchData";
import AssignmentCard from "../components/AssignmentCard";
import AssignmentsPageIntro from "../components/AssignmentsPageIntro";

const Assignments = () => {
  const [assignments, setAssignments] = useState([]);

  const {
    data: myPostedJobs,
    isPending,
    isError,
    error,
    isSuccess,
  } = useQuery({
    queryKey: ["myPostedjobs", "assignments"],
    queryFn: () => fetchData("/assignments"),
  });

  // console.log(`myPostedJobs`, myPostedJobs, "Assignments.jsx", 22);
  useEffect(() => {
    isSuccess && setAssignments(myPostedJobs?.data);
  }, [myPostedJobs]);
  return (
    <div className="px-4 py-10 max-w-7xl mx-auto">
      <AssignmentsPageIntro />
      {isError && <ErrorMessage error={error} />}
      {isPending && <Spinner />}

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {isSuccess &&
          assignments?.map((assignment) => (
            <AssignmentCard key={assignment._id} assignment={assignment} />
          ))}
      </motion.div>
    </div>
  );
};

export default Assignments;
