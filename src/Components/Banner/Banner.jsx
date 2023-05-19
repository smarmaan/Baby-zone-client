import banner1 from "../../assets/banner-images/Marvel-Legends.jpg";
import banner2 from "../../assets/banner-images/Marvel-Legends-2.jpg";
import banner3 from "../../assets/banner-images/Marvel-Legends-3.jpg";
import banner4 from "../../assets/banner-images/Marvel-Legends-4.png";

const Banner = () => {
  return (
    <div className=" carousel w-10 h-10  md:w-full md:h-full rounded-2xl shadow-2xl">
      <div id="slide1" className="carousel-item relative  md:w-full md:h-full">
        <img src={banner1} className=" w-full h-full " />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="slides-btn-style">
            ❮
          </a>
          <a href="#slide2" className="slides-btn-style">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={banner2} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="slides-btn-style">
            ❮
          </a>
          <a href="#slide3" className="slides-btn-style">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={banner3} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="slides-btn-style">
            ❮
          </a>
          <a href="#slide4" className="slides-btn-style">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={banner4} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="slides-btn-style">
            ❮
          </a>
          <a href="#slide1" className="slides-btn-style">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
