import * as React from 'react';

import { ToolBarPanel, Setting, NewTask, MainOption } from './ToolBarStyle';
import Option from './Option/Option';

interface ToolBarProps {}

const themeForNotificationButton = {
  width: '30px',
  height: '20px',
};

const themeForSettingsButton = {
  width: '30px',
    height: '30px',
};

const themeForToolthButton = {
  width: '20px',
  height: '20px',
};

const ToolBar = ({}: ToolBarProps) => {
  return (
    <ToolBarPanel>
      <MainOption>
        <Option theme={{backgroundPosition: '0 -180px', width: '30px', height: '30px'}}/>
        <Option theme={{backgroundPosition: '0 -120px', width: '30px', height: '30px'}}/>
        <Option theme={{backgroundPosition: '0 -150px', width: '30px', height: '30px'}}/>
        <Option theme={{backgroundPosition: '0 -210px', width: '30px', height: '30px'}}/>
      </MainOption>

      <NewTask>
        <Option theme={{backgroundPosition: '0 -320px', width: '32px', height: '32px'}}/>
      </NewTask>

      <Setting>
        <Option theme={{backgroundPosition: '0 -162px', width: '18px', height: '18px'}}/>
        <Option theme={{backgroundPosition: '0 -145px', width: '18px', height: '18px'}}/>
      </Setting>
    </ToolBarPanel>
  );
};

export default ToolBar;
