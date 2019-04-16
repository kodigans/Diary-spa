import styled from "styled-components";

export const DayHour = styled.li`
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    width: 100%;   
    align-items: baseline;  
         
`;

export const Day = styled.span`
    display: inline-block;
    margin-right: 5px;
    color: #637282;
    font-size: 18px;   
    
`;

export const Meridian = styled.span`
    color: #637282;
    font-size: 10px;
    margin-right: 15px;   
`;

export const List = styled.ul`
    margin-left: 20px;
    margin-right: 10px;
    padding: 0;
`;

export const TimeBlock = styled.div`    
    height: 20px;
    ${({theme}) => ({...theme})}
`;

//1px solid #f5f5f5;