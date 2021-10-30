import React from 'react';

import Event from './event';

const EventsList = ({ events }) => {
  const list = events.map((event) => (
    <Event
      key={event._id}
      id={event._id}
      firstName={event.firstName}
      lastName={event.lastName}
      mail={event.mail}
      date={event.date}
    />
  ));

  return (
    <div>
      {events.length > 0 ? (
        <ul
          style={{
            margin: '0px auto',
            padding: '0'
          }}
        >
          {list}
        </ul>
      ) : (
        <h3>there is no created events</h3>
      )}
    </div>
  );
};

export default EventsList;
