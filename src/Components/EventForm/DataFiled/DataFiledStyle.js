import styled from 'styled-components'
import sprite from '../../../Svg/sprite.svg';

export const CustomInput = styled.input`
    flex: 1;
    font-family: 'Avenir', sans-serif;    
    border-width: 0px;
    text-shadow: none;
    box-shadow: none;    
    padding-left: 15px;
    color: #a9a9a9;
    height: 25px;
    display: block;    
    font-size: 14px;
    line-height: 1.42857;    
    margin: 0;       
    outline: none;    
    ${({theme}) => ({...theme})}
`;

export const Label  = styled.label`    
      display: inline-block; 
      margin: 0;    
      //height: 12px;    
      //width: ${props => props.theme.size};          
      width: 12px;
      position: relative;     
      background: url(${sprite}) no-repeat;
      //background-position: 0 ${props => props.theme.slipDown};
      background-position: 0 -25px;
      background-size: cover;
      background-color: inherit;     
      ${({theme}) => ({...theme})} 
`;

export const DataFiledWrapper = styled.div`
    display: flex;
    align-items: center;    
    width: calc(100% - 10px);
    font-size: 14px;
    padding: 10px 5px;
    border-bottom: 1px solid #f8f8f8;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-family: 'Avenir', sans-serif;
    border-bottom: 1px solid #eee;
    ${({theme}) => ({...theme})}
`;