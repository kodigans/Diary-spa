import styled from 'styled-components'

export const Button = styled.button`
    width: 50%;
    height: 35px;
    border: 0;    
    ${({theme}) => ({...theme})}    
`;