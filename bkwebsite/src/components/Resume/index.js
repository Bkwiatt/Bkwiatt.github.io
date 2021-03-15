import React from 'react';
import Video from '../../videos/video.mp4'
import { ResumeContainer, ResumeWrapper, ResumeCard, ResumeH2, ResumeH4, ResumeHr, ResumeP, ResumeH5, ResumeA, ResumeImg } from './ResumeElements'

const ResumePage = () => {
    return (
        <>
            <ResumeContainer>
                <ResumeWrapper>
                    <ResumeCard>
                        <ResumeImg src="https://cdn3.iconfinder.com/data/icons/business-round-flat-vol-1-1/36/user_account_profile_avatar_person_male-512.png" alt="avatar" />
                        <ResumeH2>Brandon Kwiatkowski</ResumeH2>
                        <ResumeH4>Programmer</ResumeH4>
                        <ResumeHr/>
                        <ResumeP>Highly motivated software developer constantly chasing improvement with a strong understanding of many core programming
                        concepts as well as a wide-range of languages, concepts and technologies. Supportive, likeable, and a responsible team player
                            who’s dedicated to mastering his craft and never settling for anything less than top level performance.</ResumeP>
                        <ResumeHr/>
                        <ResumeH5>Location</ResumeH5>
                        <ResumeP>Cary, IL</ResumeP>
                        <ResumeH5>Phone</ResumeH5>
                        <ResumeA href="tel:847-951-6388">(847) 951-6388</ResumeA>
                        <ResumeH5>Email</ResumeH5>
                        <ResumeA style={{ color: "black" }} href="mailto: Bkwiat7@gmail.com">Bkwiat7@gmail.com</ResumeA>
                        <ResumeH5>Web</ResumeH5>
                        <ResumeA href= "http://Bkwiatt.github.io">Bkwiatt.github.io</ResumeA>                        
                        <hResumeHr/>
                    </ResumeCard>
                        <ResumeCard>
                        <ResumeH2>Education/Experience</ResumeH2>

                        </ResumeCard>

                </ResumeWrapper>
            </ResumeContainer>
        </>
    )
}

export default ResumePage
