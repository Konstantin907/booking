import React from "react";

export default function footerTable(props) {
  return (
    <div className="pagination">
      <p>{`Total : ${props.totalElements}`}</p>
      <button onClick={props.prevPage} disabled={props.currentPage === 1}>
        &lt;
      </button>
      <button
        onClick={props.nextPage}
        disabled={props.currentPage >= props.maxPage}
      >
        &gt;
      </button>
    </div>
  );
}
