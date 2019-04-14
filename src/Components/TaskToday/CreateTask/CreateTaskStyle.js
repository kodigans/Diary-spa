import styled from 'styled-components';

export const WrapperCreateTask = styled.div`
    /* display: flex;
    flex-direction: row;
    width: 100%;
    position: relative;
    display: table;
    border-collapse: separate;
    border-bottom: 1px solid #eee; */
    display: flex;
    flex-direction: row;
    align-items: center;    
    background: #fff;
    cursor: pointer;
    color: #666;
    font-size: 16px;
    line-height: 30px;
    min-height: 46px;
    padding: 0 8px;        
    &:hover > div{
        visibility: visible;
    }
`;

//export const    

export const Day = styled.span`
    content: 'day';
    color: grey;
    margin-right: 30px;
`
export const TaskTitle = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`
export const TaskEvent = styled.span`
    line-height: 12px;
    font-size: 12px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #a9a9a9;
    font-family: 'avenir-light', sans-serif;
    margin-top: 5px;
    margin-bottom: -5px;
`

export const TaskDescription = styled.div`
    &:hover > div{
        visibility: visible;
    }

`;

export const TaskDescriptionEdit = styled.input`
    max-width: 84%;
    width: 70px;  //change  
    font-size: 14px;
    color: #1b2733;    
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    cursor: default;
    background-color: inherit;
    border: none;
    outline: none;  
`;

export const CompletedTask = styled.div` 
    display: flex;
    position: relative;
    height: 34px;
    &::before{
        display: block;
        position: absolute;         
        top: 40%; 
        left: -5px;
        content: ' ';
        height: 7px;
        width: 7px;
        border-bottom: solid 3px #eee;
        border-right: solid 3px #eee;   
        transform: rotate(315deg)
    }
    &:hover::before {
        border-bottom: solid 3px #ADCAF6;
        border-right: solid 3px #ADCAF6;   
    }
`;
