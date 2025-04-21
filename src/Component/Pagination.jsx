import React from "react";
import "../CSS/Pagination.css"; 

const PaginationButton = ({ isActive, isDisabled, onClick, children, ariaLabel }) => {
  const classNames = [
    "pagination-button",
    isActive ? "active" : "",
    isDisabled ? "disabled" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      aria-label={ariaLabel}
      aria-current={isActive ? "page" : undefined}
      className={classNames}
    >
      {children}
    </button>
  );
};

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];
    let left = currentPage - delta;
    let right = currentPage + delta;

    if (left < 1) left = 1;
    if (right > totalPages) right = totalPages;

    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= left && i <= right)) {
        range.push(i);
      }
    }

    let previous;
    for (let number of range) {
      if (previous) {
        if (number - previous === 2) {
          rangeWithDots.push(previous + 1);
        } else if (number - previous > 2) {
          rangeWithDots.push("...");
        }
      }
      rangeWithDots.push(number);
      previous = number;
    }

    return rangeWithDots;
  };

  const pageNumbers = getPageNumbers();

  return (
    <nav className="pagination-wrapper">
      <PaginationButton
        isDisabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        ariaLabel="Previous Page"
      >
        &laquo;
      </PaginationButton>

      {pageNumbers.map((num, index) =>
        num === "..." ? (
          <span key={`dots-${index}`} className="pagination-dots">
            ...
          </span>
        ) : (
          <PaginationButton
            key={num}
            isActive={num === currentPage}
            onClick={() => onPageChange(num)}
            ariaLabel={`Go to page ${num}`}
          >
            {num}
          </PaginationButton>
        )
      )}

      <PaginationButton
        isDisabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        ariaLabel="Next Page"
      >
        &raquo;
      </PaginationButton>
    </nav>
  );
};

export default Pagination;
