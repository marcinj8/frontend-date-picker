import React, { useMemo } from 'react';
import { Modal } from '../modal';
import { StyledErrorList, StyledErrorListItem, StyledAsyncViewButton } from './asyncView.scss';

const AsyncView = (props) => {
  const { status, errors, clearError } = props;
  const closeHandler = status === 'loading' ? () => false : clearError;
  const show = status !== 'ok';
  const buttonLabel = status === 'success' ? 'great' : 'close';

  const header = useMemo(() => {
    switch (status) {
      case 'loading':
        return 'Loading...';
      case 'success':
        return 'Event created!';
      default:
        return 'Error occured...';
    }
  }, [status]);

  const errorsList =
    status === 'error' && errors
      ? errors.map((error, index) => (
          <StyledErrorListItem key={index}>{error}</StyledErrorListItem>
        ))
      : null;

  return (
    <Modal border={status !== 'loading'} close={closeHandler} show={show}>
      <h2>{header}</h2>
      {status === 'error' && <StyledErrorList>{errorsList}</StyledErrorList>}
      {(status === 'error' || status === 'success') && (
        <StyledAsyncViewButton onClick={closeHandler}>{buttonLabel}</StyledAsyncViewButton>
      )}
    </Modal>
  );
};

export default AsyncView;
