import * as React from 'react';

import { WrapperCreateTask, Day, TaskTitle, TaskEvent, TaskDescription, TaskDescriptionEdit, CompletedTask } from  './CreateTaskStyle';
import CompleteCircle from './Circle/Circle';
import InsertSvg from '../InsertSvg/InsertSvg';

const themeForIcon = {
    visibility: 'hidden',
    height: '20px',
    width: '20px',
    margin: '0 5px',
    backgroundPosition: '0 -380px',
}

const themeForIconEdit = {    
    visibility: 'hidden',
    height: '10px',
    width: '10px',
    margin: '0 2px',
    backgroundPosition: '0 -200px',
}

const themeForIconCopy = {    
    visibility: 'hidden',
    height: '10px',
    width: '10px',
    margin: '0 2px',
    backgroundPosition: '0 -210px',
}

const CreateTask = () => {
  return (
      <WrapperCreateTask>
          <CompleteCircle/>         
          <InsertSvg theme={themeForIcon}/>
          <Day> Day </Day>      
          <TaskTitle>
              <TaskEvent> 
                General
              </TaskEvent>              
              <TaskDescription>
                  <TaskDescriptionEdit placeholder='description task'disabled/>
                  <InsertSvg theme={themeForIconEdit}/>
                  <InsertSvg theme={themeForIconCopy}/>                                  
              </TaskDescription>              
          </TaskTitle>
          <CompletedTask/>          
      </WrapperCreateTask>      
  );
};

export default CreateTask;