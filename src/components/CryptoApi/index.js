import React, { useState, useEffect } from 'react'
import { CoinApp, CoinSearch, CoinText, CoinInput } from './CryptoElements'
import axios from 'axios'
import Coin from './Coin'
import './crypto.css'

// API Link
// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false

const CryptoAPI = () => {
    const [coins, setCoins] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
            .then(res => {
                setCoins(res.data);
            }).catch(error => alert("Error loading API"))
    }, [])


    const handleChange = e => {
        setSearch(e.target.value)
    }

    const filteredCoins = coins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())

    )

    return (
        <>
            <CoinApp>
                <CoinSearch>
                    <CoinText>Search a currency</CoinText>
                    <form>
                        <CoinInput type="text" placeholder="Search" onChange={handleChange} />
                    </form>

                </CoinSearch>
                {filteredCoins.map(coin => {
                    return (
                        <Coin
                            key={coin.id}
                            name={coin.name}
                            image={coin.image}
                            symbol={coin.symbol}
                            volume={coin.total_volume}
                            price={coin.current_price}
                            priceChange={coin.price_change_percentage_24h}
                            marketCap = {coin.market_cap}
                        />
                    )
                })}



            </CoinApp>
        </>
    )
}

export default CryptoAPI
