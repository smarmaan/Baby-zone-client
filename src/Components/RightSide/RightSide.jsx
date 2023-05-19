import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { HiEnvelope } from "react-icons/hi2";
import { RiWhatsappFill } from "react-icons/ri";
import { BsTwitter, BsYoutube } from "react-icons/bs";
import {
  FaFacebookSquare,
  FaFacebookMessenger,
  FaDiscord,
  FaInstagramSquare,
} from "react-icons/fa";

const RightSide = () => {
  return (
    <div className="card md:w-28 md:h-full bg-green-50 shadow-xl">
      <Marquee
        className="font-bold py-6 rounded-b-2xl bg-[#fbffdc]"
        pauseOnHover={true}
        speed={150}
      >
        <p className=" text-xl md:text-2xl  mx-10 ">Contact us with.... </p>
        <p className=" text-xl md:text-2xl  mx-10 ">www.baby-zone.com </p>
        <p className=" text-xl md:text-2xl  mx-10 flex items-center gap-20">
          babyzone@gmail.com
          <Link to="https://mail.google.com/mail/u/0/#inbox?compose=new">
            <HiEnvelope className="text-4xl" />
          </Link>
          <Link to="https://www.facebook.com/">
            <FaFacebookSquare className="text-4xl" />
          </Link>
          <Link to="https://www.facebook.com/messages/t/">
            <FaFacebookMessenger className="text-4xl" />
          </Link>
          <Link to="https://www.instagram.com/">
            <FaInstagramSquare className="text-4xl" />
          </Link>
          <Link to="https://discord.com/">
            <FaDiscord className="text-4xl" />
          </Link>
          <Link to="https://twitter.com/">
            <BsTwitter className="text-4xl" />
          </Link>
          <Link to="https://www.youtube.com/">
            <BsYoutube className="text-4xl" />
          </Link>
          <Link to="https://www.whatsapp.com/">
            <RiWhatsappFill className="text-4xl" />
          </Link>
        </p>
      </Marquee>

      <div>
        <p className="text-xl md:text-2xl flex-col mx-9 my-24 hidden md:block">
          <Link to="https://mail.google.com/mail/u/0/#inbox?compose=new">
            <HiEnvelope className="icon-hover-style" />
          </Link>
          <Link to="https://www.facebook.com/">
            <FaFacebookSquare className="icon-hover-style" />
          </Link>
          <Link to="https://www.facebook.com/messages/t/">
            <FaFacebookMessenger className="icon-hover-style" />
          </Link>
          <Link to="https://www.instagram.com/">
            <FaInstagramSquare className="icon-hover-style" />
          </Link>
          <Link to="https://discord.com/">
            <FaDiscord className="icon-hover-style" />
          </Link>
          <Link to="https://twitter.com/">
            <BsTwitter className="icon-hover-style" />
          </Link>
          <Link to="https://www.youtube.com/">
            <BsYoutube className="icon-hover-style" />
          </Link>
          <Link to="https://www.whatsapp.com/">
            <RiWhatsappFill className="icon-hover-style" />
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RightSide;
