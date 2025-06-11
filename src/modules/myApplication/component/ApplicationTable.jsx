import ApplicationTableHead from "./ApplicationTableHead";
import ApplicationTableRow from "./ApplicationTableRow";

const ApplicationTable = ({ applications }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/*table head */}
        <ApplicationTableHead />
        <tbody>
          {applications?.map((application, idx) => (
            <ApplicationTableRow
              application={application}
              key={idx}
              index={idx + 1}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApplicationTable;
