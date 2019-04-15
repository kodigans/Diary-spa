import * as React from 'react';

import { WrapperTaskToday, WrapperTaskTodayHeader, CurrentDate, TaskTodayHeader} from  './TaskTodayStyle';
import CreateTask from './CreateTask/CreateTask';
import CountButton from "./CountButton/CountButton";
import DataFiled from "../EventForm/DataFiled/DataFiled";
//import InsertSvg from './InsertSvg/InsertSvg';

interface TaskTodayProps {}

const themeForUser = {
    forLabel: {
        width: '20px',
        height: '20px',
        backgroundPosition: '0 -341px',
        marginLeft: '14px'
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
        borderRadius: '6px',
        height: '20%',
        flex: '1 1',
        minWidth: '300px'
    }
};

const themeForTasksToday = {
    forLabel: {
        width: '13px',
        height: '13px',
        backgroundPosition: '0 -234px',
        marginLeft: '14px', 

    },
    forInput: {
        placeholder: 'Task Due (0)',
        type: 'text',        
        disabled: true,
        theme: {
            backgroundColor: 'inherit',            
        }
    },
    forWrapper: {                
        borderBottom: '1px solid #eee',
        borderRadius: '6px',        
        flex: '1 1',
        minWidth: '300px',                     
        border: '1px solid #e6e8eb',
        backgroundColor: 'inherit',
        height: '12px',
        marginBottom: '10px'
    }
};

const TaskToday = ({}: TaskTodayProps) => {
    return (
        <WrapperTaskToday>            
            <TaskTodayHeader>            
            <WrapperTaskTodayHeader>
                <CurrentDate>
                    12 Friday
                </CurrentDate>
                    <CountButton title={'TASKS'} count={12}/>
                    <CountButton title={'MEETINGS'} count={21}/>                                
            </WrapperTaskTodayHeader>
            <DataFiled theme={themeForUser}/>
            </TaskTodayHeader>
            <DataFiled theme={themeForTasksToday}/>           
            <CreateTask/>                        
            

        </WrapperTaskToday>      
    )
};

export default TaskToday;

