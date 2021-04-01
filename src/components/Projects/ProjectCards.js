import React from 'react'
import { ProjectsCardHr, ProjectsWrapper, ProjectLogoWrap, ProjectsTypeLogo } from './ProjectsElements'
import Card from './Card'
import appleLogo from '../../images/apple-logo.png'
import cLogo from '../../images/c.png'
import { iOSCard1, iOSCard2 } from './data'

const ProjectCards = () => {
    return (
        <>
            {/* iOS Projects */}
            <ProjectLogoWrap>
                <ProjectsTypeLogo src={appleLogo} alt="ioslogo" />
                <ProjectsWrapper>
                    <Card {...iOSCard1} />
                    <Card {...iOSCard2} />
                </ProjectsWrapper>
            </ProjectLogoWrap>

            <ProjectsCardHr />

            {/* C# Projects */}
            <ProjectLogoWrap>
                <ProjectsTypeLogo src={cLogo} alt="cLogo" />
                <ProjectsWrapper>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />

                </ProjectsWrapper>
            </ProjectLogoWrap>
        </>
    )
}

export default ProjectCards
