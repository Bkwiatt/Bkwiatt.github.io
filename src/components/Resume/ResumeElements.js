import styled from 'styled-components';

export const ResumeContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 100vh;
    position: relative;
    z-index: 1;    
`

export const ResumeWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;
`

export const ResumeCard = styled.div`
    background: #d3d3d3;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: left;
    height: 100%;
    width: 100%;
    border-radius: 10px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,2);
    transition: all 0.2s ease-in-out;
`

export const ResumeH2 = styled.h2`
`

export const ResumeH4 = styled.h4`
`

export const ResumeHr = styled.hr`
    background-color: '#000';
    width: 50%;
    margin-top: 10px;
    margin-bottom: 10px;
`

export const ResumeP = styled.p`
`

export const ResumeH5 = styled.h5`
    padding-top: 10px;
    padding-bottom: 10px;
`

export const ResumeA = styled.a`
`
export const ResumeImg = styled.img`
    width: 300px;
    height: 300px;  
    padding-bottom: 20px;
    align-self: center;
`