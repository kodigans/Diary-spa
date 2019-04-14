import styled from 'styled-components';
import AddWorkSpace from './AddWorkSpace'
import Image from './WorkSpace.png';

export const AddWorkSpaceWrapper = styled.section`    
    background-color: #fff;
    height: 100%;
    flex: 1;        
`

export const AddWorkSpaceMain = styled.div`
    display: flex;
    flex-direction: column;
    //min-width: 600px;
    width: 600px;     
    margin: 60px auto; 
`;

export const AddWorkSpaceHeader = styled.header`
    display: flex; 
    width: 100%;
`;

export const TeamCreateWrapper = styled.div`
    width: 60%;
    font-family: 'Avenir';
    font-size: 36px;
    &::after {
        display: inline-block;
        content: 'People are meant to work together. Give your people Plan, so they can do just that.';
        color: #aaa;
        font-size: 16px;
        line-height: 22px;
        color: #637282;
        margin-top: 15px;    
    }
`;

export const WorkSpaceImage = styled.p`
  width: 40%;
  &::before {
    content: '';
    background-image: url(${Image});
    background-size: contain;    
    background-position: 100% 100%;
    background-repeat: no-repeat;    
    width: 100%;       
    height: 75px;
    display: block;
    opacity: 1;
  }
  &:after {
      content: 'Many hands make light work!   🙌';
      font-family: 'proxima-nova', sans-serif;
      font-size: 14px;
      line-height: 24px;
      color: #9faab7;
      margin-left: auto;
  }
`