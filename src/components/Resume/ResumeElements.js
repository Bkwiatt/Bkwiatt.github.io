import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const ResumeContainer = styled.div`
    background-color: white;
    display: flex;
    padding: 0 15px;
    height: 100vh;
    overflow-x: hidden;
    position: relative;
    z-index: 1;  

    @media screen and (max-Width: 480px) {
        height: 100%;
    }
`

export const ResumeWrapper = styled.div`
    max-width: 1000px; 
    margin-top: 10px;
    margin-left:15px;
    display: grid;
    grid-template-columns: 30vw 65vw;
    align-items: center;
    grid-gap: 20px;

    @media screen and (max-width: 970px) {
        grid-template-columns: 1fr;
        margin: 10px auto;
    }
`

export const ResumeCardLeft = styled.div`
    background: lightblue;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
    width: 100%;
    border-radius: 10px;
    padding: 25px;
    box-shadow: 0 1px 3px rgba(0,0,0,2);
    transition: all 0.2s ease-in-out;
`

export const ResumeCardRight = styled.div`
    background: #27221F;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
    width: 100%;
    border-radius: 10px;
    padding: 25px;
    box-shadow: 0 1px 3px rgba(0,0,0,2);
    transition: all 0.2s ease-in-out;

 
`

// Left card Styles
export const ResumeLeftH2 = styled.h2`
    font-size: 3.5em;
`

export const ResumeLeftH4 = styled.h4`
    color: #959595;
    margin: 0;
`

export const ResumeLeftHr = styled.hr`
    display: block;
    width: 60%;
    border-top: 3px solid #800080;
    margin-top: 1em;
    margin-bottom: 1.5em;
    padding: 0;
`

export const ResumeLeftP = styled.p`
    color: #000;
`

export const ResumeLeftH5 = styled.h5`
    margin-top: 15px;
    margin-bottom: 15px;
`

export const ResumeLeftA = styled.a`
    text-decoration: none;
    cursor: pointer;
`


// Right card Styles
export const ResumeRightH2 = styled.h2`
    font-size: 3.5em;

    @media screen and (max-Width: 750px) {
        font-size: 3.2em;
    }
`

export const ResumeRightH4 = styled.h4`
    color: #fff;
    margin-bottom: 15px;
`

export const ResumeRightHr = styled.hr`
    display: block;
    width: 100%;
    align-self: center;
    border-top: 3px solid #e22947;
    margin-top: 1em;
    margin-bottom: 1.5em;
    padding: 0;
`

export const ResumeRightP = styled.p`
    color: white;
    margin: 8px 0 0 0 ;
`

export const ResumeRightH5 = styled.h5`
    margin-top: 15px;
    margin-bottom: 15px;
`

export const ResumeRightA = styled.a`

`

export const ResumeImg = styled.img`
    height: 200px;  
    align-self: center;
`

export const ResumeRoute = styled(LinkR)`
    border-radius: 50px;
    background: #01bf71;
    text-align: center;
    width: 100%;
    font-weight: bold;
    white-space: nowrap;
    padding: 16px 64px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #27221F;
        color: #fff;
    }
`