import { useLocation } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Toast from "./components/Toast";

export default function App() {
  const location = useLocation();

  const isAuthPage =
    location.pathname === "/" ||
    location.pathname === "/login" ||
    location.pathname === "/signup";

  return (
    <div className="app-container">

      {!isAuthPage && <Navbar />}
      {!isAuthPage && <Sidebar />}
      {!isAuthPage && <Toast />}

      <AppRoutes />

      {!isAuthPage && <Footer />}

    </div>
  );
}