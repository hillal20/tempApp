import React from "react";
import { withRouter } from "react-router-dom";
import "./css/headers.css";
const Headers = props => {
  const { setLogin, setRegister, login, register, logout, setLogout } = props;
  return (
    <div className="headers">
      {!login && (
        <div
          onClick={() => {
            setLogin(true);
            setRegister(false);
            setLogout(false);
            props.history.push("/login");
          }}
        >
          {" "}
          Login{" "}
        </div>
      )}
      {!register && (
        <div
          onClick={() => {
            setRegister(true);
            setLogin(false);
            setLogout(false);
            props.history.push("/register");
          }}
        >
          {" "}
          Register
        </div>
      )}
      {logout && (
        <div
          onClick={() => {
            setRegister(false);
            setLogin(false);
            setLogout(false);
            props.history.push("/");
          }}
        >
          {" "}
          logout
        </div>
      )}
    </div>
  );
};

export default withRouter(Headers);
