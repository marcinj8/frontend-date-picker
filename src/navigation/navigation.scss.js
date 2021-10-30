import styled from 'styled-components';

export const StyledNavigation = styled.nav`
  width: 100%;
  margin: 0;
  border-bottom: 1px solid black;
`;

export const StyledNavigationList = styled.ul`
  display: flex;
  justify-content: right;
  list-style-type: none;
  margin: 0;
`;
export const StyledNavigationItem = styled.li`
  margin: 0;
  padding: 10px;
  border-left: 1px solid black;
  background: ${(props) => (props.isActive ? 'yellow' : 'transparent')};
  color: ${(props) => (props.isActive ? 'black' : 'white')};
  cursor: pointer;
  &:hover {
    background: ${(props) => (props.isActive ? 'yellow' : 'gold')};
    color: ${(props) => (props.isActive ? 'black' : 'black')};
  }
`;
