import React, { useEffect, useReducer } from "react";
import { validate } from "../../utils/validators";
import { StyledInput } from "./input.scss";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case "TOUCH":
      return {
        ...state,
        isTouched: true,
      };
    default:
      return state;
  }
};

const Input = (props) => {
  const {
    placeholder,
    type,
    name,
    formState,
    onInputChange,
    initialValue,
    initialValid,
    validators
  } = props;

  const [inputState, dispatch] = useReducer(inputReducer, {
    value: initialValue || "",
    isValid: initialValid || false,
    isTouched: false,
  });
  const changeHandler = (event) => {
    dispatch({
      type: "CHANGE",
      val: event.target.value,
      validators: validators
    });
  };

  const touchHandler = () => {
    dispatch({ type: "TOUCH" });
  };

  const { value, isValid, isTouched } = inputState;

  useEffect(() => {
    onInputChange(value, isValid, name);
  }, [value, isValid, name, onInputChange]);

  return (
    <StyledInput
      notValid={!isValid && isTouched}
      type={type}
      name={name}
      value={formState.inputs[name].value}
      placeholder={placeholder}
      onBlur={touchHandler}
      onChange={changeHandler}
    />
  );
};

export default Input;
