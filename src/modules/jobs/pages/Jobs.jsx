import { use } from "react";
import Jobcard from "../components/Jobcard";
import TypewriterText from "../../../utils/TypeWriterEffect";

const Jobs = ({ jobPromise }) => {
  const jobs = use(jobPromise);

  return (
    <div className="bg-gray-50 p-3">
      <h1 className="text-2xl font-semibold text-purple-400 text-center ">
        <TypewriterText words={["Hot Jobs of the Day !!"]} />
      </h1>
      {/* render jobs */}
      <div className="flex justify-center gap-10 flex-wrap my-16">
        {jobs.map((job) => (
          <Jobcard key={job?._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default Jobs;
