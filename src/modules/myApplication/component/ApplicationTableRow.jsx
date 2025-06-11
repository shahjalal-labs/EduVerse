import { Link } from "react-router";
import useCustomNavigate from "../../../utils/navigate";
import Navigate from "../../../utils/navigate";

const ApplicationTableRow = ({ application, index }) => {
  console.log(application, "ApplicationTableRow.jsx", 2);

  const { company_logo, title, company, jobId } = application;
  console.log(jobId, "ApplicationTableRow.jsx", 5);
  return (
    <tr>
      <td>{index}</td>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={company_logo} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{title}</div>
            <div className="text-sm opacity-50">{company}</div>
          </div>
        </div>
      </td>
      <td>
        {Math.floor(Math.random() * (10000 - 1000)) + 1000} BDT
        <br />
        <span className="adge  badge-sm">{application.jobId}</span>
      </td>
      <th>
        <Link to={`/jobs/${jobId}`}><button
          className="btn btn-ghost btn-xs"
        >
          details
        </button></Link>
      </th>
    </tr>
  );
};

export default ApplicationTableRow;
