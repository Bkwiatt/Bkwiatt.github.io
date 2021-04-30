import styled from 'styled-components'


export const CoinApp = styled.div`
    box-sizing: border-box;
    margin: 0;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    background-color: #1a1a1c;

`

export const CoinSearch = styled.div`
    margin-bottom: 64px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const CoinText = styled.h1`
    margin-bottom: 32px;
    text-align: center;

    @media screen and (max-Width: 400px) {
        font-size: 38px;
    }
`

export const CoinInput = styled.input`
    padding-left: 16px;
    width: 300px;
    height: 50px;
    border-radius: 4px;
    border: none;
    background-image: linear-gradient(
        -225deg,
         #ac32e4 0%,
         #7918f2 48%, 
         #4801ff 100%);
    color: #e2e2e2;

    &::placeholder { 
        color: #e2e2e2;
    }
`



export const CoinContainer = styled.div`
display: flex;
justify-content: center;
`

export const CoinRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    height: 80px;
    border-bottom: 1px solid #d7d7d7;
    width: 950px;

    @media screen and (max-Width: 400px) {
        width: 90px;
    }
`

export const CoinImgCointainer = styled.div`
display: flex;
align-items: center;
padding-right: 24px;
min-width: 300px;
`

export const CoinIMG = styled.img`
    height: 30px;
    width: 30px;
    margin-right: 10px;
`

export const CoinH1 = styled.h1`
    font-size: 16px;
    width: 150px;
`

export const CoinSymbol = styled.p`
    text-transform: uppercase;
    margin: 0;
`

export const CoinData = styled.div`
    display: flex;
    text-align: right;
    justify-content: space-between;
    width: 100%;
    
`

export const CoinPrice = styled.p`
    width: 110px;
    margin: 0;

`

export const CoinVolume = styled.p`
    width: 200px;
    margin: 0;
`

export const CoinPriceChange = styled.p`
    width: 80px;
    color: ${props => props.isPositive ? "green" : "red"};
    margin: 0;
`

export const CoinMarketCap = styled.p`
    width: 240px;
    margin: 0;
`







