import * as React from 'react';
import * as ReactDOM from 'react-dom';
import RegistrationFormPresentational from './Components/RegistrationForm/RegistrationFormPresentational';
import ToolBar from "./Components/ToolBar/ToolBar";
import Option from  "./Components/ToolBar/Option/Option";
import NotificationPresentation from "./Components/Notification/Notification";
import { Fonts } from './Fonts/Fonts';
import EventForm from "./Components/EventForm/EventForm";
import TaskToday from "./Components/TaskToday/TaskToday";
import AddWorkSpace from './Components/AddWorkSpace/AddWorkSpace';

class App extends React.Component<{}, {}> {

    render() {

        return (
            <>
                <Fonts/>
                <AddWorkSpace/>
                {/* <ToolBar/> */}
                {/* <TaskToday/> */}
                {/* <RegistrationFormPresentational/> */}
                {/* <NotificationPresentation/> */}
                {/* <EventForm/> */}
            </>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
