import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import ProfileNav from "../../../components/profileNav/ProfileNav";
import "../profile.css";

export default function ChangePassword() {
  const navigate = useNavigate();
  const { id } = useParams();

  const initialValues = {
    password: "",
    confirmPassword: ""
  };
  const [formData, setFormData] = useState(initialValues);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.password === formData.confirmPassword) {
      postDataServer(formData);
      navigate(`/profile/${id}`);
    } else {
      toast.error("Passwords do not match", {
        autoClose: 2000
      });
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const postDataServer = (formData) => {
    Axios.patch(
      `http://localhost:8000/api/users/${id}`,
      {
        password: formData.password
      },
      { withCredentials: true }
    )
      .then((response) => {
        toast.success("User password edited successfully!", {
          autoClose: 2000
        });
      })
      .catch((err) => {
        console.log(`we have an error in this request, ${err}`);
      });
  };

  return (
    <>
      <ProfileNav />

      <div className="profileRegister">
        <div className="text">
          <h1>Change Password</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-floating mb-3" id="elementForm">
            <input
              className="form-control"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <label>New Password</label>
          </div>

          <div className="form-floating mb-3" id="elementForm">
            <input
              className="form-control"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <label>Confirm New Password</label>
          </div>

          <div className="buttonsRegister">
            <button className="btn btn-primary" id="btn-ChangeMethod">
              Save Password
            </button>
            <Link
              to={`/profile/${id}`}
              className="btn btn-light"
              id="btn-CreateAccount"
            >
              Go Back
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
