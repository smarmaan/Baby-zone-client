import Marquee from "react-fast-marquee";

import pro1 from "../../assets/profiles/profile-1.png";

const CommentSection = () => {
  return (
    <div>
      <h2>Some Blocks/cards like reviews like comments starts...</h2>

      <div>
        <Marquee
          className="font-bold py-6 rounded-2xl bg-[#fbffdc]"
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
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
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
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
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
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
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
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
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
          <div className=" card w-96 mx-7  bg-base-100 shadow-xl">
            <div className="avatar">
              <div className="w-24 rounded-xl">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
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
