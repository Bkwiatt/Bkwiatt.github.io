import React from 'react'
import Icon1 from '../../images/apple-rainbow.png'
import Icon2 from '../../images/pirateLogo.png'
import Icon3 from '../../images/avocado.png'
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP, ProjectRoute} from './ServicesElements'

const Services = () => {
    return (
        <>
            <ServicesContainer id="projects">
                <ServicesH1>Favorite Projects</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={Icon1} style={{width: '80px', height: '80px', margin: '0px'}} />
                        <ServicesH2>iOS Fructus App</ServicesH2>
                        <ServicesP>iOS project created around different fruits with the intention of learning beautiful UI design and best practices using Swift</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon2} style={{width: '80px', height: '80px', paddingTop: '5px', margin: '0px' }} />
                        <ServicesH2>C#/SQL App</ServicesH2>
                        <ServicesP>C# and SQL database app created for popular Twitch Streamer 'CDNThe3rd' to help enhance the video game, Sea of Thieves</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon3} style={{width: '80px', height: '80px', margin: '0px'}}/>
                        <ServicesH2>iOS Avocados App</ServicesH2>
                        <ServicesP>iOS project created around avocados with the intention of learning beautiful UI design and best practices using Swift.</ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
                <ProjectRoute to='/projects'>See More</ProjectRoute>
            </ServicesContainer>
        </>
    )
}

export default Services
