import React from 'react'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServicesElements'

const Services = () => {
    return (
        <>
            <ServicesContainer id="services">
                <ServicesH1>Favorite Projects</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={Icon1} />
                        <ServicesH2>iOS App</ServicesH2>
                        <ServicesP>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla, nibh at commodo facilisis,</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon2} />
                        <ServicesH2>C# app</ServicesH2>
                        <ServicesP>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla, nibh at commodo facilisis,</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon3} />
                        <ServicesH2>Data Structures</ServicesH2>
                        <ServicesP>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla, nibh at commodo facilisis,</ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
            </ServicesContainer>
        </>
    )
}

export default Services
