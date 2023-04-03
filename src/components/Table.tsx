import styled from 'styled-components';
import { ReactNode } from 'react';

type TableProps = {
  children: ReactNode;
};

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const StyledTh = styled.th`
  padding: 0.5rem;
  text-align: left;
  font-weight: bold;
`;

const StyledTd = styled.td`
  padding: 0.5rem;
  border-top: 1px solid #ccc;
`;

const Table = ({ children }: TableProps) => {
  return (
    <StyledTable>
      {children}
    </StyledTable>
  );
};

type TableRowProps = {
  children: ReactNode;
};

const TableRow = ({ children }: TableRowProps) => {
  return <tr>{children}</tr>;
};

type TableHeaderCellProps = {
  children: ReactNode;
};

const TableHeaderCell = ({ children }: TableHeaderCellProps) => {
  return <StyledTh>{children}</StyledTh>;
};

type TableCellProps = {
  children: ReactNode;
};

const TableCell = ({ children }: TableCellProps) => {
  return <StyledTd>{children}</StyledTd>;
};

export { Table, TableRow, TableHeaderCell, TableCell };