import styled from 'styled-components';

export const StyledErrorList = styled.ul`
  width: 95%;
  padding: 0;
`;

export const StyledErrorListItem = styled.li`
  list-style-type: none;
`;

export const StyledAsyncViewButton = styled.button`
  padding: 5px 10px;
  outline: none;
  color: white;
  background: transparent;
  border: 1px solid white;
  font-size: 1.05rem;
  cursor: pointer;
  &:hover {
    background: gray;
  }
`;
