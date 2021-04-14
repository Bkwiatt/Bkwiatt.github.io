import React from 'react'
import { PWrapper, ContentContainer, SkillLogo, ProgressController } from './ProjectBarElements'
import img1 from '../../images/c.png'

const ProgressBar =  () => {

    return (
        <>
            <ContentContainer>
                <SkillLogo  src={img1} />
                <PWrapper>
                    <ProgressController />
                </PWrapper>
            </ContentContainer>


        </>
    )
}

export default ProgressBar
