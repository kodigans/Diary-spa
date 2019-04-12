import styled from 'styled-components'
import sprite from '../../../Svg/sprite.svg';

export const Option__Link = styled.a`
    width: 50px;    
    height: 50px;
    background-color: inherit;    
`;

export const Span = styled.span`
    cursor: pointer;          
    display: block;
    content: " ";
    margin: 0 auto;  
    position: relative;     
    background: url(${sprite}) no-repeat;    
    background-size: cover;
    background-color: inherit;
    margin-bottom: 15px;    
    ${({theme}) => ({...theme})}    
`;