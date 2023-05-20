import { Link, useLoaderData } from "react-router-dom";

const ToyDetails = () => {
  const toyDetails = useLoaderData();

  const {
    name,
    series,
    brand,
    release_date,
    description,
    picture,
    price,
    rating,
    seller_name,
    seller_email,
    subcategory,
    available_quantity,
  } = toyDetails;

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={picture} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-4xl font-bold">Name : {name}</h1>
            <h1 className="text-xl font-bold">Series : {series}</h1>
            <h1 className="text-xl font-bold">Brand : {brand}</h1>
            <h1 className="text-xl font-bold">Release : _date{release_date}</h1>
            <h1 className="text-xl font-bold">Description : {description}</h1>
            <h1 className="text-xl font-bold">Price : {price}</h1>
            <h1 className="text-xl font-bold">Rating : {rating}</h1>
            <h1 className="text-xl font-bold">Seller : _name{seller_name}</h1>
            <h1 className="text-xl font-bold">Seller : _email{seller_email}</h1>
            <h1 className="text-xl font-bold">Subcategory : {subcategory}</h1>
            <h1 className="text-xl font-bold">
              Available Quantity : {available_quantity}
            </h1>

            <p className="py-6">Description : {description}</p>

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
