import React from "react";
import "./Pagination.css";

const Pagination = ({ currentpage, totalPages, onpagechange }) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
  return (
    <div className="pagination">
      {pages.length<2?"":
      pages.map((page) => (
        <button onClick={() => onpagechange(page)} className={currentpage===page?"activepage":""}>{page}</button>
      ))}
    </div>
  );
};

export default Pagination;
