import React from "react";
import { useState } from "react";
function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const loginData = {
      email: email,
      pass: pass,
    };
    console.log(loginData);
  };
  return (
    <div className="form-wrap">
      <h3 className="text-center">Login</h3>
      <form onSubmit={handleSubmit}>
        <div className="row ">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="row ">
          <div className="col">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={pass}
              onChange={(e) => {
                setPass(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="row ">
          <div className="col">
            <input type="submit" value="Submit" className="btn btn-primary" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
