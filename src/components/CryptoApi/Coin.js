import React from 'react'
import { CoinContainer, CoinRow, CoinImgCointainer, CoinIMG, CoinSymbol, CoinData, CoinPrice, CoinVolume, CoinPriceChange, CoinMarketCap, CoinH1 } from './CryptoElements'
import './crypto.css'

const Coin = ({ image, name, symbol, price, volume, priceChange, marketCap}) => {
    return (
        <>
        <CoinContainer>
            <CoinRow>
                <CoinImgCointainer>
                    <CoinIMG src={image} alt="crypto" />
                    <CoinH1>{name}</CoinH1>
                    <CoinSymbol>{symbol}</CoinSymbol>
                </CoinImgCointainer>
                <CoinData>
                    <CoinPrice>${price}</CoinPrice>
                    <CoinVolume>${volume.toLocaleString()}</CoinVolume>
                    {priceChange > 0 ? <CoinPriceChange isPositive={true}>{priceChange.toFixed(2)}%</CoinPriceChange> : <CoinPriceChange isPositive={false}>{priceChange.toFixed(2)}%</CoinPriceChange>}
                    <CoinMarketCap>Mkt Cap: {marketCap.toLocaleString()}</CoinMarketCap>
                </CoinData>
            </CoinRow>
        </CoinContainer>
            
        </>
    )
}

export default Coin
