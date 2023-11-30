import React from "react";

export default function HeaderTable(props) {
  const { setAddModal, setAnimationModal } = props;

  const handleAdd = (event) => {
    event.preventDefault();
    setAddModal(true);
    setTimeout(() => {
      setAnimationModal(true);
    }, 500);
  };

  return (
    <form action="">
      <div className="searchSectionTwo">
        <input
          type="text"
          placeholder="Search by first name"
          name="filterValue"
          value={props.searchFilter}
          onChange={(e) => props.setSearchFilter(e.target.value)}
        />
        {/*<button className="searchButton">&#128269;</button>*/}
      </div>
      <button className="addButton" onClick={handleAdd}>
        Add <span>&#43;</span>
      </button>
    </form>
  );
}
