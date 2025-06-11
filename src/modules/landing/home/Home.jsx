import Banner from "./Banner/Banner";
import UseHelmet from "../../../hooks/useHelmet";
import Jobs from "../../jobs/pages/Jobs";
import { Suspense } from "react";
import Spinner from "../../shared/Layout/Spinner";

const Home = () => {
  const jobPromise = fetch("http://localhost:3000/jobs").then((res) =>
    res.json(),
  );
  return (
    <div>
      <UseHelmet title="Home" />

      <Banner />
      <Suspense fallback={<Spinner />}>
        <Jobs jobPromise={jobPromise} />
      </Suspense>
    </div>
  );
};

export default Home;
