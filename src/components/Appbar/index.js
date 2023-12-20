import { useState } from "react";
import { LiaLuggageCartSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const Appbar = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="p-4 m-4 flex justify-between ">
      <div className="">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/didtdrgsj/image/upload/v1647442378/FoodMunchLogo_thceyn.jpg"
            alt="logo"
            className="h-12 w-12"
          />
        </Link>
      </div>
      <ul className="flex items-center">
        <Link to="/offers" className="mx-5 text-2xl">
          Offers
        </Link>
        <Link to="/help" className="mx-5 text-2xl">
          Help
        </Link>
        <Link className="mx-5 text-3xl">
          <LiaLuggageCartSolid />
        </Link>
        <button className="mx-5 text-2xl" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Logout" : "Login"}
        </button>
      </ul>
    </div>
  );
};

export default Appbar;
