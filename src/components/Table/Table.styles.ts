import { styled } from "styled-components";

export const TableTitle = styled.h2`
    text-align: center;
    margin-bottom: 20px;
    font-size: 24px;
    color: #333;
  `;


export const TableWrapper = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

export const TableHeader = styled.thead`
  background-color: #007bff;
  color: white;
`;

export const TableCell = styled.th`
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;
`;

export const TableBody = styled.tbody`
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
`;
