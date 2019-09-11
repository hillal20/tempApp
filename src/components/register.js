import React from "react";
import Form from "./form.js";

const Register = props => {
  const { register, setLogout, login, setRegister, setLogin } = props;

  return (
    <div>
      <Form
        register={register}
        setLogout={setLogout}
        login={login}
        setRegister={setRegister}
        setLogin={setLogin}
      />
    </div>
  );
};

export default Register;
