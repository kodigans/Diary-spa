import * as React from 'react';

import { WrapperSchedule, ScheduleDay, ScheduleHeader, DaysSlider, CreateTask } from './ScheduleStyle';
import Data from './Date/Date';

const themeForDayWeek = {
    marginLeft: '20px',
    color: '#1b2733',
    fontSize:'22px',
    lineHeight: '25px',
};

const themeForDate = {
    color: '#1b2733',
    fontSize: '22px',
    lineHeight: '25px',
    fontWeight: '900',
    marginLeft: '5px'
};


const Schedule = () => {
    return (
        <WrapperSchedule>
            <ScheduleHeader>
                <ScheduleDay theme={themeForDayWeek}>
                    Tue,
                </ScheduleDay>
                <ScheduleDay theme={themeForDate}>
                    Apr 16
                </ScheduleDay>
                <DaysSlider/>
            </ScheduleHeader>
            <CreateTask>
                No all day meetings or tasks
            </CreateTask>
            <Data/>


        </WrapperSchedule>
    )
};


export default Schedule;