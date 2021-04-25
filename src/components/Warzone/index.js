import React, { useEffect, useState } from 'react'
import { WarzoneContainer } from './warzoneElements'

const WarzoneStats = () => {
    const [person, setPerson] = useState(null)

    useEffect(() => {
        async function fetchMyAPI() {
            const response = await fetch('https://api.thedogapi.com/v1/images/search');
            const data = await response.json();
            const [item] = data;
            setPerson(item);
            console.log(item.id)
        }
        fetchMyAPI();

    }, []);

    return (
        <>
            <WarzoneContainer>
                {person && <img style={{width: '800px', height: '800px'}} src={person.url}></img>}
            </WarzoneContainer>
        </>
    )
}

export default WarzoneStats
