import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="bg-[#e4ffef]">
    <RouterProvider router={router} />
  </div>
);
