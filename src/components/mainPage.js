import React from "react";
import Meals from "./meals";
import MealsData from "../data/dummyData.json";
import CarsData from "../data/carsDummyData.json";
import { withRouter } from "react-router-dom";
const MainPage = props => {
  const { login, setLogin, logout, setLogout, register, setRegister } = props;
  console.log("login", login);
  console.log("logout", logout);
  console.log("register", register);
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div>
        <Meals
          meals={MealsData}
          height={350}
          width={350}
          containerSize={350}
          containerHeight={350}
          title="MEALS"
        />
      </div>
      <div>
        <Meals
          meals={CarsData}
          height={200}
          width={200}
          containerSize={200}
          containerHeight={200}
          title="CARS"
        />
      </div>
    </div>
  );
};

export default withRouter(MainPage);
