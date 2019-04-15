import * as React from 'react';

import { DataFiledWrapper, Input, FloatingLabel, CustomBorder } from './DataFiledStyle';

const CustomDataFiled = ({theme: {forWrapper, forInput, forLabel}}) => {
    const { wrapperTheme } = forWrapper;
    const { inputTheme, ...inputAttr}  = forInput; 
    return (
        console.log(wrapperTheme),
        <DataFiledWrapper theme={wrapperTheme}>
            <Input type='text' placeholder=" " {...inputAttr} theme={inputTheme}/>            
            <FloatingLabel>
                {forLabel.textLabel}
            </FloatingLabel>    
            <CustomBorder/>                
        </DataFiledWrapper>
    )
}

export default CustomDataFiled;