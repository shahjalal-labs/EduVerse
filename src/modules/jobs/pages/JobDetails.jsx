import { motion } from "motion/react";
import { Link, useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../../../utils/fetchData";
import { leftToRight } from "../../../animation/motion";
import UseHelmet from "../../../hooks/useHelmet";

const JobDetailsPage = () => {
  const { id } = useParams();

  const {
    data: job,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["jobDetails", id],
    queryFn: () => fetchData(`http://localhost:3000/jobs/${id}`),
    enabled: !!id,
  });

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-64">
        <span className="loading loading-spinner text-primary"></span>
      </div>
    );

  if (isError)
    return (
      <div className="text-center text-error mt-10">
        Failed to load job: {error.message}
      </div>
    );

  return (
    <motion.div className="max-w-4xl mx-auto p-6 " {...leftToRight}>
      <UseHelmet title="Job Details" />
      <div className="card bg-base-100 shadow-xl hover-effect">
        <div className="card-body">
          <div className="flex items-center gap-4 mb-4">
            <img
              src={job.company_logo}
              alt="Company Logo"
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h2 className="card-title text-2xl max-sm:text-xl">
                {job.title}
              </h2>
              <p className="text-gray-500">{job.company}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            <div className="badge badge-outline">{job.location}</div>
            <div className="badge badge-outline">{job.jobType}</div>
            <div className="badge badge-outline">{job.category}</div>
            <div className="badge badge-outline">
              Salary: {job?.salaryRange?.min}-{job?.salaryRange?.max}{" "}
              {job?.salaryRange?.currency?.toUpperCase()}
            </div>
            <div className="badge badge-outline">
              Deadline: {job.applicationDeadline}
            </div>
            <div className="badge badge-outline">Status: {job.status}</div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-1">Description</h3>
            <p>{job.description}</p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-1">Requirements</h3>
            <ul className="list-disc list-inside">
              {job.requirements.map((req, idx) => (
                <li key={idx}>{req}</li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-1">Responsibilities</h3>
            <ul className="list-disc list-inside">
              {job.responsibilities.map((res, idx) => (
                <li key={idx}>{res}</li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-1">Contact</h3>
            <p>HR Name: {job.hr_name}</p>
            <p>
              Email:{" "}
              <Link className="text-primary" href={`mailto:${job.hr_email}`}>
                {job.hr_email}
              </Link>
            </p>
          </div>

          <div className="card-actions justify-end">
            <Link
              className="btn btn-primary w-full"
              to={`/jobs/applyjob/${id}`}
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default JobDetailsPage;
