const ApplicationTableHead = ({
  h1 = "#",
  h2 = "Name",
  h3 = "Salary & Id",
  h4 = "View Details",
  h5 = "",
}) => {
  let isRecruiter;

  if (!h2.toLowerCase().includes("name")) {
    isRecruiter = true;
  }
  return (
    <thead>
      <tr>
        <th>{h1}</th>
        <th>{h2}</th>
        <th>{h3}</th>
        <th>{h4}</th>
        {isRecruiter && <th>{h5}</th>}
      </tr>
    </thead>
  );
};

export default ApplicationTableHead;
