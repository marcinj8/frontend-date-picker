import styled from "styled-components";

export const StyledInput = styled.input`
  margin: 5px;
  padding: 8px;
  border-radius: 5px;
  color: ${(props) => (props.notValid ? "red" : "black")};
  background: ${(props) => (props.notValid ? "pink" : "white")};
  ::placeholder {
    color: ${(props) => (props.notValid ? "red" : "grey")};
  }
`;
