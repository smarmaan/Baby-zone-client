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

import companylogo1 from "../../assets/company-logos/company-logo-1.jpeg";
import companylogo2 from "../../assets/company-logos/company-logo-2.jpeg";
import companylogo3 from "../../assets/company-logos/company-logo-3.jpeg";
import companylogo4 from "../../assets/company-logos/company-logo-4.jpeg";
import companylogo5 from "../../assets/company-logos/company-logo-5.jpeg";
import companylogo6 from "../../assets/company-logos/company-logo-6.jpeg";

const RightSide = () => {
  return (
    <div className="card md:w-28 md:h-full bg-green-50 shadow-xl rounded-2xl">
      <div className="my-auto">
        <Marquee
          className="font-bold py-6   rounded-2xl bg-[#fbffdc]"
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
          <p className="text-xl md:text-2xl flex-col mx-9  hidden md:block">
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

        <Marquee
          className="font-bold mt-5 py-6 rounded-2xl bg-[#f8c7a6] overflow-y-hidden"
          pauseOnHover={true}
          speed={160}
        >
          <p className=" text-xl md:text-2xl  mx-10 flex items-center gap-20">
            <figure className="w-28 rounded-3xl h-10">
              <img className="rounded-3xl" src={companylogo1} alt="" />
            </figure>
            <figure className="w-28 rounded-3xl h-10">
              <img className="rounded-3xl" src={companylogo2} alt="" />
            </figure>
            <figure className="w-28 rounded-3xl h-10">
              <img className="rounded-3xl" src={companylogo3} alt="" />
            </figure>
            <figure className="w-28 rounded-3xl h-10">
              <img className="rounded-3xl" src={companylogo4} alt="" />
            </figure>
            <figure className="w-28 rounded-3xl h-10">
              <img className="rounded-3xl" src={companylogo5} alt="" />
            </figure>
            <figure className="w-28 rounded-3xl h-10">
              <img className="rounded-3xl" src={companylogo6} alt="" />
            </figure>
          </p>
        </Marquee>
      </div>
    </div>
  );
};

export default RightSide;
