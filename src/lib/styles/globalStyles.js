import styled from "styled-components";

export const ErrorMessage = styled.p`
  width: 300px;
  margin: 60px auto;
  font-size: 20px;
  color: darkred;
  background-color: pink;
  border-radius: 5px;
  padding: 20px;
  border: 1px solid darkred;
  text-align: center;
`;

export const Results = styled.div``;

export const ResetButton = styled.button`
  width: 150px;
  font-size: 20px;
  font-weight: 600px;
  padding: 8px;
  border-radius: 5px;
  background-color: darkred;
  color: antiquewhite;

  &:hover {
    background-color: cornflowerblue;
    color: antiquewhite;
  }
`;
