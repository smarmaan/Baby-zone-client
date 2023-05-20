import { useForm } from "react-hook-form";

const AddToy = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    fetch(`http://localhost:5000/all-toys`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);

        if (result.insertedId) {
          alert("Toy Added Successfully");

          reset();
        }
      });
  };

  return (
    <div className=" bg-[#fbffdc] font-Cambria my-20 rounded-xl py-10 ">
      <div className="text-center">
        <h1 className="text-5xl text-[#0a4d68] font-bold underline drop-shadow-xl shadow-xl py-5 md:mx-52 tracking-wider">
          ADD TOYS
        </h1>
      </div>

      <div className="hero-content flex-col mx-auto">
        <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            {/* input fields over here */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl">Photo URL</span>
              </label>
              <input
                className="input input-bordered"
                placeholder="Photo URL"
                {...register("picture", { required: true })}
                aria-invalid={errors.picture ? "true" : "false"}
              />
              {errors.picture?.type === "required" && (
                <p className="mt-5 mx-1 text-red-600" role="alert">
                  Photo URL is required
                </p>
              )}
            </div>
            {/* input fields over here */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl">Toy Name</span>
              </label>
              <input
                className="input input-bordered"
                placeholder="Toy Name"
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
                <span className="label-text text-xl">Seller Name</span>
              </label>
              <input
                className="input input-bordered"
                placeholder="Seller Name"
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
                <span className="label-text text-xl">Seller Email</span>
              </label>
              <input
                className="input input-bordered"
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
                    className="select select-bordered text-xl font-Cambria"
                    {...register("brand")}
                  >
                    <option disabled>Pick category</option>

                    <option value="Marvel">Marvel</option>
                    <option value="DC">DC</option>
                    <option value="Anime">Anime</option>
                    <option value="Transformers">Transformers</option>
                    <option value="Power Rangers">Power Rangers</option>
                  </select>
                </div>
              </div>
            </div>

            {/* grid ends */}

            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Available Quantity</span>
              </label>

              <input
                className="input input-bordered"
                placeholder="Available Quantity"
                {...register("available_quantity", {
                  required: true,
                })}
                aria-invalid={errors.available_quantity ? "true" : "false"}
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
                <span className="label-text text-xl">Description</span>
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
                value="ADD Toy"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddToy;
