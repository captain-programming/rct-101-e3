import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [login, setLogin] = useState({});

  const handleLogin=(e)=>{
    const {name, value} = e.target;
    setLogin({
      ...login,
      [name]: value,
    });
  };

  // console.log(setLogin)
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(e);
  }
  return (
    <div>
      <form onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column", margin:"auto", gap:"20px", width:"20%"}}>
      <input type="email" data-cy="login-email" placeholder="Enter your email" onClick={handleLogin}/>
      <input type="password" data-cy="login-password" placeholder="Enter your password" onClick={handleLogin}/>
      <button type="submit" data-cy="login-submit" onClick={handleSubmit}>Login</button>
      </form>
    </div>
  );
};

export default Login;
