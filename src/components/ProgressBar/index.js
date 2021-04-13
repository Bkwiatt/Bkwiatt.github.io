import React from 'react'
import img1 from '../../images/c.png'
import { PWrapper, ContentContainer, SkillLogo, ProgressController } from './ProjectBarElements'

const ProgressBar = () => {
    return (
        <>
            <ContentContainer>
                <SkillLogo src={img1} alt="apple" />
                <PWrapper>
                    <ProgressController />
                </PWrapper>
            </ContentContainer>


        </>
    )
}

export default ProgressBar
