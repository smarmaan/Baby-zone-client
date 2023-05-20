import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import TableData from "../../Components/TableData/TableData";
// import { useLocation } from "react-router-dom";

const MyToys = () => {
  //   const location = useLocation();
  //   console.log(location);

  const { user } = useContext(AuthContext);

  const [myToys, setMyToys] = useState([]);

  const [modifiedCount, setModifiedCount] = useState(0);

  const url = `http://localhost:5000/my-toys?email=${user.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [url]);

  //   console.log(myToys);

  const handleDelete = (id) => {
    const proceed = confirm(`Are you sure you want to delete`);

    if (proceed) {
      fetch(`http://localhost:5000/my-toys/${id}`, {
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

  const handleModifiedCountChange = (count) => {
    setModifiedCount(count);
  };

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [handleModifiedCountChange]);

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
              <th className="text-center">price</th>
              <th className="text-center">quantity</th>
              <th></th>
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
