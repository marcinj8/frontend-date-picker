import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { useForm } from "../../shared/hooks/form-hook";

import { Input } from "../../shared/input";
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from "../../utils/validators";
import { createdEvent } from "../data/datePickerData";
import {
  StyledEventCreatorForm,
  StyledEventCreatorHeader,
  StyledEventCreatorButton,
} from "./datePicker.scss";

const EventCreator = () => {
  const [formState, onInputChange] = useForm(
    {
      firstName: {
        value: "",
        isValid: false,
      },
      lastName: {
        value: "",
        isValid: false,
      },
      mail: {
        value: "",
        isValid: false,
      },
      date: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const onSubmit = (e) => {
    e.preventDefault();
    const newEvent = createdEvent(formState);
    console.log("submit", newEvent);
  };

  return (
    <section style={{ padding: "20px" }}>
      <StyledEventCreatorHeader>Pick date</StyledEventCreatorHeader>
      <StyledEventCreatorForm onSubmit={onSubmit}>
        <Input
          type="text"
          name="firstName"
          placeholder="first name"
          validators={[VALIDATOR_MINLENGTH(3)]}
          formState={formState}
          onInputChange={onInputChange}
        />
        <Input
          type="text"
          name="lastName"
          placeholder="last name"
          validators={[VALIDATOR_MINLENGTH(3)]}
          formState={formState}
          onInputChange={onInputChange}
        />
        <Input
          type="text"
          name="mail"
          placeholder="mail"
          validators={[VALIDATOR_EMAIL()]}
          formState={formState}
          onInputChange={onInputChange}
        />
        <DatePicker
          type="text"
          name="date"
          showTimeSelect
          selected={formState.inputs.date.value}
          onSelect={(date) => onInputChange(date, true, "date")}
        />
        <StyledEventCreatorButton
          disabled={!formState.isFormValid}
          type="submit"
        >
          Submit
        </StyledEventCreatorButton>
      </StyledEventCreatorForm>
    </section>
  );
};

export default EventCreator;
