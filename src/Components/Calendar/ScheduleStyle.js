import styled from 'styled-components';

export const WrapperSchedule = styled.section`    
    display: flex;        
    flex-direction: column;    
    width: 20.25%;
    height: 100vh;    
    border-left: 1px solid #eee;
    background-color: #fff;
    overflow: hidden scroll;
    &::-webkit-scrollbar {
        width: 0px;
        background: rgba(255, 255, 255, 0.0);
    }        
`;

export const ScheduleDay = styled.span`
    display: 'inline-block',
    width: auto;    
    color: #1b2733;
    font-size: 22px;    
    line-height: 25px;    
    ${({theme}) => ({...theme})}
`;

export const ScheduleHeader = styled.header`
    display: flex;
    align-items: center;
    width: 100%;
    padding-top: 5px;    
    height: 64px;
    background-color: #FDFDFD;
    flex-direction: row;     
`;

export const DaysSlider = styled.div`    
    background-color: inherit;
    flex: 1;    
    &::before {
      width: 20px;
      height: 20px;
      transform: rotate(45deg);
                
    }
`;

export const CreateTask = styled.div`
    width: calc(100% - 20px);        
    color: #a9a9a9;
    font-family: 'Avenir';
    font-size: 14px;
    margin-top: 11px;
    padding-bottom: 6px;
    line-height: 20px;    
    padding-left: 20px; 
    cursor: pointer;
    border-bottom: 1px solid #e6e8eb;
`;
