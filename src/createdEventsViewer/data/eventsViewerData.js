import Axios from 'axios';

const onError = (error) => {
  return {
    status: 'error',
    data: error,
  };
};

const setEvents = (newEvent) => {
  return {
    status: 'ok',
    data: newEvent,
  };
};

export const fetchEvents = async () => {
  let response;
  try {
    response = await Axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/events/get-events`
    );
  } catch (err) {
    return onError(err.response.data.message);
  }
  return setEvents(response.data.events);
};
