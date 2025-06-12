import { motion } from "motion/react";
import { format } from "date-fns";
// import Lottie from "lottie-react";
// import animationData from "@/assets/animations/education.json";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../../../utils/fetchData";

const assignmentsData = [
  // Paste your array of assignment objects here
];

const Assignments = () => {
  const [assignments, setAssignments] = useState([]);

  const {
    data: myPostedJobs,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useQuery({
    queryKey: ["myPostedjobs", "assignments"],
    queryFn: () =>
      fetchData("/assignments", {
        // email: user?.email,
      }),
  });

  console.log(`myPostedJobs`, myPostedJobs, "Assignments.jsx", 22);
  useEffect(() => {
    // Simulate loading data from API
    setAssignments(myPostedJobs?.data);
  }, [myPostedJobs]);
  return (
    <div className="px-4 py-10 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <motion.h1
          className="text-4xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          📚 Available Assignments
        </motion.h1>
        <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
          Dive into interactive learning tasks tailored for your growth and
          challenge level.
        </p>
        <div className="w-32 mx-auto mt-4">
          {/* <Lottie animationData={animationData} loop={true} /> */}
        </div>
      </div>

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
        {isSuccess && assignments?.map((assignment) => (
          <motion.div
            key={assignment._id}
            className="card bg-base-100 shadow-xl border hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <figure>
              <img
                src={assignment.thumbnailUrl}
                alt="Thumbnail"
                className="w-full h-52 object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-xl font-semibold">
                {assignment.title}
              </h2>
              <p className="text-gray-600 text-sm">
                {assignment.description.length > 80
                  ? assignment.description.slice(0, 80) + "..."
                  : assignment.description}
              </p>
              <div className="mt-2">
                <div className="badge badge-secondary mr-2">
                  Difficulty: {assignment.difficulty}
                </div>
                <div className="badge badge-info">
                  Marks: {assignment.marks}
                </div>
              </div>
              <p className="text-sm text-gray-400 mt-2">
                Due: {format(new Date(assignment.dueDate), "PPP")}
              </p>
              <div className="card-actions justify-end mt-4">
                <button className="btn btn-sm btn-primary">View Details</button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Assignments;
