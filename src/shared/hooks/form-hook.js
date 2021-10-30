import { useCallback, useReducer } from 'react';

const updateInput = (state, name, value, isValid) => {
  let isFormValid = true;
  Object.keys(state.inputs).forEach((input) => {
    if (input === name) {
      isFormValid = isFormValid && isValid;
    } else {
      isFormValid = isFormValid && state.inputs[input].isValid;
    }
  });

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

const resetValues = (state) => {
  const inputsUpdated = {};
  const date = new Date();

  Object.keys(state.inputs).forEach((input) => {
    if (input === 'date') {
      inputsUpdated[input] = {
        value: date,
        isValid: false,
      };
    } else {
      inputsUpdated[input] = {
        value: '',
        isValid: false,
      };
    }
  });

  return {
    ...state,
    inputs: inputsUpdated,
    isFormValid: false,
  };
};

const fromReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      return updateInput(state, action.name, action.value, action.isValid);
    case 'RESET_FORM':
      return resetValues(state);
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
      type: 'INPUT_CHANGE',
      value,
      isValid,
      name,
    });
  }, []);

  const resetFormValues = useCallback(() => {
    dispatch({
      type: 'RESET_FORM',
    });
  }, []);

  return [formState, onInputChange, resetFormValues];
};
