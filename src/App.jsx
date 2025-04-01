import { Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import AppHeader from "./Components/AppHeader";
import Seller from "./Components/Seller";
import Client from "./Components/Clients";
import Login from "./pages/clients/Login";
import Register from "./pages/clients/Register";
import ResetPassword from "./pages/clients/Reset";
import Reg from "./pages/seller/Reg";
import Log from "./pages/seller/Log";
import Home from "./pages/Home";
import ServicePost from "./pages/services/servicePost";
import AppFooter from "./Components/AppFooter";
import FreelanceHome from "./pages/seller/FreelanceHome";
import PostDetails from "./pages/services/postDetails";
import SearchPage from "./pages/services/Search";

const App = () => {
  return (
    <BrowserRouter>
      <div className=" mx-auto bg-slate-150 overflow-hidden">
        <AppHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          <Route path="/Register" element={<Register />} />

          <Route path="/sel-register" element={<Reg />} />
          <Route path="/sel-login" element={<Log />} />

          <Route path="/Reset-password" element={<ResetPassword />} />

          <Route path="/Seller" element={<Seller />} />

          <Route path="/Client" element={<Client />} />
          <Route path="/Services" element={<ServicePost />} />
          <Route path="/services/:id" element={<PostDetails />} />
          <Route path="/freeHome" element={<FreelanceHome />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </div>
      <AppFooter />
    </BrowserRouter>
  );
};

export default App;
