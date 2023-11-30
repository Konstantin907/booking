import React, { useState } from "react";
import { useCustomerContext } from "../../../../context/customer-context";

export default function AddModal({
  setAddModal,
  animationModal,
  setAnimationModal,
}) {
  const { postCustomer } = useCustomerContext();
  const userModel = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };
  const [newUser, setNewUser] = useState(userModel);

  const handleChanges = (event) => {
    const { name, value } = event.target;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setAddModal(false);
    setAnimationModal(false);

    postCustomer(newUser);
  };
  const handleCloseModal = (event) => {
    event.preventDefault();
    setAddModal(false);
    setAnimationModal(false);
  };

  return (
    <div className={`modalFormAdd ${animationModal ? "active" : ""}`}>
      <p>Add New</p>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name..."
          name="firstName"
          value={newUser.firstName}
          onChange={handleChanges}
        />
        <input
          type="text"
          placeholder="last Name..."
          name="lastName"
          value={newUser.lastName}
          onChange={handleChanges}
        />
        <input
          type="email"
          placeholder="example@gmail.com..."
          name="email"
          value={newUser.email}
          onChange={handleChanges}
        />
        <input
          type="password"
          placeholder="Password..."
          name="password"
          value={newUser.password}
          onChange={handleChanges}
        />
        <div className="buttonsModalAdd">
          <button onClick={handleCloseModal} className="btn btn-secondary">
            Cancel
          </button>
          <button type="submit" className="btn btn-success">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
