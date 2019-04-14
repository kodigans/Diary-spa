import * as React from 'react';

import { DataFiledWrapper, Input, FloatingLabel } from './DataFiledStyle';

const CustomDataFiled = () => {
    return (
        <DataFiledWrapper>
            <Input type='text' required={true}/>            
            <FloatingLabel>
                WorkSpace Name  
            </FloatingLabel>
        </DataFiledWrapper>
    )
}

export default CustomDataFiled;