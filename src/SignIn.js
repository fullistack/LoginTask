import React, { useState } from "react";
import { Link, useHistory, Redirect } from "react-router-dom";
import { useUserAuth } from "./context/UserAuthContext";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user } = useUserAuth();
  const { signIn } = useUserAuth();
  let history = useHistory();

  const handleSubmit = () => {
    signIn(email, password)
      .then(() => {
        localStorage.setItem("user", JSON.stringify(user));
        history.push("/home");
      })
      .catch((err) => {
        alert(err);
        history.push("/signup");
      });
  };
  if (localStorage.getItem("user")) {
    return <Redirect to="/home" />;
  }
  return (
    <>
      <h1 className="sup-head">Welcome to Sign In</h1>
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
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="button" onClick={handleSubmit}>
            Sign In
          </button>
          <Link className="sign-link" to="/signup">
            Sign Up
          </Link>
        </div>
      </div>
    </>
  );
};

export default Signin;
