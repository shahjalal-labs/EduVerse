import { format } from "date-fns";
import { motion } from "motion/react";
const AssignmentCard = ({ assignment }) => {
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
            <button className="btn btn-sm btn-primary">Delete</button>
            <button className="btn btn-sm btn-primary">Update</button>
            <button className="btn btn-sm btn-primary">View Details</button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AssignmentCard;
