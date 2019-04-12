import styled from 'styled-components';

export const Button =  styled.button`
    color: #637282;    
    margin-left: 10px;
    font-size: 12px;
    background-color: inherit;
    border: none;    
    cursor: pointer;
    outline: none;
    font-family: 'Avenir';
    &:hover {
      border-bottom: 2px solid #4f98ff;       
    }
`;

export const CustomTitleButton = styled.h2`
    margin: 2px auto;
    font-size: 12px
`;