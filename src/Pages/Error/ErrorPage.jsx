import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import error from "../../assets/animation/error-404.json";
import useTitle from "../../Hooks/useTitle";

const ErrorPage = () => {


  useTitle("BABY ZONE | ERROR")


  return (
    <div className="hero min-h-screen">
      <div className="text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="bg-[#fbffdc]  rounded-2xl shadow-xl my-5">
            <Lottie animationData={error} loop></Lottie>
          </h1>

          <Link to="/">
            <button className="btn hover:bg-[#ffc700] terms md:btn-lg btn-wide">
              BACK TO HOMEPAGE
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
