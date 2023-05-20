import footerLogo from "../../../assets/Footer-Logo.png";

import {
  FaFacebook,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="footer pt-10 bg-[#fbffdc]  mt-20  rounded-ss-3xl  rounded-se-3xl font-Cambria text-[#0a4d7b] font-bold text-xl">
        <div>
          <img src={footerLogo} className="md:w-64 md:h-30" alt="Logo" />
        </div>
        <div>
          <span className="footer-title text-[#e40e0e] text-2xl">Shop</span>
          <a className="link link-hover">Action Figures</a>
          <a className="link link-hover">Collectibles</a>
          <a className="link link-hover">Accessories</a>
          <a className="link link-hover">New Releases</a>
        </div>
        <div>
          <span className="footer-title text-[#e40e0e] text-2xl">
            Categories
          </span>
          <a className="link link-hover">Superheroes</a>
          <a className="link link-hover">Sci-Fi</a>
          <a className="link link-hover">Anime & Manga</a>
          <a className="link link-hover">TV & Movies</a>
        </div>

        <div>
          <span className="footer-title text-[#e40e0e] text-2xl">
            Customer Service
          </span>
          <a className="link link-hover">Order Tracking</a>
          <a className="link link-hover">Warranty Information</a>
          <a className="link link-hover">Payment Options</a>
          <a className="link link-hover">Product Support</a>
        </div>

        <div>
          <span className="footer-title text-[#e40e0e] text-2xl">
            Customer Support
          </span>
          <a className="link link-hover">FAQ</a>
          <a className="link link-hover">Shipping & Returns</a>
          <a className="link link-hover">Contact Us</a>
        </div>

        <div className=" text-center">
          <span className="footer-title  text-[#e40e0e] text-2xl ">
            Join our community <br />{" "}
            <span className="text-3xl drop-shadow-2xl shadow-xl rounded-xl">
              BABY ZONE
            </span>{" "}
          </span>
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text text-lg font-bold  ">
                Enter your email address
              </span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16 shadow-xl drop-shadow-xl"
              />
              <button className="btn text-black border-0 shadow-xl normal-case text-xl font-bold bg-[#FF4A4A] hover:bg-[#98eecc] absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>

      <footer className="footer p-10 bg-[#fbffdc]  mb-20  rounded-es-3xl  rounded-ee-3xl font-Cambria  font-bold  items-center  text-[#ef8675] text-xl text-center">
        <div className="items-center grid-flow-col">
          <p>
            BABY ZONE Industries Ltd. <br />
            Providing since 2020
          </p>
        </div>

        <div>
          <p>
            Copyright © 2020 - All right reserved by BABY ZONE Industries Ltd
          </p>
        </div>

        <div className="md:place-self-center md:justify-self-end">
          <div className="">
            <span className="text-lg font-bold">Follow us on:</span>
            <div className="flex space-x-4 mt-2">
              <a
                href="#"
                className="btn btn-outline text-[#ef8675] shadow-xl hover:bg-[#98eecc] rounded-2xl hover:text-5xl hover:text-black hover:border-0  btn-square  drop-shadow-xl"
              >
                <FaFacebook className="text-4xl" />
              </a>
              <a
                href="#"
                className="btn btn-outline text-[#ef8675] shadow-xl hover:bg-[#98eecc] rounded-2xl hover:text-5xl hover:text-black hover:border-0  btn-square  drop-shadow-xl"
              >
                <FaInstagram className="text-4xl" />
              </a>
              <a
                href="#"
                className="btn btn-outline text-[#ef8675] shadow-xl hover:bg-[#98eecc] rounded-2xl hover:text-5xl hover:text-black hover:border-0  btn-square  drop-shadow-xl"
              >
                <FaTwitter className="text-4xl" />
              </a>
              <a
                href="#"
                className="btn btn-outline text-[#ef8675] shadow-xl hover:bg-[#98eecc] rounded-2xl hover:text-5xl hover:text-black hover:border-0  btn-square  drop-shadow-xl"
              >
                <FaPinterestP className="text-4xl " />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
