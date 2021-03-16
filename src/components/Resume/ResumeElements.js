import styled from 'styled-components';

export const ResumeContainer = styled.div`
    background-color: #3b3838;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 15px;
    height: 100vh;
    overflow-x: hidden;
    position: relative;
    z-index: 1;  

    @media screen and (max-Width: 480px) {
        height: 1150px;
    }
`

export const ResumeWrapper = styled.div`
    max-width: 1000px;  
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-gap: 16px;

    @media screen and (max-width: 480px) {
        grid-template-columns: 1fr;
    }
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
    padding: 25px;
    box-shadow: 0 1px 3px rgba(0,0,0,2);
    transition: all 0.2s ease-in-out;
`

export const ResumeH2 = styled.h2`
    font-size: 1.5rem;
`

export const ResumeH4 = styled.h4`
    color: #959595;
`

export const ResumeHr = styled.hr`
    display: block;
    height: 1px;
    width: 50%;
    border: 0;
    border-top: 3px solid #800080;
    margin-top: 1.5em;
    margin-bottom: 1.5em;
    padding: 0;
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
    height: 250px;  
    margin-bottom: 60px;
    align-self: center;
`