import styled from 'styled-components'

export const WarzoneContainer = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: black;
    color: white;
    overflow: auto;
`

export const StatsContainer = styled.div`
    width: 25%;
    height: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -75%);
    padding: 15px;
    border-radius: 10px;
    background-color: white;

    @media screen and (max-Width: 450px) {
        width: 90%;
        transform: translate(-50%, -100%);
    }

    @media screen and (max-Width: 400px) {
        width: 100%;
        transform: translate(-50%, -100%);
    }
`