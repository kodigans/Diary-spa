import * as React from 'react';

import {
  AddWorkSpaceWrapper,
  AddWorkSpaceMain,
  AddWorkSpaceHeader,
  TeamCreateWrapper,
  WorkSpaceImage,
  CustomIconBlock,
  SameLabel,
} from './AddWorkSpaceStyle';
import CustomDataFiled from './DataFiled/DataFiled';
import ColorPicker from './ColorPicker/ColorPicker';
import DefaultButton from "../Common/DefaultButton/DefaultButton";

const themeForWorkSpaceName = {
  forWrapper: {
    wrapperTheme: {
      width: '85%',
      height: '37px',
    },
  },
  forInput: {},

  forLabel: {
    textLabel: 'WorkSpace name',
  },
};

const themeForColorPicker = {
  forWrapper: {
    wrapperTheme: {
      width: '100%',
      height: '37px',
    },
  },
  forInput: {
    disabled: true,
    inputTheme: {
      backgroundColor: 'inherit',
    },
  },
  forLabel: {
    textLabel: 'Color',
  },
};

const themeForEmail = {
  forWrapper: {
    wrapperTheme: {
      width: '40%',
      height: '37px',
    },
  },
  forInput: {
    inputTheme: {
      backgroundColor: 'inherit',
    },
  },
  forLabel: {
    textLabel: 'name@example.com',
  },
};

const themeForName = {
  forWrapper: {
    wrapperTheme: {
      width: '40%',
      height: '37px',
      margin: '0 0 0 auto',
    },
  },
  forInput: {
    inputTheme: {
      backgroundColor: 'inherit',
    },
  },
  forLabel: {
    textLabel: 'Name',
  },
};

const themeForLabel = {
    fontSize: '14px',
    lineHeight: '24px',
    color: '#9faab7',
};

const submitButton = {
    backgroundColor: '#F4F4F4',
    cursor: 'pointer',
    color: '#B9B9B9',
    width: '20%',
    marginLeft: 'auto',
    marginTop: '50px',
    padding: '8px 20px',
    outline: 'none',
    borderRadius: '5px'
};

const AddWorkSpace = ({}) => {
  return (
    <AddWorkSpaceWrapper>
      <AddWorkSpaceMain>
        <AddWorkSpaceHeader>
          <TeamCreateWrapper>Add a Workspace</TeamCreateWrapper>
          <WorkSpaceImage />
        </AddWorkSpaceHeader>
        <CustomDataFiled theme={themeForWorkSpaceName} />
        <CustomIconBlock />
        <CustomDataFiled theme={themeForColorPicker} />
        <ColorPicker />
        <SameLabel>Invite Others</SameLabel>
        <CustomDataFiled theme={themeForEmail} />
        <CustomDataFiled theme={themeForName} />
        <CustomDataFiled theme={themeForEmail} />
        <CustomDataFiled theme={themeForName} />
        <SameLabel theme={themeForLabel}>Don't worry, you can invite others later too</SameLabel>
        <DefaultButton theme={submitButton}/>
      </AddWorkSpaceMain>
    </AddWorkSpaceWrapper>
  );
};

export default AddWorkSpace;
