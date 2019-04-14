import styled from 'styled-components';
import sprite from '../../../Svg/sprite.svg';

export const InsertSvgWrapper = styled.div`
      display: inline-block;      
      background: url(${sprite}) no-repeat;            
      background-size: cover;
      background-color: inherit;    
      ${({theme}) => ({...theme})}
`;