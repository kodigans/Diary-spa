import * as React from 'react';

import { ColorList, CustomCircle } from './ColorPickerStyle';

const ColorPicker = () => {
    const color = colorArray.map(color => <CustomCircle type='radio' name='currentColor' theme={color} key={color}/>)
    return (
        <ColorList>                       
            {color}
        </ColorList>
    )
};

export default ColorPicker;

const colorArray =  [
'rgb(255, 196, 169)',
'rgb(252, 208, 223)',
'rgb(215, 230, 246)',
'rgb(190, 144, 212)',
'rgb(50, 136, 230)',
'rgb(147, 185, 244)',
'rgb(77, 208, 225)',
'rgb(159, 225, 231)',
'rgb(175, 214, 127)',
'rgb(101, 198, 187)',
'rgb(76, 161, 151)',
'rgb(248, 148, 6)',
'rgb(249, 162, 76)',
'rgb(251, 215, 91)',
'rgb(149, 166, 166)',
'rgb(161, 135, 126)'];