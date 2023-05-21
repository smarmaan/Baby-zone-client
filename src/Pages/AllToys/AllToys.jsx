import { useLoaderData } from "react-router-dom";
import TableData from "../../Components/TableData/TableData";
import useTitle from "../../Hooks/useTitle";
import { useState } from "react";

const AllToys = () => {
  useTitle("BABY ZONE | ALL TOYS");

  const [searchText, setSearchText] = useState("");
  const [allToys, SetAllToys] = useState(useLoaderData());

  // const allToys = useLoaderData();

  console.log(allToys);

  const handleSearchText = () => {
    fetch(`http://localhost:5000/search-by/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        SetAllToys(data);
      });
  };

  return (
    <div>
      <div className=" bg-[#fbffdc] font-Cambria my-20 rounded-xl py-10 ">
        <div className="text-center">
          <h1 className="text-5xl text-[#0a4d68] font-bold underline rounded-2xl drop-shadow-xl shadow-xl py-5 md:mx-52 tracking-wider">
            ALL TOYS
          </h1>
        </div>
      </div>

      <div className="flex justify-center input-group-lg">
        {" "}
        <div className="form-control">
          <div className="input-group-lg flex">
            <input
              type="text"
              placeholder="Search…"
              className="input input-bordered"
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              onClick={handleSearchText}
              className="btn btn-square text-black hover:text-white bg-[#FF4A4A] hover:bg-[#0a4d68] border-0 mx-2 items-center "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto w-full my-20">
        <table className="table w-full ">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th className="text-center">subcategory</th>
              <th className="text-center">Seller Name</th>
              <th className="text-center">price</th>
              <th className="text-center">quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {allToys.map((toy, index) => (
              <TableData key={toy._id} index={index} toy={toy}></TableData>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
