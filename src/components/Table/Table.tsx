import React from "react";
import { Project } from "../../types";
import { TableBody, TableCell, TableHeader, TableWrapper } from ".";

interface TableProps {
  projects: Project[];
}

export const Table: React.FC<TableProps> = ({ projects }) => {
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
