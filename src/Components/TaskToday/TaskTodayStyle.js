import styled from 'styled-components';

export const TaskTodayHeader = styled.header`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    height: 20%;
    width: 100;
`;



export const WrapperTaskToday = styled.section`
    height: 100vh;    
    display: flex; 
    flex: 1;
    flex-direction: column;       
    background-color: #f2f6fa;
    padding-left: 30px;
    padding-right: 30px;    
    margin:0;    
    min-width: 400px;
    width: calc(50% - 60px);
    position: relative;    
`;

export const WrapperTaskTodayHeader = styled.div`
  display: flex;
  flex-direction: row;     
  flex-wrap: wrap;
  flex-shrink: 0;
  min-width: 100px;
  width: 40%;  
  margin-top: 30px;  
  margin-bottom: 20px;
`;

export const CurrentDate = styled.h2`    
    margin: 0;
    width: 100%;    
    font-size: 30px;
    color: #1b2733;
    font-family: 'Avenir', sans-serif;
    text-align: left;
    text-transform: none;
    white-space: nowrap;
`;
