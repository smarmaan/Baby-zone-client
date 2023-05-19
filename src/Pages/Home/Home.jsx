import Banner from "../../Components/Banner/Banner";
import LeftCard from "../../Components/LeftCard/LeftCard";
import RightSide from "../../Components/RightSide/RightSide";

const Home = () => {
  return (
    <div>
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

      <h1>Left side picture</h1>
      <h1>Right Side Link</h1>

      <h2>Some text like paragraph</h2>
      <h2>Some Blocks/cards like reviews like comments starts</h2>
      <h1>Gallery</h1>
      <h1>Tabs</h1>
      <h1>Comments cards marquee</h1>
    </div>
  );
};

export default Home;
