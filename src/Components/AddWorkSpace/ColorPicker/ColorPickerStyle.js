import styled from 'styled-components';

export const ColorList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 0;
  padding: 5px;
`;

export const ColorElement = styled.li`
  
`;

export const CustomCircle = styled.input`
    appearance: none;
    border-radius: 50%;
    height: 30px; 
    width: 30px;
    outline: none;
    border: none;
    -webkit-appearance: none;
     -moz-appearance: none;
     appearance: none;
     display: inline-block;
     position: relative;
     background-color: #f1f1f1;
     color: #666;
     top: 10px;
     height: 24px;
     width: 24px;
     border: 0;
     border-radius: 50px;
     cursor: pointer;     
     margin-right: 7px;
     outline: none;
     &:checked::before {       
        position: absolute;     
      left: 8px;
      top: 5px;
      width: 5px;
      height: 10px;
      border-bottom: solid 3px #fff;
      border-right: solid 3px #fff;
      content: ' ';    
      transform: rotate(40deg);      
     }
     ${({theme}) => ({backgroundColor: theme})}
`;