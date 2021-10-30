import React from 'react';
import { StyledModal, StyledBackdrop } from './modal.scss';

const Backdrop = ({ close }) => (
  <StyledBackdrop onClick={close}></StyledBackdrop>
);

const Modal = (props) => {
  const { children, show, border, defaultButton, close } = props;

  if (!show) {
    return null;
  }

  return (
    <React.Fragment>
      <Backdrop close={close} />
      <StyledModal border={border}>
        {children}
        {defaultButton && <button onClick={() => close()}>close</button>}
      </StyledModal>
    </React.Fragment>
  );
};

export default Modal;
