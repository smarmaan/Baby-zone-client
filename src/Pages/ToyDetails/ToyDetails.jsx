import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";

const ToyDetails = () => {
  useTitle("BABY ZONE | TOY DETAILS");

  const toyDetails = useLoaderData();

  const {
    name,
    brand,
    description,
    picture,
    price,
    rating,
    seller_name,
    seller_email,
    available_quantity,
  } = toyDetails;

  return (
    <div className="my-10 font-Cambria">
      <div className="hero bg-[#fbffdc]  rounded-2xl py-10 shadow-xl drop-shadow-2xl">
        <div className="hero-content flex-col lg:flex-row">
          <figure className="mx-10">
            <img src={picture} className="max-w-sm rounded-lg shadow-2xl" />
          </figure>

          <div className="space-y-2">
            <h1 className="text-4xl font-bold my-5 "> {name}</h1>
            <h1 className="text-xl font-bold">Brand : {brand}</h1>
            <h1 className="text-xl font-bold">Price : {price}</h1>
            <h1 className="text-xl font-bold">Seller Name : {seller_name}</h1>
            <h1 className="text-xl font-bold">
              Seller E-mail : {seller_email}
            </h1>
            <h1 className="text-xl font-bold">
              Available Quantity : {available_quantity}
            </h1>

            <h1 className="text-xl font-bold flex gap-2 items-center rounded-3xl">
              Rating : {rating}{" "}
              <Rating
                placeholderRating={rating}
                readonly
                emptySymbol={<FaRegStar></FaRegStar>}
                placeholderSymbol={<FaStar className=""></FaStar>}
                fullSymbol={<FaStar></FaStar>}
              />{" "}
            </h1>

            <p className="py-6 font-bold text-lg">
              Description : {description}
            </p>

            <Link to="/">
              <button className="terms "> Back to Homepage </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
