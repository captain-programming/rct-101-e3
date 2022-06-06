import React from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

// use react-router Link or NavLink
// const Link = <a />;

const Navbar = () => {
  const [isAuth, logout] = useContext(AuthContext());
  const navigate = useNavigate();

  const handleClick = () => {
    if(!isAuth){
      logout();
      navigate("/");
    }else{
      navigate("/login");
    }
  };

  return (
    <div data-cy="navbar">
      <Link data-cy="navbar-home-link" to="">Logo</Link>
      <span data-cy="navbar-cart-items-count">Cart:</span>
      <button data-cy="navbar-login-logout-button" onClick={handleClick}>{isAuth ? "Logout":"Login"}</button>
    </div>
  );
};

export default Navbar;
