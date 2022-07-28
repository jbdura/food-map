import React from "react";
import { NavLink } from "react-router-dom";

const styles = {
  display: "inline-block",
  width: "auto",
  padding: "20px",
  margin: "0 10px 10px",
  background: "#F39C12",
  color: "white",
  fontSize: "30px"
};

function NavBar() {
  return (
    <div className="container">
      <nav className="navbar fixed-top navbar-expand-lg bg-dark" >
        <div classname="container-fluid">
          <NavLink
            to="/"
            exact
            style={styles}
            activeStyle={{
              background: "#DFFF00",
              color: "black"
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/foodfromAPI"
            exact
            style={styles}
            activeStyle={{
              background: "#DFFF00",
              color: "black"
            }}
          >
            FoodFromAPI
          </NavLink>
          <NavLink
            to="/myfoodportfolio"
            exact
            style={styles}
            activeStyle={{
              background: "#DFFF00",
              color: "black"
            }}
          >
            MyFoodPortfolio
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;