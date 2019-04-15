import styled from 'styled-components';

export const DataFiledWrapper = styled.div`
    position: relative;
    font-family: 'Avenir', sans-serif;
    color: #afc2cd;
    padding: 5px 0;
    ${({theme}) => ({...theme})};
`;

export const FloatingLabel = styled.span`
  position: absolute;
  pointer-events: none;
  left: 20px;
  top: 18px;
  transition: 0.2s ease all;
`

export const CustomBorder = styled.div`
    position: absolute;
    width: 100%;
    height: 2px;    
    z-index: 2;
    bottom: 5px;
    background-image: linear-gradient(#3A88E6, #3A88E6);
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: 0% 100%;
    transition: background-size .5s, color .5s;
`

export const Input = styled.input`
    outline: none;
    width: 100%;
    height: 35px;
    font-size: 22px;
    color: #1B1B1B;
    border: none; 
    border-bottom: solid #E6E8EB 1px;  
    &:focus ~ ${FloatingLabel} {    
        top: 0px;
        bottom: 10px;
        left: 0px;
        font-size: 11px;
        opacity: 1;
        color: #3A88E6; 
    };
    &:focus ~ ${CustomBorder} {
        background-size: 100% 100%;
        color: #fff;
    }
    &:not(:placeholder-shown) + ${FloatingLabel} {
        top: 0;
        bottom: 10px;
        left: 0px;
        font-size: 11px;
        opacity: 1;        
    }
    ${({theme}) => ({...theme})};
`