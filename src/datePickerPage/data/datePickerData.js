import Axios from "axios";

export const createdEvent = (formState) => {
  const newEvent = {};

  Object.keys(formState.inputs).forEach(
    (input) => (newEvent[input] = formState.inputs[input].value)
  );
  return newEvent;
};

const onError = (error) => {

  return {
    status: "error",
    data: error,
  };
};

const onSucess = (newEvent) => {

  return {
    status: "ok",
    data: newEvent,
  };
};

export const postNewEvent = async (newEventData) => {
  const newEvent = JSON.stringify(newEventData);

  let response;
  try {
    response = await Axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/events/add-event`,
      newEvent,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

  } catch (err) {
    return onError(err.response.data.ocurredErrors)
  }
  return onSucess(response.data.newEvent)
};
