import * as React from 'react';

import { WrapperTaskToday, WrapperTaskTodayHeader, CurrentDate} from  './TaskTodayStyle';
import CountButton from "./CountButton/CountButton";
import DataFiled from "../EventForm/DataFiled/DataFiled";

interface TaskTodayProps {}

const themeForUser = {
    forLabel: {
        width: '20px',
        height: '20px',
        backgroundPosition: '0 -341px'
    },
    forInput: {
        placeholder: 'Add a Task: Slide Deck due next week',
        type: 'text',
        theme: {
            backgroundColor: 'inherit',
        }
    },
    forWrapper: {
        backgroundColor: '#fff',
        borderBottom: '1px solid #eee',
        borderRadius: '6px'
    }
};

const TaskToday = ({}: TaskTodayProps) => {
    return (
        <WrapperTaskToday>
            <WrapperTaskTodayHeader>
                <CurrentDate>
                    12 Friday
                    <CountButton title={'TASKS'} count={12}/>
                    <CountButton title={'MEETINGS'} count={21}/>
                </CurrentDate>
                {/*<DataFiled theme={themeForUser}/>*/}
            </WrapperTaskTodayHeader>
        </WrapperTaskToday>

    )
};

export default TaskToday;

