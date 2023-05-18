import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes.jsx";
import AuthProvider from "./Providers/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="bg-[#98EECC]">
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </div>
);
