import React from "react";

export default function footerTable(props) {
  return (
    <div className="pagination">
      <p>{`${props.initialValue + 1} - ${props.lastValue} of ${
        props.totalElements
      }`}</p>
      <button onClick={props.prevPage} disabled={props.currentPageValue === 1}>
        &lt;
      </button>
      <button
        onClick={props.nextPage}
        disabled={props.currentPageValue === props.stopPage}
      >
        &gt;
      </button>
    </div>
  );
}
