import styled from 'styled-components';

export const StyledModal = styled.div`
  position: absolute;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  padding: 40px;
  border: ${(props) => (props.border ? '2px solid blue' : 'none')};
  box-shadow: ${(props) => (props.border ? '0 0 25px 3px blue' : 'none')};
  border-radius: 3px;
  background: ${(props) => (props.border ? 'rgba(0, 0, 0)' : 'transparent')};
`;

export const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 90;
`;
