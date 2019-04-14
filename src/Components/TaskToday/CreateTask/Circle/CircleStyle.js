import styled from 'styled-components';

export const CompleteCircleWrapper = styled.div`
    position: relative;
    align-items: center;
    height: 32px;
    width: 32px;
    border-radius: 50%;
    background: #eee;
    transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;
    border: 1px solid #ddd;
    cursor: pointer;
    &:hover  {
        background: #13cb73;
        border-color: #13cb73;
    }  
    &::before{
        display: block;
        position: absolute; 
        top: 8px;   
        left: 13px;        
        content: ' ';
        height: 10px;
        width: 5px;
        border-bottom: solid 3px #fff;
        border-right: solid 3px #fff;
        transform: rotate(45deg)
    }
`;


// export const Complete = styled.i`
//     font-family: 'IconsFonts';
//     align-items: center;
//     height: 32px;
//     width: 32px;
//     border-radius: 50%;
//     background: #eee;
//     transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;
//     border: 1px solid #ddd;
//   //  content: '\E00A';
//     &::before {
//         width: 20px;
//         height: 40px;
//         content: '\E00A';
//         font-family: 'IconsFonts';
//     }
// `;