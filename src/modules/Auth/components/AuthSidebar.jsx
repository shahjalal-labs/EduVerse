import { sidebarDatas } from "./constant";
import SideBarCard from "./SideBarCard";

const AuthSidebar = () => {
  return (
    <div className="bg-base-200 p-3 flex flex-col gap-8 rounded-md mb-5">
      <h2 className="text-xl font-bold text-purple-900 text-center">
        Why Sign In to WorkElevate?
      </h2>

      {sidebarDatas.map((sidebar, idx) => (
        <SideBarCard sideBar={sidebar} key={idx} />
      ))}
    </div>
  );
};

export default AuthSidebar;
