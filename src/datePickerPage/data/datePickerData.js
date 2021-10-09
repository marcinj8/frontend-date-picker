export const createdEvent = (formState) => {
  const newEvent = {};

  Object.keys(formState.inputs).forEach(
    (input) => (newEvent[input] = formState.inputs[input].value)
  );
  return newEvent;
};
