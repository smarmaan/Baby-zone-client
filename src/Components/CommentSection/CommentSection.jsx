import Marquee from "react-fast-marquee";

import pro1 from "../../assets/profiles/profile-1.png";
import pro2 from "../../assets/profiles/profile-2.png";
import pro3 from "../../assets/profiles/profile-3.png";
import pro4 from "../../assets/profiles/profile-4.png";
import pro5 from "../../assets/profiles/profile-5.png";
import pro6 from "../../assets/profiles/profile-6.png";

const CommentSection = () => {
  return (
    <div className="my-20">
      <div className="card md:w-[50%] mx-auto bg-[#fbffdc] text-[#0a4d7b] font-Cambria my-16">
        <div className="card-body items-center rounded-2xl text-justify md:text-center shadow-2xl">
          <h2 className="font-bold md:text-5xl underline">Comment Section</h2>
        </div>
      </div>
      <div>
        <Marquee
          className="font-bold py-6 rounded-2xl bg-[#fbffdc]  shadow-2xl"
          pauseOnHover={true}
          speed={160}
        >
          {/* 

 */}

          <div className=" card w-96 mx-7 bg-base-100 shadow-xl">
            <div className="avatar">
              <div className="w-24 rounded-xl">
                <img src={pro1} />
              </div>
            </div>

            <div className="card-body">
              <h2 className="card-title">Olivia Johnson</h2>
              <p>
                These action figures are a dream come true for any fan! The
                attention to detail is simply mind-blowing.
              </p>
            </div>
          </div>
          {/* 

 */}
          {/* 

 */}
          <div className=" card w-96 mx-7  bg-base-100 shadow-xl">
            <div className="avatar">
              <div className="w-24 rounded-xl">
                <img src={pro2} />
              </div>
            </div>

            <div className="card-body">
              <h2 className="card-title">Ethan Anderson</h2>
              <p>
                I can not get enough of the action figures from this store! They
                make playtime so much more exciting.
              </p>
            </div>
          </div>
          {/* 

 */}
          {/* 

 */}

          <div className=" card w-96 mx-7  bg-base-100 shadow-xl">
            <div className="avatar">
              <div className="w-24 rounded-xl">
                <img src={pro3} />
              </div>
            </div>

            <div className="card-body">
              <h2 className="card-title">Sophia Davis</h2>
              <p>
                As a collector, I am thrilled with the rare and limited-edition
                action figures I found here. My collection is now complete!
              </p>
            </div>
          </div>
          {/* 

 */}
          {/* 

 */}

          <div className=" card w-96 mx-7  bg-base-100 shadow-xl">
            <div className="avatar">
              <div className="w-24 rounded-xl">
                <img src={pro4} />
              </div>
            </div>

            <div className="card-body">
              <h2 className="card-title">Benjamin Parker</h2>
              <p>
                The quality of these action figures is top-notch. They are
                durable and built to withstand epic battles and adventures.
              </p>
            </div>
          </div>
          {/* 

 */}

          <div className=" card w-96 mx-7  bg-base-100 shadow-xl">
            <div className="avatar">
              <div className="w-24 rounded-xl">
                <img src={pro5} />
              </div>
            </div>

            <div className="card-body">
              <h2 className="card-title">Ava Thompson</h2>
              <p>
                The range of characters available is impressive! From
                superheroes to sci-fi. There is something for everyone.
              </p>
            </div>
          </div>
          {/* 

 */}
          <div className=" card w-96 mx-7 bg-base-100 shadow-xl ">
            <div className="avatar">
              <div className="w-24 rounded-xl">
                <img src={pro6} />
              </div>
            </div>

            <div className="card-body">
              <h2 className="card-title">Noah Wilson</h2>
              <p>
                The shipping was lightning fast, and my action figures arrived
                in perfect condition. I am already planning my next purchase!
              </p>
            </div>
          </div>
          {/* 

 */}
        </Marquee>
      </div>
    </div>
  );
};

export default CommentSection;
