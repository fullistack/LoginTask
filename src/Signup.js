import React, { useState } from "react";
import { Link, useHistory, Redirect } from "react-router-dom";
import { useUserAuth } from "./context/UserAuthContext";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  const history = useHistory();
  const handleSubmit = async () => {
    try {
      await signUp(email, password);
      alert("SignUp Successfully");
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  };
  if (localStorage.getItem("user")) {
    return <Redirect to="/home" />;
  }
  return (
    <>
      <h1 className="sup-head " style={{ color: "orangered" }}>
        Welcome to SignUp
      </h1>
      <div style={{ width: "100%", height: "100%" }}>
        <div className="inputs">
          <input
            className="input-1"
            type="text"
            placeholder="Email*"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="input-1"
            type="password"
            placeholder="Password*"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="button" onClick={handleSubmit}>
            Sign Up
          </button>

          <Link className="sign-link" to="/">
            Sign In
          </Link>
        </div>
      </div>
    </>
  );
};

export default Signup;
