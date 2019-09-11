import React from "react";
import Form from "./form";

const Login = props => {
  const { login, setLogout, register, setRegister, setLogin } = props;
  return (
    <div>
      <Form
        login={login}
        setLogout={setLogout}
        register={register}
        setRegister={setRegister}
        setLogin={setLogin}
      />
    </div>
  );
};

export default Login;
