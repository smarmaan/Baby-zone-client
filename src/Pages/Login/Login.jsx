import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import google from "../../../src/assets/icons/google.png";
// import github from "../../../src/assets/icons/github.png";
import Lottie from "lottie-react";
import login from "../../assets/animation/login.json";
import useTitle from "../../Hooks/useTitle";
//
//
//
//
//
const Login = () => {
  useTitle("BABY ZONE | LOGIN");

  const {
    signIn,
    user,
    handleGoogleSignIn,
    //  handleGitHubSignIn
  } = useContext(AuthContext);
  const [passwordType, setPasswordType] = useState("password");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";
  //
  //
  //
  //
  //
  //
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    setError("");
    setSuccess("");

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        navigate(from, { replace: true });
        setSuccess("Login Successful");
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
        return;
      });
  };
  //
  //
  //
  //
  //
  //
  const togglePassword = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };
  //
  //
  //
  //
  //
  //
  const GoogleSignIn = () => {
    handleGoogleSignIn()
      .then((result) => {
        console.log(result);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };
  //
  //
  //
  //
  //

  // const GitHubSignIn = () => {
  //   handleGitHubSignIn()
  //     .then((result) => {
  //       console.log(result);
  //       navigate(from, { replace: true });
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //       setError(error.message);
  //     });
  // };
  console.log(user);

  //
  //
  //
  //
  //
  //
  return (
    <div className="bg-[#0A4D68] rounded-3xl my-24 hero font-Cambria ">
      <div className="hero-content mx-auto flex-col py-16 lg:flex-row-reverse">
        <h1 className="  bg-[#fbffdc]  rounded-2xl px-6 py-3 shadow-xl ">
          <Lottie animationData={login} loop></Lottie>
        </h1>

        <div className="card flex-shrink-0 w-full max-w-sm md:max-w-md shadow-2xl bg-[#fbffdc]">
          {/* 

 */}
          <h1 className="text-center text-4xl font-bold  bg-[#FF4A4A]  px-6 py-3 shadow-2xl rounded-es-3xl rounded-ee-3xl">
            Please Login !!
          </h1>
          {/* 

 */}
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-bold my-1">
                  Email address
                </span>
              </label>
              <input
                type="email"
                placeholder="Enter your email address"
                name="email"
                id="email"
                required
                className="input input-bordered"
              />
            </div>
            {/* 

 */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-bold my-1">
                  Password
                </span>
              </label>
              <input
                type={passwordType}
                placeholder="Enter your password"
                name="password"
                id="password"
                required
                className="input input-bordered"
              />
              <div className="my-2" onClick={togglePassword}>
                {passwordType === "password" ? (
                  <div className="faEye-style">
                    <FaEye></FaEye>
                    Show Password
                  </div>
                ) : (
                  <div className="faEye-style">
                    <FaEyeSlash />
                    Hide Password
                  </div>
                )}
              </div>
              <label className="label">
                <Link
                  to=""
                  className="label-text-alt link link-hover text-xl font-bold my-1"
                >
                  Forgot password?
                </Link>
              </label>
            </div>
            {/* 

 */}
            <div className="form-control">
              <button className="terms">Login</button>
            </div>
            {/* 

 */}
            <div className="flex items-center justify-center gap-3 mt-5">
              <div className="form-control">
                <Link
                  onClick={GoogleSignIn}
                  className="btn btn-sm bg-[#98eecc] hover:bg-[#30f1f1] border-0 shadow-xl"
                  to="/"
                >
                  <img className="w-5" src={google} alt="" />
                </Link>
              </div>
              {/* <div className="form-control">
                <Link
                  onClick={GitHubSignIn}
                  className="btn btn-sm  bg-[#98eecc] hover:bg-[#30f1f1] border-0 shadow-xl"
                  to="/"
                >
                  <img
                    className="w-5 bg-white rounded-full"
                    src={github}
                    alt=""
                  />{" "}
                </Link>
              </div> */}
            </div>
            {/* 

 */}
          </form>

          <p className="text-xl font-bold text-center">
            New to this website..? <br />{" "}
            <span className="">
              <Link
                to="/register"
                className="btn btn-sm my-5 mx-3 text-black bg-[#FF4A4A] hover:bg-[#98eecc]  border-0 shadow-xl"
              >
                Register
              </Link>
            </span>
          </p>
          {/* 

 */}

          <div className="mb-5 mx-5 ">
            {error && (
              <div className="text-red-600 bg-red-100 rounded-3xl p-5">
                {error}
              </div>
            )}
            {/* 

 */}
            {success && (
              <div className="text-green-600 bg-green-100 rounded-3xl p-5">
                {success}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
