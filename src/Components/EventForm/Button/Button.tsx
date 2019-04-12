import * as React from 'react';

import { Button } from './ButtonStyle';


interface EventFormButtonProps{
    theme?: any;
    text: string;
    //callBack?()
} 

const EventFormButton = ({theme, text}: EventFormButtonProps) => {
    return (
        <Button theme={theme}> {text} </Button>
    )
};

export default EventFormButton;