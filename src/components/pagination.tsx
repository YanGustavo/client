import React from 'react';
import styled from 'styled-components';

type PaginationProps = {
  totalPages: number;
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
};

const PaginationContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const PaginationItem = styled.li`
  margin: 0 5px;
  cursor: pointer;
  user-select: none;
`;


const Ellipsis = styled.span`
  margin: 0 5px;
`;

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePageChange = (pageNumber: number) => {
    onPageChange(pageNumber);
  };

  return (
    <PaginationContainer>
      {currentPage > 1 && (
        <PaginationItem onClick={() => handlePageChange(currentPage - 1)}>
          &#60;
        </PaginationItem>
      )}

      {currentPage > 3 && (
        <>
          <PaginationItem onClick={() => handlePageChange(1)}>1</PaginationItem>
          {currentPage > 4 && <Ellipsis key="start-ellipsis">...</Ellipsis>}
        </>
      )}

      {pageNumbers.map((pageNumber) => {
        if (
          pageNumber === 1 ||
          pageNumber === totalPages ||
          (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
        ) {
          return (
            <PaginationItem
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className={pageNumber === currentPage ? 'active' : ''}
            >
              {pageNumber}
            </PaginationItem>
          );
        }

        return null;
      })}

      {currentPage < totalPages - 2 && (
        <>
          {currentPage < totalPages - 3 && <Ellipsis key="end-ellipsis">...</Ellipsis>}
          <PaginationItem onClick={() => handlePageChange(totalPages)}>
            {totalPages}
          </PaginationItem>
        </>
      )}

      {currentPage < totalPages && (
        <PaginationItem onClick={() => handlePageChange(currentPage + 1)}>
          &#62;
        </PaginationItem>
      )}
    </PaginationContainer>
  );
};

export default Pagination;