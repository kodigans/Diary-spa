import * as React from 'react';

import { DayHour, Day, Meridian, List, TimeBlock } from './DateStyle';


const timeArray = [
    {
        time: 12,
        meridian: 'AM',
    },
    {
        time: 1,
        meridian: 'AM',
    },
    {
        time: 2,
        meridian: 'AM',
    },
    {
        time: 3,
        meridian: 'AM',
    },
    {
        time: 4,
        meridian: 'AM',
    },
    {
        time: 5,
        meridian: 'AM',
    },
    {
        time: 6,
        meridian: 'AM',
    },
    {
        time: 7,
        meridian: 'AM',
    },
    {
        time: 8,
        meridian: 'AM',
    },
    {
        time: 9,
        meridian: 'AM',
    },
    {
        time: 10,
        meridian: 'AM',
    },
    {
        time: 11,
        meridian: 'AM',
    },
    {
        time: 12,
        meridian: 'PM',
    },
    {
        time: 1,
        meridian: 'PM',
    },
    {
        time: 2,
        meridian: 'PM',
    },
    {
        time: 3,
        meridian: 'PM',
    },
    {
        time: 4,
        meridian: 'PM',
    },
    {
        time: 5,
        meridian: 'PM',
    },
    {
        time: 6,
        meridian: 'PM',
    },
    {
        time: 7,
        meridian: 'PM',
    },
    {
        time: 8,
        meridian: 'PM',
    },
    {
        time: 9,
        meridian: 'PM',
    },
    {
        time: 10,
        meridian: 'PM',
    },
    {
        time: 11,
        meridian: 'PM',
    },
    {
        time: 12,
        meridian: 'PM',
    },

];

const themeForTimeBlock = {
    flex: '1',
    borderBottom: '1px solid #e6e8eb',
};
const themeForHalfTimeBlock = {
    width: '100%',
    borderBottom: '1px solid #f5f5f5',
    //marginLeft: 'auto'
};

const newTime = timeArray.map( ({time, meridian}) => {
    return (
        <DayHour>
            <Day>
                {time}
            </Day>
            <Meridian>
                {meridian}
            </Meridian>
            <TimeBlock theme={themeForTimeBlock}/>
            <TimeBlock theme={themeForHalfTimeBlock}/>
        </DayHour>
    )
});

const Date = () => {
    return(
        <List>
            {newTime}
        </List>
    )
};

export default Date;
