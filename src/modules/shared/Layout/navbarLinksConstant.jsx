import { Link } from "react-router";

export const navItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Assignments",
    path: "/myapplications",
  },
  {
    name: "Pending Assignments",
    path: "/recruiter/addjob",
  },
  {
    name: "My Posted Job",
    path: "/recruiter/mypostedjob",
  },
];

const navbarLinks = () => {
  return navItems.map((item) => {
    return (
      <li>
        <Link to={item.path}>{item.name}</Link>
      </li>
    );
  });
};

export default navbarLinks;
