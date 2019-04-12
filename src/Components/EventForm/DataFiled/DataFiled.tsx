import * as React from 'react';

import { CustomInput, Label, DataFiledWrapper } from './DataFiledStyle';

interface DataFiled {}

const DataFiled = ({}: DataFiled) => {
    return (
        <>         
            
            <DataFiledWrapper>
                <Label/>
                <CustomInput type='text' placeholder='lorem ipsum'/>
            </DataFiledWrapper>
        </>
    )
};