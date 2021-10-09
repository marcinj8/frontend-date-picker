import { useCallback, useReducer } from "react";

const updateInput = (state, name, value, isValid) => {
  let isFormValid = true;
  Object.keys(state.inputs).forEach(
    (input) => (isFormValid = isFormValid && state.inputs[input].isValid)
  );

  return {
    ...state,
    inputs: {
      ...state.inputs,
      [name]: {
        ...state.inputs[name],
        value,
        isValid,
      },
    },
    isFormValid,
  };
};

const fromReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      return updateInput(state, action.name, action.value, action.isValid);
    default:
      return state;
  }
};

export const useForm = (initialInputs, initialFormValidity) => {
  const initialState = {
    inputs: initialInputs,
    isFormValid: initialFormValidity ? initialFormValidity : false,
  };

  const [formState, dispatch] = useReducer(fromReducer, initialState);
  const onInputChange = useCallback((value, isValid, name) => {
    dispatch({
      type: "INPUT_CHANGE",
      name,
      value,
      isValid,
    });
  }, []);

  return [formState, onInputChange];
};
