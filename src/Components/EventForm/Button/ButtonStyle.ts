import styled from 'styled-components';

export const Button = styled.button`
    font-size: 13px;
    font-family: 'Avenir'
    vertical-align: middle;
    display: inline-block;    
    color: #fff;
    background-color: ${({theme: {backgroundColor}}) => backgroundColor};
    margin-top: 10px;
    margin-bottom: 10px;
    transition: background-color 0.2s linear;
    line-height: 1.42857;
    border-radius: 4px;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    white-space: nowrap;
    padding: 6px 12px;
    font-weight: normal;
    text-align: center;
    outline: none;
    &:hover {        
        ${props => ({...props.theme.hover})
    }
`;