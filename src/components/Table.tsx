import React from "react";
import styled from "styled-components";
import { Project } from "../types";

interface TableProps {
  projects: Project[];
}

const Table: React.FC<TableProps> = ({ projects }) => {
  return (
    <TableWrapper>
      <TableHeader>
        <tr>
          <TableCell>S.No.</TableCell>
          <TableCell>Percentage Funded</TableCell>
          <TableCell>Amount Pledged</TableCell>
        </tr>
      </TableHeader>
      <TableBody>
        {projects.map((project, index) => (
          <tr key={index}>
            <TableCell>{index + 1}</TableCell>
            <TableCell>{project["percentage.funded"]}</TableCell>
            <TableCell>{project["amt.pledged"]}</TableCell>
          </tr>
        ))}
      </TableBody>
    </TableWrapper>
  );
};

const TableWrapper = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const TableHeader = styled.thead`
  background-color: #007bff;
  color: white;
`;

const TableCell = styled.th`
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;
`;

const TableBody = styled.tbody`
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export default Table;
