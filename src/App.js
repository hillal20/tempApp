import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/home";
import Headers from "./components/headers.js";
import Login from "./components/login.js";
import Register from "./components/register.js";
import MainPage from "./components/mainPage";
function App() {
  const [login, setLogin] = useState(false);
  const [logout, setLogout] = useState(false);
  const [register, setRegister] = useState(false);

  useEffect(() => {}, [login, logout, register]);
  return (
    <Router>
      <div className="App">
        <Home />
        <Headers
          setRegister={setRegister}
          setLogin={setLogin}
          login={login}
          register={register}
          setLogout={setLogout}
          logout={logout}
        />
        <Route
          path="/register"
          render={props => {
            return (
              <Register
                {...props}
                register={register}
                login={login}
                setLogout={logout}
                setRegister={setRegister}
                setLogin={setLogin}
              />
            );
          }}
        />
        <Route
          path="/login"
          render={props => {
            return (
              <Login
                {...props}
                login={login}
                setLogout={setLogout}
                register={register}
                setRegister={setRegister}
                setLogin={setLogin}
              />
            );
          }}
        />
        <Route
          path="/main-page"
          exact
          render={props => {
            return (
              <MainPage
                {...props}
                setLogout={setLogout}
                login={login}
                register={register}
                setRegister={setRegister}
                setLogin={setLogin}
              />
            );
          }}
        />
      </div>
    </Router>
  );
}

export default App;
