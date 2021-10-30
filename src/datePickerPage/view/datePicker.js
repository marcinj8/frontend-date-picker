import React, { useState } from 'react';

import AsyncView from '../../shared/asyncView/asyncView';

import { createdEvent, postNewEvent } from '../data/datePickerData';
import { useForm } from '../../shared/hooks/form-hook';

import 'react-datepicker/dist/react-datepicker.css';
import { StyledEventCreatorHeader } from '../style/datePicker.scss';
import EventCreatorForm from '../components/eventCreatorForm';

const EventCreator = () => {
  const [asyncStatus, setAsyncStatus] = useState('ok');
  const [data, setData] = useState(null);

  const [formState, onInputChange, resetFormValues] = useForm(
    {
      firstName: {
        value: '',
        isValid: false,
      },
      lastName: {
        value: '',
        isValid: false,
      },
      mail: {
        value: '',
        isValid: false,
      },
      date: {
        value: new Date(),
        isValid: true,
      },
    },
    false
  );

  const onSubmit = async (e) => {
    e.preventDefault();
    setData(null);
    setAsyncStatus('loading');

    const newEvent = createdEvent(formState);

    let responseData = null;
    try {
      responseData = await postNewEvent(newEvent);
    } catch (err) {
      setAsyncStatus('error');
      setData(['Something went wrong. Please try again later.']);
      return;
    }
    setAsyncStatus(responseData.status);
    setData(responseData.data);

    if (responseData.status === 'ok') {
      resetFormValues();
      setAsyncStatus('success');
    }
  };

  return (
    <section style={{ padding: '20px' }}>
      <AsyncView
        status={asyncStatus}
        errors={data}
        clearError={() => setAsyncStatus('ok')}
      />
      <StyledEventCreatorHeader>Create event</StyledEventCreatorHeader>
      <EventCreatorForm
        onSubmit={onSubmit}
        formState={formState}
        onInputChange={onInputChange}
      />
    </section>
  );
};

export default EventCreator;
