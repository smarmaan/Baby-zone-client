import { useLoaderData } from "react-router-dom";
import TableData from "../../Components/TableData/TableData";
import useTitle from "../../Hooks/useTitle";

const AllToys = () => {

  useTitle("BABY ZONE | ALL TOYS")


  const allToys = useLoaderData();

  console.log(allToys);

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

            {allToys.map((toy,index) => (
              <TableData key={toy._id} index={index} toy={toy}>
              </TableData>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
