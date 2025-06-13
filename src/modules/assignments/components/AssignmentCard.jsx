import { useMutation } from "@tanstack/react-query";
import customAlert from "../../../utils/customAlert";
import useAuth from "../../../hooks/useAuth";
import { format } from "date-fns";
import { motion } from "motion/react";
import { deleteData } from "../../../utils/deleteData";
const AssignmentCard = ({ assignment }) => {
  const { user } = useAuth();
  const { mutate: deleteAssignment, isPending } = useMutation({
    mutationFn: ({ endpoint, body }) => deleteData(endpoint, body),
    mutationKey: ["deleteAssignment", "deleteSingleassignment"],
    onSuccess: (data) => {
      console.log("success", data);
      customAlert({
        text: "Assignment deleted successfully",
        timer: 2000,
        showConfirmButton: true,
      });
    },
    onError: (err) => {
      const { response } = err;
      const errMessage = response?.data?.message;

      customAlert({
        title: "Error Occured",
        text: errMessage,
        icon: "error",
        timer: 2000,
      });
    },
  });

  const handleDeleteAssignment = async () => {
    alert("Are you sure to delete this assignment?");
    await deleteAssignment({
      endpoint: `assignments/delete-assignment/${assignment._id}`,
      body: { email: user?.email },
    });
  };
  return (
    <div>
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
            <div className="badge badge-info">Marks: {assignment.marks}</div>
          </div>
          <p className="text-sm text-gray-400 mt-2">
            Due: {format(new Date(assignment.dueDate), "PPP")}
          </p>
          <div className="card-actions max-sm:flex-col justify-center gap-2  mt-8 *:max-sm:btn-block *:btn-outline *:btn-info *:min-w-[98px]">
            <button
              onClick={handleDeleteAssignment}
              className="btn btn-sm btn-primary"
              disabled={isPending}
            >
              {isPending ? "Deleting.." : "Delete"}
            </button>
            <button className="btn btn-sm btn-primary">Update</button>
            <button className="btn btn-sm btn-primary">View Details</button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AssignmentCard;
