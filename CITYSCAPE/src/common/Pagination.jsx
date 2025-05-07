import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const handlePageClick = (page) => {
        onPageChange(page);
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <li key={i} className={`page-item ${currentPage === i ? 'active' : ''}`}>
                    <button className="page-link" onClick={() => handlePageClick(i)}>
                        {i}
                    </button>
                </li>
            );
        }
        return pageNumbers;
    };

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination common-pagination">
                {renderPageNumbers()}
            </ul>
        </nav>
    );
};

export default Pagination;