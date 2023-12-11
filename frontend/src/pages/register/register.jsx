import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import "./register.css";

export default function Register() {
  const navigate = useNavigate();

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  };
  const [formData, setFormData] = useState(initialValues);

  const handleSubmit = (event) => {
    event.preventDefault();
    postDataServer(formData);

    clean();
    navigate("/login");
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const clean = () => {
    setFormData(initialValues);
  };
  const postDataServer = (formData) => {
    Axios.post("/auth/register", {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(`we have an error in this request, ${err}`);
      });
  };

  return (
    <>
      <Navbar />

      <div className="formRegister">
        <div className="text">
          <p>START FOR FREE</p>
          <h1>
            Create new account <span id="point">.</span>
          </h1>
          <p>
            Already A Member?<a href="/login">Log in</a>
          </p>
        </div>
        <form action="" onSubmit={handleSubmit}>
          <div className="fullName">
            <div className="form-floating mb-3" id="nameFL">
              <input
                className="form-control"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="name@example.com"
              />
              <label>First name</label>
            </div>

            <div className="form-floating mb-3" id="nameFL">
              <input
                className="form-control"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="name@example.com"
              />
              <label>Last name</label>
            </div>
          </div>

          <div className="form-floating mb-3" id="elementForm">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
              placeholder="name@example.com"
            />
            <label>Email address</label>
          </div>

          <div className="form-floating mb-3" id="elementForm">
            <input
              className="form-control"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder=""
            />
            <label>Password</label>
          </div>

          <div className="buttonsRegister">
            <button className="btn btn-light" id="btn-ChangeMethod">
              Change Method
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              id="btn-CreateAccount"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
