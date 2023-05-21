import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";
import Footer from "../Components/Shared/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const Main = () => {
  const { loading } = useContext(AuthContext);

  return (
    <div className="container mx-auto">
      {(loading && (
        <div className="h-screen flex justify-center items-center">
          <button className="btn btn-accent btn-lg loading justify-center items-center">
            loading
          </button>
        </div>
      )) || (
        <div>
          <Navbar></Navbar>

          <div className="min-h-[calc(100vh-400px)]">
            <Outlet></Outlet>
          </div>

          <Footer></Footer>
        </div>
      )}
    </div>
  );
};

export default Main;
