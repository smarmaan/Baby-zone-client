import pic1 from "../../assets/banner-images/Marvel-Legends.jpg";
import pic2 from "../../assets/banner-images/Marvel-Legends-2.jpg";
import pic3 from "../../assets/banner-images/Marvel-Legends-3.jpg";
import pic4 from "../../assets/banner-images/Marvel-Legends-4.png";
import pic5 from "../../assets/banner-images/Marvel-Legends-5.png";
import pic6 from "../../assets/banner-images/Marvel-Legends-6.png";
import pic7 from "../../assets/banner-images/Marvel-Legends-7.png";
import pic8 from "../../assets/banner-images/Marvel-Legends-8.png";
import pic9 from "../../assets/banner-images/Marvel-Legends-9.png";

const Gallery = () => {
  return (
    <div className="my-20 ">
      <div className="card md:w-[50%] mx-auto bg-[#fbffdc] text-[#0a4d7b] font-Cambria my-16">
        <div className="card-body items-center rounded-2xl text-justify md:text-center shadow-2xl">
          <h2 className="font-bold md:text-5xl underline">Gallery</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        <figure className="w-96 mx-auto my-10">
          <img className="gallery-pics" src={pic1} alt="Drink" />
        </figure>

        <figure className="w-96 mx-auto my-10">
          <img className="gallery-pics" src={pic2} alt="Drink" />
        </figure>

        <figure className="w-96 mx-auto my-10">
          <img className="gallery-pics" src={pic3} alt="Drink" />
        </figure>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16">
        <figure className="w-96 mx-auto my-10">
          <img className="gallery-pics" src={pic4} alt="Drink" />
        </figure>
        <figure className="w-96 mx-auto my-10">
          <img className="gallery-pics" src={pic5} alt="Drink" />
        </figure>
        <figure className="w-96 mx-auto my-10">
          <img className="gallery-pics" src={pic6} alt="Drink" />
        </figure>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16">
        <figure className="w-96 mx-auto my-10">
          <img className="gallery-pics" src={pic7} alt="Drink" />
        </figure>
        <figure className="w-96 mx-auto my-10">
          <img className="gallery-pics" src={pic8} alt="Drink" />
        </figure>
        <figure className="w-96 mx-auto my-10">
          <img className="gallery-pics" src={pic9} alt="Drink" />
        </figure>
      </div>
    </div>
  );
};

export default Gallery;
