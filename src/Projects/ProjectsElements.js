import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom';

export const ProjectsContainer = styled.div`
    background: #0c0c0c;
    height: 100vh;
    z-index: 1;

    @media screen and (max-width: 760px) {
        height: 100%;
    }
`

export const ProjectTypeWrapper = styled.div`
    display: flex;
    border-bottom: 2px solid green;
    width: 100%;
    color: #FFF;
    height: 60px;
    padding: 5px;
`

export const ProjectsWrapper = styled.div`
    max-width: 1200px;
    margin: 20px auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-Width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-Width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const CardWrapper = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 450px;
    box-shadow: 1px 1px 5px rgba(1,191,113,2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
        box-shadow: 3px 3px 5px rgba(1,191,113,2);
    } 

`

export const ProjectRoute = styled(LinkR)`
    border-radius: 50px;
    background: #01bf71;
    text-align: center;
    margin: 5px 0px 0px 5px;
    padding: 10px;
    width: 200px;
    font-weight: bold;
    white-space: nowrap;
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


export const ProjectsH1 = styled.h1`
    font-size: 2em;
    margin-bottom: 5px;
    font-weight: bold;

`


export const ProjectsP = styled.p`

`

export const ProjectsHr = styled.hr`
    display: block;
    width: 100%;
    align-self: center;
    border-top: 4px solid #01bf71;
    margin: 0 auto;
`

export const CardImgWrap = styled.div`

`

export const CardImg = styled.img`
    width: 100%;
    height:100%;
`

export const CardInfo = styled.div`
    padding: 0px 25px 25px 25px;
`