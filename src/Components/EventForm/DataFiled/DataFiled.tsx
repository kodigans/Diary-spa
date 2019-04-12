import * as React from 'react';

import { CustomInput, Label, DataFiledWrapper } from './DataFiledStyle';

interface DataFiled {
    theme: any;
    //forLabel: any
}

const DataFiled = ({theme: {forLabel, forInput, forWrapper}}: DataFiled) => {
    const {theme: themeInput, ...attributes} = forInput;
    return (
        <>
            <DataFiledWrapper theme={forWrapper}>
                <Label theme={forLabel}/>
                <CustomInput {...attributes} theme={themeInput}/>
            </DataFiledWrapper>
        </>
    )
};

export default DataFiled;