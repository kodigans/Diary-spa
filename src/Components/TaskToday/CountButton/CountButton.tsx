import * as React from 'react';

import { Button, CustomTitleButton } from './CountButtonStyle';

const CountButton = ({title, count}) => {
    return (
        <Button>
             <CustomTitleButton> {count} {title} </CustomTitleButton>
        </Button>
    )

};

export default  CountButton;