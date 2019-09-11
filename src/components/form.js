import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import "./css/form.css";
import Axios from "axios";
import { setTimeout } from "timers";
const Form = props => {
  const { login, register, setLogout, setRegister, setLogin } = props;
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [empty, setEmpty] = useState(false);
  const [registered, setRegistered] = useState(false);

  const eventHandler = e => {
    e.target.name === "name" && setName(e.target.value);
    e.target.name === "password" && setPassword(e.target.value);
    e.target.name === "email" && setEmail(e.target.value);
    e.target.name === "phone" && setPhone(e.target.value);
  };
  const submitInfo = () => {
    if (
      (name === "" || password === "" || phone === "" || phone === "") &&
      register
    ) {
      setEmpty(true);
      return;
    }
    if ((name === "" || password === "") && login) {
      setEmpty(true);
      return;
    }
    setEmpty(false);
    let obj = {};

    if (login) {
      obj = { name, password };
      const promise = axios.post("http://localhost:4141/login", obj);
      promise.then(res => {
        console.log(res.data);
        if (res.data === "exist") {
          props.history.push("/main-page");
          setTimeout(() => {
            setLogout(true);
            setRegister(false);
            setLogin(false);
          });
        }
      });
    }
    if (register) {
      obj = { password, email, name, phone };
      const promise = axios.post("http://localhost:4141/register", obj);
      promise.then(res => {
        if (res.data === "successful") {
          setRegistered(true);
        }
      });
    }

    console.log(obj);

    setPhone("");
    setEmail("");
    setPassword("");
    setName("");
  };

  return (
    <div className="form">
      {(register || login) && (
        <div className="input">
          <span>User Name:</span>
          <input
            placeholder="name"
            name="name"
            value={name || ""}
            onChange={eventHandler}
          />
        </div>
      )}{" "}
      {(login || register) && (
        <div className="input">
          <span>Password:</span>
          <input
            placeholder="password"
            name="password"
            value={password || ""}
            onChange={eventHandler}
          />
        </div>
      )}
      {register && (
        <div className="input">
          <span>E-mail:</span>
          <input
            placeholder="email"
            name="email"
            value={email || ""}
            onChange={eventHandler}
          />
        </div>
      )}
      {register && (
        <div className="input">
          <span>Phone:</span>
          <input
            placeholder="phone"
            name="phone"
            value={phone || ""}
            onChange={eventHandler}
          />
        </div>
      )}
      {(login || register) && (
        <div className="btn">
          <button onClick={submitInfo}> Submit </button>
        </div>
      )}
      {empty && (
        <div style={{ color: "red", marginTop: "20px" }}>
          {" "}
          Fields can not be empty{" "}
        </div>
      )}
      {registered && (
        <div style={{ color: "red", marginTop: "20px" }}>
          {" "}
          User is registered successfully{" "}
        </div>
      )}
    </div>
  );
};

export default withRouter(Form);
