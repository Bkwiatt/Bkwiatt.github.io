import React from 'react'
import { ProjectsCardHr, ProjectsWrapper, ProjectLogoWrap } from './ProjectsElements'
import CardModal from './CardModal'
import CardLink from './CardLink'
import { iOSCard1, iOSCard2, cSharpCard1, sqlCard1, reactCard1, htmlCard1, reactCard2, reactCard3 } from './data'

const ProjectCards = () => {
    return (
        <>

        {/* Interactive Projects */}
        <ProjectLogoWrap id="ios">
                <ProjectsWrapper>
                <CardLink {...reactCard2} />  
                <CardLink {...reactCard3} />                     
                </ProjectsWrapper>
            </ProjectLogoWrap>

            <ProjectsCardHr />


            {/* iOS Projects */}
            <ProjectLogoWrap id="ios">
                <ProjectsWrapper>
                    <CardModal {...iOSCard1} />
                    <CardModal {...iOSCard2} />
                </ProjectsWrapper>
            </ProjectLogoWrap>

            <ProjectsCardHr />

            {/* C# Projects */}
            <ProjectLogoWrap>
                <ProjectsWrapper>
                    <CardModal {...cSharpCard1} />
                </ProjectsWrapper>
            </ProjectLogoWrap>

            <ProjectsCardHr />

            {/* SQL Projects */}
            <ProjectLogoWrap>
                <ProjectsWrapper>
                    <CardModal {...sqlCard1} />
                </ProjectsWrapper>
            </ProjectLogoWrap>

            <ProjectsCardHr />

            {/* Web Dev Projects */}
            <ProjectLogoWrap id="webapp">
                <ProjectsWrapper>
                    <CardModal {...reactCard1} />
                    <CardModal {...htmlCard1} />                    
                </ProjectsWrapper>
            </ProjectLogoWrap>
            
        </>
    )
}

export default ProjectCards
