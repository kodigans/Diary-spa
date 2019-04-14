import * as React from 'react';

import { AddWorkSpaceWrapper, AddWorkSpaceMain, AddWorkSpaceHeader, TeamCreateWrapper, WorkSpaceImage } from './AddWorkSpaceStyle';
import CustomDataFiled from './DataFiled/DataFiled';

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
                <CustomDataFiled/>
            </AddWorkSpaceMain>            
        </AddWorkSpaceWrapper>
    )
}

export default AddWorkSpace;

