import React from "react";
import { useHistory, Redirect } from "react-router-dom";

const LandingPage = () => {
  let history = useHistory();

  if (!localStorage.getItem("user")) {
    return <Redirect to="/" />;
  } else {
    return (
      <div>
        <h1
          style={{
            fontSize: "3rem",
          }}
        >
          HI, MARCUS
        </h1>
        <button
          className="btn"
          onClick={() => {
            localStorage.removeItem("user");
            history.push("/");
          }}
        >
          LOG OUT
        </button>
      </div>
    );
  }
};

export default LandingPage;
