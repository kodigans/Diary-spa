import * as React from 'react';

import { AddWorkSpaceWrapper, AddWorkSpaceMain, AddWorkSpaceHeader, TeamCreateWrapper, WorkSpaceImage, CustomIconBlock } from './AddWorkSpaceStyle';
import CustomDataFiled from './DataFiled/DataFiled';

const themeForWorkSpaceName = {
    forWrapper: {
        wrapperTheme: {
            width: '80%',
            height: '37px'
        }
    },
    forInput: {
        
    },

    forLabel: {
        textLabel: 'WorkSpace name',
    }
 }

 const themeForColorPicker = {
    forWrapper: {
        wrapperTheme: {
            width: '80%',
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
 }

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
            </AddWorkSpaceMain>                       
        </AddWorkSpaceWrapper>
    )
}

export default AddWorkSpace;

