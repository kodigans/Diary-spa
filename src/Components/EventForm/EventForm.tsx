import * as React from 'react';

import { EventFormWrapper, EventMainWrap, EventAccept, EventTitle, CustomInput, Label } from "./EventFormStyle";
import EventFormButton from './Button/Button';

interface EventFormProps {};

const themeForCreateButton = {
    hover: {
        'background-color': '#ccc',
        'color': '#fff',       
    },
    backgroundColor: '#ddd'
}

const themeForCancelButton = {
    hover: {
        'background-color': '#ccc',
        'color': '#fff',       
    },
    backgroundColor: '#93b9f4'
}

const EventForm = ({}: EventFormProps) => {
  return (   
    <EventFormWrapper>
        <EventMainWrap>
            <EventTitle placeholder='Event Title'/>            
        </EventMainWrap>
        <Label/>
        <CustomInput/>
        <EventAccept>
            <EventFormButton text='Cancel' theme={themeForCreateButton}/>
            <EventFormButton text='Cancel' theme={themeForCancelButton}/>            
            {/* <EventFormButton text='Create'/>             */}
        </EventAccept>
    </EventFormWrapper>
  )
};

export default EventForm;