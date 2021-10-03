import React from "react";
// import {
//   BrowserRouter as Router,
//   NavLink,
//   Route,
//   Switch,
// } from "react-router-dom";
// import { Nav, NavItem } from "reactstrap";
import Navigation from "../components/Navigation";
// import Home from "../components/Home";

const App = ({
  logged_in,
  current_user,
  new_user_route,
  sign_in_route,
  sign_out_route,
}) => {
  return (
    <>
      <Navigation
        logged_in={logged_in}
        current_user={current_user}
        new_user_route={new_user_route}
        sign_in_route={sign_in_route}
        sign_out_route={sign_out_route}
      />
    </>
  );
};

export default App;
