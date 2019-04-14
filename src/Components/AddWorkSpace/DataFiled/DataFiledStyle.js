import styled from 'styled-components';

export const DataFiledWrapper = styled.div`
    position: relative;
    font-family: 'Avenir', sans-serif;
    color: #afc2cd;
    padding: 5px 0;
`;

export const FloatingLabel = styled.span`
  position: absolute;
  pointer-events: none;
  left: 20px;
  top: 18px;
  transition: 0.2s ease all;
`

export const Input = styled.input`
    width: 100%;
    height: 35px;
    font-size: 22px;
    color: black;
    border: none;   
    &:focus ~ ${FloatingLabel} {    
        top: 0px;
        bottom: 10px;
        left: 0px;
        font-size: 11px;
        opacity: 1;
    };
    &:not(:focus):valid ~ ${FloatingLabel} {
        color: red;
        /* top: 0px;
        bottom: 10px;
        left: 0px;
        font-size: 11px;
        opacity: 1;         */
    }
`