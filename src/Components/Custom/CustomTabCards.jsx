import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const CustomTabCards = ({ data }) => {
  const { name, picture, price, rating } = data;

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
          <h2 className="card-title">{name}</h2>
          <h2 className="card-title">price: {price}</h2>
          <h2 className="card-title">rating: {rating}</h2>

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
