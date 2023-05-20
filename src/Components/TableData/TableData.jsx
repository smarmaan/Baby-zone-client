import { Link } from "react-router-dom";

const TableData = ({ toy, index }) => {
  const {
    _id,
    name,
    seller_name,
    subcategory,
    price,
    available_quantity,
    picture,
    release_date,
    brand,
  } = toy;

  return (
    <tr className="">
      <th>{index + 1}</th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={picture} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">{subcategory}</div>
          </div>
        </div>
      </td>

      <td className="text-center">{brand}</td>

      <td className="text-center">
        {seller_name}

        <br />
        <span className="badge badge-ghost badge-sm">{release_date}</span>
      </td>
      <td className="text-center"> $ {price}</td>
      <td className="text-center"> {available_quantity}</td>
      <th>
        <Link to={`/toy-details/${_id}`}>
          <button className="btn border-0  text-black font-bold bg-[#ff4a4a] hover:bg-[#98eecc] btn-xs">
            details
          </button>
        </Link>
      </th>
    </tr>
  );
};

export default TableData;
