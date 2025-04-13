import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pageNumbers.push(1, 2, 3, 4, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pageNumbers.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
      }
    }

    return pageNumbers;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="d-flex justify-content-center mt-4">
      <button
        className="btn btn-secondary mx-1"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous Page"
      >
        Previous
      </button>
      {pageNumbers.map((number, index) =>
        number === "..." ? (
          <span key={index} className="mx-2 text-muted">
            ...
          </span>
        ) : (
          <button
            key={number}
            className={`btn mx-1 ${
              number === currentPage ? "btn-primary" : "btn-outline-secondary"
            }`}
            onClick={() => onPageChange(number)}
            aria-current={number === currentPage ? "page" : undefined}
          >
            {number}
          </button>
        )
      )}
      <button
        className="btn btn-secondary mx-1"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next Page"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
