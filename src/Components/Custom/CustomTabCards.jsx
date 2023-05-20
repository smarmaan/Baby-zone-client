import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const CustomTabCards = ({ data }) => {
  const { name, picture, price, rating, available_quantity } = data;

  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleToast = () => {
    if (!user) {
      alert(`Please Login`);
      navigate("/login");
    }
  };

  return (
    <>
      <div className="card card-compact w-96 bg-base-100 shadow-xl drop-shadow-xl mx-auto my-12 font-Cambria">
        <figure className="w-96 h-96">
          <img src={picture} className="w-full h-full" alt={name} />
        </figure>
        <div className="card-body  shadow-xl drop-shadow-xl ">
          <h2 className="card-title text-4xl text-[#ff4a4a] shadow-xl drop-shadow-xl text-center mx-auto px-2 rounded-xl">
            {name}
          </h2>

          <div className="mx-5">
            <h2 className="card-title text-[#0a4d7b]">
              Price: <span className="text-[#ff4a4a]"> $ {price}</span>{" "}
            </h2>
            <h2 className="card-title">Rating: {rating}</h2>
            <h2 className="card-title">
              Available Quantity: {available_quantity}
            </h2>
          </div>
          <div className="card-actions justify-end">
            <Link>
              <button onClick={handleToast} className="terms">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomTabCards;
