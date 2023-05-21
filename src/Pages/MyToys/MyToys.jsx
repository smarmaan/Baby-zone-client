import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import TableData from "../../Components/TableData/TableData";
import {
  BsFillArrowDownCircleFill,
  BsFillArrowUpCircleFill,
} from "react-icons/bs";
import useTitle from "../../Hooks/useTitle";

const MyToys = () => {
  useTitle("BABY ZONE | MY TOYS");

  const { user } = useContext(AuthContext);

  const [myToys, setMyToys] = useState([]);

  const [modifiedCount, setModifiedCount] = useState(0);
  const [sortingValue, setSortingValue] = useState("asc");

  const url = `https://baby-zone-server.vercel.app/my-toys?email=${user.email}&sort=${sortingValue}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setMyToys(data);

        // console.log(sortingValue);
      });
  }, [url, sortingValue]);

  //   console.log(myToys);

  const handleDelete = (id) => {
    const proceed = confirm(`Are you sure you want to delete`);

    if (proceed) {
      fetch(`https://baby-zone-server.vercel.app/my-toys/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          //   console.log(data);

          setModifiedCount(data);

          if (data.deletedCount > 0) {
            alert(`Data Deleted Successfully `);

            const remaining = myToys.filter((toy) => toy._id !== id);

            setMyToys(remaining);
          }
        });
    }
  };

  const changeSortingValue = () => {
    setSortingValue("asc");
    // console.log(sortingValue);
  };
  const changeSortingValueDsc = () => {
    setSortingValue("dsc");
    // console.log(sortingValue);
  };

  const handleModifiedCountChange = (count) => {
    setModifiedCount(count);
    console.log(modifiedCount);
  };

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
        // console.log(data);
      });
  }, [url]);

  // handleModifiedCountChange dependencies

  return (
    <div>
      <div className="overflow-x-auto w-full my-20">
        <table className="table w-full ">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th className="text-center">subcategory</th>
              <th className="text-center">Seller Name</th>
              <th className="text-center flex justify-center items-center gap-2">
                price
                {(sortingValue === "asc" && (
                  <button onClick={changeSortingValueDsc}>
                    <BsFillArrowUpCircleFill />
                  </button>
                )) ||
                  (sortingValue === "dsc" && (
                    <button onClick={changeSortingValue}>
                      <BsFillArrowDownCircleFill />
                    </button>
                  ))}
              </th>
              <th className="text-center">quantity</th>
            </tr>
          </thead>
          <tbody>
            {myToys.map((toy, index) => (
              <TableData
                key={toy._id}
                handleDelete={handleDelete}
                index={index}
                toy={toy}
                // handleUpdate={handleUpdate}
                myToys={myToys}
                setMyToys={setMyToys}
                modifiedCount={modifiedCount}
                handleModifiedCountChange={handleModifiedCountChange}
              ></TableData>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
