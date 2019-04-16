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
    flex-direction: row;
    //  align-content: space-between;
    justify-content: space-between
    flex-wrap: wrap;
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

export const CustomIconBlock = styled.div`        
    height: 40px;
    width: 40px;
    line-height: 50px;
    margin-left: 25px;
    font-size: 25px;
    font-family: 'proxima-nova', sans-serif;
    border-radius: 3px;
    background: #ffc4a9;
    border: 1px solid rgba(0, 0, 0, 0.3);
    color: rgba(0, 0, 0, 0.6);
    margin-bottom: 15px;
`

export const SameLabel = styled.h3`
    width: 100%;
    font-family: 'Avenir'; 
    font-size: 22px;
    line-height: 30px;
    color: #637282;
    margin-top: 45px;
    margin-bottom: 25px;
`