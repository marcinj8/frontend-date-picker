import React from 'react';

import { StyledEvent, StyledEventHeader, StyledEventInfo } from '../style/event.scss';

const Event = ({ id, firstName, lastName, mail, date }) => {
  const year = new Date(date).getFullYear();
  const month = new Date(date).getMonth() + 1;
  const day = new Date(date).getDate();

  return (
    <StyledEvent>
      <StyledEventHeader>
        Creted by {firstName + ' ' + lastName}
      </StyledEventHeader>
      <StyledEventInfo>Contact: {mail}</StyledEventInfo>
      <StyledEventInfo>
        Date: {day}/{month}/{year}
      </StyledEventInfo>
    </StyledEvent>
  );
};

export default Event;
