import { styled } from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  align-items: center;
`;

export const Button = styled.button`
  padding: 10px 15px;
  margin: 0 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
  }
`;

export const PageInfo = styled.span`
  padding: 10px;
`;


