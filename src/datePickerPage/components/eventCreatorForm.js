import React from 'react';
import DatePicker from 'react-datepicker';

import { Input } from '../../shared/input';
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from '../../utils/validators';

import {
  StyledEventCreatorForm,
  StyledEventCreatorButton,
} from '../style/datePicker.scss';
import { StyledInput } from '../../shared/input/input.scss';

const EventCreatorForm = ({ onSubmit,formState,onInputChange }) => {

  return (
    <StyledEventCreatorForm onSubmit={onSubmit}>
      <label htmlFor='firstNameInput'>Type your first name</label>
      <Input
        type='text'
        id='firstNameInput'
        name='firstName'
        placeholder='first name'
        validators={[VALIDATOR_MINLENGTH(3)]}
        formState={formState}
        onInputChange={onInputChange}
      />
      <label htmlFor='lastNameInput'>Type your last name</label>
      <Input
        type='text'
        id='lastNameInput'
        name='lastName'
        placeholder='last name'
        validators={[VALIDATOR_MINLENGTH(3)]}
        formState={formState}
        onInputChange={onInputChange}
      />
      <label htmlFor='mailInput'>Type your email</label>
      <Input
        type='text'
        id='mailInput'
        name='mail'
        placeholder='mail'
        validators={[VALIDATOR_EMAIL()]}
        formState={formState}
        onInputChange={onInputChange}
      />
      <label htmlFor='datePickInput'>Choose date</label>
      <DatePicker
        dateFormat='dd/MM/yyyy'
        type='text'
        startDate={formState.inputs.date.value}
        name='date'
        id='datePickInput'
        selected={formState.inputs.date.value}
        onSelect={(date) => onInputChange(date, true, 'date')}
        customInput={<StyledInput />}
      />
      <StyledEventCreatorButton disabled={!formState.isFormValid} type='submit'>
        Create
      </StyledEventCreatorButton>
    </StyledEventCreatorForm>
  );
};

export default EventCreatorForm;
