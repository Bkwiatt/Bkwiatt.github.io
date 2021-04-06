import React from 'react'
import { ProjectsCardHr, ProjectsWrapper, ProjectLogoWrap, ProjectsTypeLogo } from './ProjectsElements'
import Card from './Card'
import { iOSCard1, iOSCard2 } from './data'

const ProjectCards = () => {
    return (
        <>
            {/* iOS Projects */}
            <ProjectLogoWrap>
                <ProjectsWrapper>
                    <Card {...iOSCard1} />
                    <Card {...iOSCard2} />
                </ProjectsWrapper>
            </ProjectLogoWrap>

            <ProjectsCardHr />

            {/* C# Projects */}
            <ProjectLogoWrap>
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
