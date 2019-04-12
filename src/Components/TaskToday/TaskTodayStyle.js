import styled from 'styled-components';

export const WrapperTaskToday = styled.section`
    flex: 0 1 54%;
    display: flex;
    flex-direction: 
    flex-shrink: 0;
    background-color: #f2f6fa;
    padding-left: 30px;
    padding-right: 30px;
    height: 100%;
    margin:0;    
    min-width: 400px;
    width: calc(60% - 60px);
    position: relative;
    min-height: 100vh;
`;

export const WrapperTaskTodayHeader = styled.header`
  display: flex;
  flex-shrink: 0;
  min-height: 100px;
  margin-top: 30px;
`;

export const TaskTodayTitle = styled.div`
    
`;

export const CurrentDate = styled.h2`
    margin: 0;
    padding: 0 10px 0 25px;
    font-size: 30px;
    color: #1b2733;
    font-family: 'Avenir', sans-serif;
    text-align: left;
    text-transform: none;
    white-space: nowrap;
`;
