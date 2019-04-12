import * as React from 'react';

import { EventFormWrapper, EventMainWrap, EventAccept, EventTitle, CustomInput, Label } from "./EventFormStyle";
import EventFormButton from './Button/Button';
import DataFiled from "./DataFiled/DataFiled";

interface EventFormProps {};

const themeForCreateButton = {
    hover: {
        'background-color': '#ccc',
        'color': '#fff',       
    },
    backgroundColor: '#ddd'
};

const themeForCancelButton = {
    hover: {
        'background-color': '#ccc',
        'color': '#fff',       
    },
    backgroundColor: '#93b9f4'
};

const themeForLocation = {
    forLabel: {
      width: '20px',
      height: '20px',
      'background-position': '0 -280px'
    },
    forInput: {
        placeholder: 'Add a Location',
        type: 'text'
    }
};

const themeForUser = {
    forLabel: {
        width: '20px',
        height: '20px',
        backgroundPosition: '0 -300px'
    },
    forInput: {
        placeholder: 'Add a Person',
        type: 'text'
    }
};

const themeForDescription = {
    forLabel: {
        width: '20px',
        height: '20px',
        backgroundPosition: '0 -320px'
    },
    forInput: {
        type: 'button',
        value: 'Add a Description',
        theme: {
            cursor: 'pointer',
            backgroundColor: 'inherit',
            width: 'auto',
            flex: '0'
        }
    }
};

const EventForm = ({}: EventFormProps) => {
  return (
    <EventFormWrapper>
        <EventMainWrap>
            <EventTitle placeholder='Event Title'/>
            <DataFiled theme={themeForLocation}/>
            <DataFiled theme={themeForUser}/>
            <DataFiled theme={themeForDescription}/>
        </EventMainWrap>
        <EventAccept>
            <EventFormButton text='Cancel' theme={themeForCreateButton}/>
            <EventFormButton text='Cancel' theme={themeForCancelButton}/>
            {/* <EventFormButton text='Create'/>             */}
        </EventAccept>
    </EventFormWrapper>
  )
};

export default EventForm;