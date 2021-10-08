import React from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";
import { Nav, NavItem } from "reactstrap";
import Home from "../components/Home";
import Apartments from "./Apartments";

const Navigation = (props) => {
  return (
    <>
      {props.logged_in && (
        <div>
          <a href={props.sign_out_route}>Sign Out</a>
          <Router>
            <Nav>
              <NavItem>
                <NavLink to="/home">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/apartments">Apartments</NavLink>
              </NavItem>
            </Nav>
            <Switch>
              <Route exact path="/apartments" component={Apartments} />
              <Route exact path="/home" component={Home} />
            </Switch>
          </Router>
        </div>
      )}
      {!props.logged_in && (
        <div>
          <a href={props.sign_in_route}>Sign In</a>
        </div>
      )}
    </>
  );
};

export default Navigation;
