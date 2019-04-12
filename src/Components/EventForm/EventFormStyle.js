import styled from 'styled-components';
import sprite from '../../Svg/sprite.svg';
//import sprite from '../../../Svg/sprite.svg';

export const  EventFormWrapper = styled.div`
    display: inline-block;
    flex-direction: column;    
    width: 400px;    
    background: white;    
    bottom: inherit !important;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.3);
    border: 1px solid #c8c7cc;
    border-radius: 4px;
    opacity: 1;        
`;

export const EventMainWrap = styled.div`
    display: flex; 
    flex-wrap: wrap;
    width: 100% - 40px;   
    padding: 20px 20px;
    padding-bottom: 0;     
`;

export const EventTitle = styled.input`
    width: 100%; 
    font-family: 'Avenir';
    background-color: inherit;
    color: #555;
    font-size: 18px;
    padding: 2px 0;
    border: none;
    box-shadow: none;
    background-color: rgba(0, 0, 0, 0);
    border-bottom: 1px solid #eee;
    outline: none;
    &::placeholder {
        color: #E1E1E1;
    }
`;

export const EventAccept = styled.div`
    display: flex; 
    justify-content: space-between;
    width: 100% - 30px;   
    border-top: 1px solid #eee;
    background: #f5f5f5;
    padding: 10px 15px;  
`;

export const CustomInput = styled.input`
    font-family: 'Avenir', sans-serif;
    position: relative;
    border-width: 0px;
    text-shadow: none;
    box-shadow: none;    
    padding-left: 15px;
    color: #a9a9a9;
    height: 25px;
    display: block;    
    font-size: 14px;
    line-height: 1.42857;
    width: 100%-15px;       
`

export const Label  = styled.label`
    position: absolute;
      content: ' ';
      margin: 0 auto;    
      height: 20px;    
      //width: ${props => props.theme.size};          
      width: 20px;
      position: relative;     
      background: url(${sprite}) no-repeat;
      //background-position: 0 ${props => props.theme.slipDown};
      background-position: 0 -25px;
      background-size: cover;
      background-color: inherit;  
`