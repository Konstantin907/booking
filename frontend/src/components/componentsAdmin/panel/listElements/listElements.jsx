import React, { useState } from "react";

const List = (props) => {
  const initialValues = {
    _id: props.idValue,
    firstName: props.firstName,
    lastName: props.lastName,
    email: props.email,
  };

  const [isEditing, setIsEditing] = useState(false);
  const [dataEditing, setDataEditing] = useState(initialValues);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDataEditing({
      ...dataEditing,
      [name]: value,
    });
  };
  const handleEdition = () => {
    setIsEditing(true);
    setDataEditing(initialValues); //Issue fix it setting the state after prees "edit button"
  };

  const SaveEdition = () => {
    setIsEditing(false);
    props.handleEdit(dataEditing);
  };

  return (
    <tr className={props.className}>
      <td>{props.idValue}</td>
      <td>
        {isEditing ? (
          <input
            type="text"
            name="firstName"
            value={dataEditing.firstName}
            onChange={handleChange}
          />
        ) : (
          props.firstName
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            type="text"
            name="lastName"
            value={dataEditing.lastName}
            onChange={handleChange}
          />
        ) : (
          props.lastName
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            type="text"
            name="email"
            value={dataEditing.email}
            onChange={handleChange}
          />
        ) : (
          props.email
        )}
      </td>
      <td>
        {isEditing ? (
          <button className="edit-btn" onClick={SaveEdition}>
            &#128190;
          </button>
        ) : (
          <button className="edit-btn" onClick={handleEdition}>
            &#9998;
          </button>
        )}
        <button className="delete-btn" onClick={props.handleDelete}>
          &#128465;
        </button>
      </td>
    </tr>
  );
};

export default List;
