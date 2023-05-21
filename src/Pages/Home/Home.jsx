import Banner from "../../Components/Banner/Banner";
import BasicInfo from "../../Components/BasicInfo/BasicInfo";
import CommentSection from "../../Components/CommentSection/CommentSection";
import CustomTab from "../../Components/Custom/CustomTab";
import Gallery from "../../Components/Gallery/Gallery";
import HomeText from "../../Components/HomeText/HomeText";
import LeftCard from "../../Components/LeftCard/LeftCard";
import RightSide from "../../Components/RightSide/RightSide";
import useTitle from "../../Hooks/useTitle";

const Home = () => {
  useTitle("BABY ZONE | HOMEPAGE");

  return (
    <div>
      <div className="card-body md:text-3xl font-Cambria font-bold text-red-800 text-center bg-[#fbffdc] my-10 rounded-2xl shadow-2xl drop-shadow-xl">
        <span className="text-4xl"> NOTE </span>
        <br /> &#34;Please Reload the website for better performance after
        Registering your Account&#34;..
      </div>

      <div className="my-10 gap-20 md:gap-4 grid md:grid-cols-12 text-center justify-center">
        <div
          className="col-span-1
         md:col-span-4 "
        >
          <LeftCard />
        </div>
        <div className="col-span-1 md:col-span-7">
          <Banner />
        </div>
        <div className="col-span-1 md:col-span-1">
          <RightSide />
        </div>
      </div>

      <HomeText></HomeText>

      <BasicInfo></BasicInfo>

      <Gallery></Gallery>

      <CustomTab></CustomTab>

      <div>
        <CommentSection></CommentSection>
      </div>
    </div>
  );
};

export default Home;
