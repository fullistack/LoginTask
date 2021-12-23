import React from "react";
import Signup from "./Signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signin from "./SignIn";
import LandingPage from "./LandingPage";
import PrivateRoute from "./PrivateRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";

function App() {
  return (
    <>
      <UserAuthContextProvider>
        <Router>
          <Switch>
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/" component={Signin} />
            <PrivateRoute path="/home" component={LandingPage} />
          </Switch>
        </Router>
      </UserAuthContextProvider>
    </>
  );
}

export default App;
