import { NavLink } from "react-router-dom";

const AppHeader = () => {
  const logo = "https://www.f-cdn.com/assets/img/facebook/default-1a9cd0e5.jpg";
  return (
    <div className="flex justify-around items-center bg-slate-100 ">
      <div className="logo">
        <img src={logo} alt="logo" className="w-full h-24 " />
      </div>
      <div className="menu">
        <ul className="flex items-center gap-8 text-lg  font-bold font-serif">
          <li>
            <NavLink to="/login">login</NavLink>
          </li>
          <li>
            <NavLink to="/seller"> Seller</NavLink>
          </li>
          <li>
            <NavLink to="/client"> Client</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AppHeader;
