import CountUp from "react-countup";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
AOS.refresh();

const BasicInfo = () => {
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-offset="0"
      data-aos-delay="0"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out-quart"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
      className="my-20 grid grid-cols-1 md:grid-cols-4 gap-10"
    >
      {/* 



 */}

      <div className="card drop-shadow-lg w-64 bg-[#e46161] shadow-xl mx-auto text-[#98eecc] font-bold text-2xl">
        <div className="card-body shadow-xl rounded-xl">
          <h1 className="drop-shadow-lg">REVIEWS</h1>

          <p className="drop-shadow-lg">
            <CountUp start={1000} end={20000} duration={5}></CountUp>
            <span className="text-3xl">+</span>
          </p>
        </div>
      </div>
      {/* 



 */}
      <div className="card drop-shadow-lg w-64 bg-[#e46161] shadow-xl mx-auto text-[#98eecc] font-bold text-2xl">
        <div className="card-body shadow-xl rounded-xl">
          <h1 className="drop-shadow-lg">LIKES</h1>

          <p className="drop-shadow-lg">
            <CountUp start={1000} end={25000} duration={5}></CountUp>{" "}
            <span className="text-3xl">+</span>
          </p>
        </div>
      </div>
      {/* 



 */}
      <div className="card drop-shadow-lg w-64 bg-[#e46161] shadow-xl mx-auto text-[#98eecc] font-bold text-2xl">
        <div className="card-body shadow-xl rounded-xl">
          <h1 className="drop-shadow-lg">COMMENTS</h1>
          <p className="drop-shadow-lg">
            <CountUp start={5000} end={2000} duration={5}></CountUp>{" "}
            <span className="text-3xl">+</span>
          </p>{" "}
        </div>
      </div>
      {/* 



 */}
      <div className="card drop-shadow-lg w-64 bg-[#e46161] shadow-xl mx-auto text-[#98eecc] font-bold text-2xl">
        <div className="card-body shadow-xl rounded-xl">
          <h1 className="drop-shadow-lg">STARS</h1>
          <p className="drop-shadow-lg">4.8</p>{" "}
        </div>
      </div>
      {/* 



 */}
    </div>
  );
};

export default BasicInfo;
