import BannerCard from "./BannerCard";
import BannerImg from "./BannerImg";

const Banner = () => {
  return (
    <div className="banner-container min-h-[70vh]">
      <BannerImg />
      <BannerCard />
    </div>
  );
};

export default Banner;
