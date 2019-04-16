import * as React from 'react'; 

import { Button } from './DefaultButtonStyle';

interface DefaultButton {
    theme?: any
}

const DefaultButton = ({theme}: DefaultButton) => {
    return (        
            <Button theme={theme}>
                Lorem ipsum
            </Button>                        
    )
};

export default DefaultButton;