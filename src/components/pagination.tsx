import React from "react";
import Link from "next/link";
import styled from "styled-components";

interface PaginationProps {
  page: number;
  pages: number;
  keyword?: string;
}

const PaginationContainer = styled.nav`
  display: flex;
  justify-content: center;
`;

const PaginationList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

interface PaginationItemProps {
  active?: boolean;
}

const PaginationItem = styled.li<PaginationItemProps>`
  margin: 0 5px;

  &.active {
    background-color: #007bff;
    border-radius: 50%;
    color: white;
    padding: 5px 10px;
  }

  &.inactive {
    a {
      color: #007bff;
      text-decoration: none;
    }
  }
`;

const PaginationLink = styled.a`
  color: white;
  text-decoration: none;
`;

const Pagination: React.FC<PaginationProps> = ({ page, pages, keyword = "" }) => {
  return pages > 1 ? (
    <PaginationContainer>
      <PaginationList>
        {[...Array(pages).keys()].map((x) => (
          <PaginationItem
            key={x + 1}
            className={x + 1 === page ? "active" : "inactive"}
          >
            <Link
              href={
                keyword ? `/search/${keyword}/page/${x + 1}` : `/page/${x + 1}`
              }
              passHref
            >
              <PaginationLink>{x + 1}</PaginationLink>
            </Link>
          </PaginationItem>
        ))}
      </PaginationList>
    </PaginationContainer>
  ) : null;
};

export default Pagination;