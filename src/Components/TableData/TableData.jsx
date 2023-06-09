import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

import { MdDelete, MdEditDocument } from "react-icons/md";
import { useForm } from "react-hook-form";

const TableData = ({ toy, index, handleDelete, setMyToys, myToys }) => {
  const { user } = useContext(AuthContext);

  const location = useLocation();
  // console.log(location);

  const {
    _id,
    name,
    seller_name,
    seller_email,
    subcategory,
    price,
    available_quantity,
    picture,
    brand,
    rating,
  } = toy;

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    fetch(`https://baby-zone-server.vercel.app/my-toys/${_id}`, {
      method: "PATCH",

      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);

        if (result.modifiedCount > 0) {
          alert(`Data updated Successfully`);

          const remaining = myToys.filter((toy) => toy._id !== _id);

          let updated = myToys.find((toy) => toy._id === _id);

          console.log(updated);

          updated = data;

          console.log(data);

          const newUpdatedToy = [updated, ...remaining];

          setMyToys(newUpdatedToy);
        }

        reset();
      });
  };

  function closeModal(modalId) {
    const checkbox = document.getElementById(modalId);
    if (checkbox) {
      checkbox.checked = false;
    }
  }
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
        <span className="badge badge-ghost badge-sm">{seller_email}</span>
      </td>
      <td className="text-center"> $ {price}</td>
      <td className="text-center"> {available_quantity}</td>
      <td className="flex items-center my-5 rounded-3xl mx-2">
        <div className="mx-auto">
          <Link to={`/toy-details/${_id}`}>
            <button className="btn border-0  text-black font-bold bg-[#ff4a4a] hover:bg-[#98eecc] btn-xs">
              details
            </button>
          </Link>
          {location.pathname === "/my-toys" && user.email === seller_email && (
            <>
              <MdDelete
                onClick={() => handleDelete(_id)}
                className="btn border-0 mx-2 text-black text-5xl  font-bold bg-[#ff4a4a] hover:bg-[#98eecc] btn-xs"
              ></MdDelete>

              <label htmlFor={`my-modal-${_id}`} className="">
                <MdEditDocument className="btn border-0  text-5xl text-black font-bold bg-[#ff4a4a] hover:bg-[#98eecc] btn-xs"></MdEditDocument>
              </label>
            </>
          )}

          <input
            type="checkbox"
            id={`my-modal-${_id}`}
            className="modal-toggle"
          />
          <div className="modal">
            <div className="modal-box font-Cambria w-11/12 max-w-5xl">
              <h3 className="font-bold text-lg text-center ">
                Input data to update Toy information ...{" "}
              </h3>

              <div>
                <div className="hero-content flex-col mx-auto">
                  <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="card-body"
                    >
                      {/* input fields Photo URL  */}
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text text-xl">Photo URL</span>
                        </label>
                        <input
                          className="input input-bordered"
                          placeholder="Photo URL"
                          defaultValue={picture}
                          {...register("picture", { required: true })}
                          aria-invalid={errors.picture ? "true" : "false"}
                        />
                        {errors.picture?.type === "required" && (
                          <p className="mt-5 mx-1 text-red-600" role="alert">
                            Photo URL is required
                          </p>
                        )}
                      </div>
                      {/* input fields Toy Name */}
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text text-xl">Toy Name</span>
                        </label>
                        <input
                          className="input input-bordered"
                          placeholder="Toy Name"
                          defaultValue={name}
                          {...register("name", { required: true })}
                          aria-invalid={errors.name ? "true" : "false"}
                        />
                        {errors.name?.type === "required" && (
                          <p className="mt-5 mx-1 text-red-600" role="alert">
                            Toy Name is required
                          </p>
                        )}
                      </div>
                      {/* input fields over here */}
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text text-xl">
                            Seller Name
                          </span>
                        </label>
                        <input
                          className="input input-bordered"
                          placeholder="Seller Name"
                          defaultValue={seller_name}
                          {...register("seller_name", { required: true })}
                          aria-invalid={errors.seller_name ? "true" : "false"}
                        />
                        {errors.seller_name?.type === "required" && (
                          <p className="mt-5 mx-1 text-red-600" role="alert">
                            Seller Name is required
                          </p>
                        )}
                      </div>
                      {/* input fields over here */}
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text text-xl">
                            Seller Email
                          </span>
                        </label>
                        <input
                          className="input input-bordered"
                          defaultValue={seller_email}
                          placeholder="Seller Email Address"
                          {...register("seller_email", {
                            required: true,
                          })}
                          aria-invalid={errors.seller_email ? "true" : "false"}
                        />
                        {errors.seller_email?.type === "required" && (
                          <p className="mt-5 mx-1 text-red-600" role="alert">
                            Seller Email is required
                          </p>
                        )}
                      </div>
                      {/* input fields over here */}
                      {/* grid  */}
                      <div className="grid grid-cols-1 md:grid-cols-2">
                        {/* 

CODE

 */}
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text text-lg">Ratings</span>
                          </label>

                          <input
                            className="input input-bordered"
                            placeholder="Ratings"
                            defaultValue={rating}
                            {...register("rating", {
                              required: true,
                            })}
                            aria-invalid={errors.rating ? "true" : "false"}
                          />
                          {errors.rating?.type === "required" && (
                            <p className="mt-5 mx-1 text-red-600" role="alert">
                              Rating is required
                            </p>
                          )}
                        </div>

                        {/* input fields over here */}

                        <div className="form-control">
                          <label className="label">
                            <span className="label-text text-lg">Price</span>
                          </label>

                          <input
                            className="input input-bordered"
                            placeholder="Price"
                            defaultValue={price}
                            {...register("price", {
                              required: true,
                            })}
                            aria-invalid={errors.price ? "true" : "false"}
                          />
                          {errors.price?.type === "required" && (
                            <p className="mt-5 mx-1 text-red-600" role="alert">
                              Price is required
                            </p>
                          )}
                        </div>

                        <div className="form-control my-5">
                          <div className="input-group ">
                            <select
                              defaultValue={brand}
                              className="select select-bordered text-xl font-Cambria"
                              {...register("brand")}
                            >
                              <option>Pick category</option>

                              <option value="Marvel">Marvel</option>
                              <option value="DC">DC</option>
                              <option value="Anime">Anime</option>
                              <option value="Transformers">Transformers</option>
                              <option value="Power Rangers">
                                Power Rangers
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>

                      {/* grid ends */}

                      <div className="form-control">
                        <label className="label">
                          <span className="label-text text-lg">
                            Available Quantity
                          </span>
                        </label>

                        <input
                          className="input input-bordered"
                          placeholder="Available Quantity"
                          {...register("available_quantity", {
                            required: true,
                          })}
                          aria-invalid={
                            errors.available_quantity ? "true" : "false"
                          }
                        />
                        {errors.available_quantity?.type === "required" && (
                          <p className="mt-5 mx-1 text-red-600" role="alert">
                            Available Quantity is required
                          </p>
                        )}
                      </div>

                      {/* input  */}
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text text-xl">
                            Description
                          </span>
                        </label>
                        <input
                          className="input input-bordered"
                          placeholder="Description"
                          {...register("description", {
                            required: true,
                          })}
                          aria-invalid={errors.description ? "true" : "false"}
                        />
                        {errors.description?.type === "required" && (
                          <p className="mt-5 mx-1 text-red-600" role="alert">
                            Description is required
                          </p>
                        )}
                      </div>

                      <div className="form-control mt-6">
                        <input
                          className="btn  border-0  text-black font-bold bg-[#ff4a4a] hover:bg-[#98eecc] "
                          type="submit"
                          value="Update Toy"
                          onClick={() => handleSubmit(_id)}
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div className="modal-action">
                <label htmlFor={`my-modal-${_id}`} className="">
                  <button
                    className="terms"
                    onClick={() => closeModal(`my-modal-${_id}`)}
                  >
                    Close
                  </button>
                </label>
              </div>
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default TableData;
