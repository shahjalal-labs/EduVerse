import { LocationEditIcon } from "lucide-react";
import { Link } from "react-router";
import { useNavigate } from "react-router";

const Jobcard = ({ job }) => {
  const navigate = useNavigate();
  const {
    title,
    requirements,
    status,
    category,
    _id,
    company_logo,
    description,
    location,
    salaryRange,
  } = job;
  return (
    <div
      className="card bg-base-100 max-w-96 shadow-sm hover-effect cursor-pointer"
      onClick={() => navigate(`/jobs/${_id}`)}
    >
      <div className="flex items-center  gap-2">
        <img src={company_logo} width={60} />
        <div>
          <h1 className="text-xl sm:text-xl font-bold">{category}</h1>

          <p className="text-xs flex items-center gap-1">
            <span>
              <LocationEditIcon />
            </span>
            <span> {location}</span>
          </p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">{status}</div>
        </h2>
        <p>
          Salary: {salaryRange?.min} - {salaryRange?.max}{" "}
          {salaryRange?.currency}
        </p>
        <p>{description}</p>
        <div className="card-actions mt-4">
          {requirements.map((req, idx) => (
            <div key={idx} className="badge badge-outline">
              {req}
            </div>
          ))}
        </div>
        <button className="btn mt-4 btn-soft btn-success rounded-full">
          <Link to={`/jobs/${_id}`}>View Details</Link>
        </button>
      </div>
    </div>
  );
};

export default Jobcard;
