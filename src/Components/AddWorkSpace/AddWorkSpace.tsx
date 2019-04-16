import * as React from 'react';

import { AddWorkSpaceWrapper, AddWorkSpaceMain, AddWorkSpaceHeader, TeamCreateWrapper, WorkSpaceImage, CustomIconBlock, SameLabel } from './AddWorkSpaceStyle';
import CustomDataFiled from './DataFiled/DataFiled';
import ColorPicker from "./ColorPicker/ColorPicker";

const themeForWorkSpaceName = {
    forWrapper: {
        wrapperTheme: {
            width: '85%',
            height: '37px'
        }
    },
    forInput: {
        
    },

    forLabel: {
        textLabel: 'WorkSpace name',
    }
 };

 const themeForColorPicker = {
    forWrapper: {
        wrapperTheme: {
            width: '100%',
            height: '37px'
        }
    },
    forInput: {
        disabled: true,
        inputTheme: {
            backgroundColor: 'inherit'
        } 
    },
    forLabel: {
        textLabel: 'Color',
    }
 };

 const themeForEmail = {
    forWrapper: {
        wrapperTheme: {
            width: '40%',
            height: '37px'
        }
    },
    forInput: {                
        inputTheme: {
            backgroundColor: 'inherit'
        } 
    },
    forLabel: {        
        textLabel: 'name@example.com',
    }
 };

 const themeForName = {
    forWrapper: {
        wrapperTheme: {
            width: '40%',
            height: '37px',
            margin: '0 0 0 auto'
        }
    },
    forInput: {                
        inputTheme: {
            backgroundColor: 'inherit'
        } 
    },
    forLabel: {        
        textLabel: 'Name',
    }
 };

const AddWorkSpace = ({}) => {
    return (
        <AddWorkSpaceWrapper>
            <AddWorkSpaceMain>
                <AddWorkSpaceHeader>
                    <TeamCreateWrapper>
                        Add a Workspace
                    </TeamCreateWrapper>
                    <WorkSpaceImage/>
                </AddWorkSpaceHeader>                
                <CustomDataFiled theme={themeForWorkSpaceName}/>                
                <CustomIconBlock/>                        
                <CustomDataFiled theme={themeForColorPicker}/>
                <ColorPicker/>
                <SameLabel>
                    Invite Others
                </SameLabel>
                <CustomDataFiled theme={themeForEmail}/>
                <CustomDataFiled theme={themeForName}/>
                <CustomDataFiled theme={themeForEmail}/>
                <CustomDataFiled theme={themeForName}/>
                <SameLabel>
                    Don't worry, you can invite others later too
                </SameLabel>
            </AddWorkSpaceMain>                       
        </AddWorkSpaceWrapper>
    )
};

export default AddWorkSpace;

