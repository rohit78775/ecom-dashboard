// import { axios } from "axios";
import { useState } from "react";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setCornfirmPass] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const registarData = {
      name: name,
      email: email,
      pass: pass,
      confirmPass: confirmPass,
    };

    if (registarData.name.length === 0) {
      alert("Name can not be empty");
    } else if (registarData.email.length === 0) {
      alert("Email can not be empty");
    } else if (registarData.pass.length === 0) {
      alert("Password can not be empty");
    } else if (registarData.confirmPass.length === 0) {
      alert("Password can not be empty");
    } else {
      console.log("all field valid");
    }

    // axios
    //   .post("api.dev.bankerja.com/api/v.1/register", registarData)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };
  //   const handleOnchange = () => {};
  return (
    <div className="form-wrap">
      <h3 className="text-center">Register</h3>
      <form onSubmit={handleSubmit}>
        <div className="row ">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="row ">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Email"
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
              placeholder="Enter Password"
              value={pass}
              onChange={(e) => {
                setPass(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="row ">
          <div className="col">
            <input
              type="password"
              className="form-control"
              placeholder="Re-Enter Password"
              value={confirmPass}
              onChange={(e) => {
                setCornfirmPass(e.target.value);
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

export default Register;
