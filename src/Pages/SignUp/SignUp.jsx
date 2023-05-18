import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../../Providers/AuthProvider";
import Lottie from "lottie-react";
import register from "../../assets/register.json";

const SignUp = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { createUser } = useContext(AuthContext);
  const [accepted, setAccepted] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    setError("");
    setSuccess("");

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        setSuccess(RegistrationSuccessful);

        form.reset();
        updateUserData(result.user, name, photo);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  const handleAccepted = (e) => {
    setAccepted(e.target.checked);
  };

  const updateUserData = (user, name, photo) => {
    updateProfile(user, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        console.log("user name updated");
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  const RegistrationSuccessful = (
    <>
      <p className="text-center">
        Registration Successful... <br /> Please visit{" "}
        <Link
          className="btn btn-sm m3 text-black bg-[#FF4A4A] hover:bg-[#98eecc] border-0 shadow-xl"
          to="/login"
        >
          Login
        </Link>{" "}
        page...
      </p>
    </>
  );

  return (
    <div className="bg-[#0A4D68] rounded-3xl my-24 hero font-Cambria ">
      <div className="hero-content mx-auto flex-col py-16 lg:flex-row-reverse">
        <h1 className="  bg-[#fbffdc]  rounded-2xl px-6 py-3 shadow-xl ">
          <Lottie animationData={register} loop></Lottie>
        </h1>

        <div className="card flex-shrink-0 w-full max-w-sm md:max-w-md shadow-2xl bg-[#fbffdc]">
          {/* 

 */}
          <h1 className="text-center text-4xl font-bold  bg-[#FF4A4A]  px-6 py-3 shadow-2xl rounded-es-3xl rounded-ee-3xl">
            Please Register !!
          </h1>
          {/* 

 */}
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-bold my-1">
                  Your Name
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                name="name"
                id="name"
                required
                className="input input-bordered"
              />
            </div>
            {/* 

 */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-bold my-1">
                  Photo URL
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter Photo URL"
                name="photo"
                id="photo"
                required
                className="input input-bordered"
              />
            </div>
            {/* 

 */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-bold my-1">Email</span>
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
                type="password"
                placeholder="Enter your password"
                name="password"
                id="password"
                required
                className="input input-bordered"
              />
            </div>
            {/* 

 */}
            <div className="form-control">
              <label className="label cursor-pointer justify-start gap-3">
                <input
                  type="checkbox"
                  onClick={handleAccepted}
                  name="accept"
                  id="accept"
                  className="checkbox checkbox-accent"
                />
                <span className="label-text font-bold my-1">
                  Accept Term & Conditions{" "}
                </span>
              </label>
            </div>
            {/* 

 */}
            <div className="form-control mt-6">
              {accepted ? (
                <button className="terms">Register</button>
              ) : (
                <button className="terms btn-disabled">Register</button>
              )}
            </div>
            {/* 

 */}
            <p className="text-xl font-bold text-center my-5">
              Already have an account?{" "}
              <span>
                <Link
                  to="/login"
                  className="btn btn-sm my-5 mx-3 text-black bg-[#FF4A4A] hover:bg-[#98eecc]  border-0 shadow-xl"
                >
                  Login
                </Link>
              </span>
            </p>
            {/* 

 */}
            {error && (
              <div className="text-red-600 bg-red-100 text-center rounded-3xl px-2 py-1">
                {error}
              </div>
            )}
            {/* 

 */}
            {success && (
              <div className="text-green-600 bg-green-100 rounded-3xl px-2 py-1">
                {success}{" "}
              </div>
            )}
          </form>
          {/* 

 */}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
