import styled from 'styled-components'
import sprite from '../../Svg/sprite.svg';
import DataFiled from '../../DataFiled/DataFiled';

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

export const DataFiledWrapper = styled.div``;