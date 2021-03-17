import React from 'react';
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElement'
import { ResumeContainer, ResumeWrapper, ResumeCard, ResumeH2, ResumeH4, ResumeHr, ResumeP, ResumeH5, ResumeA, ResumeImg } from './ResumeElements'

const ResumePage = () => {
    return (
        <>
            <ResumeContainer>
                <ResumeWrapper>
                    <ResumeCard style ={{backgroundColor: 'lightblue'}}>
                        <ResumeImg src="https://icon-library.net/images/avatar-icon-images/avatar-icon-images-4.jpg" alt="avatar" />
                        <ResumeH2>Brandon Kwiatkowski</ResumeH2>
                        <ResumeH4>Programmer</ResumeH4>
                        <ResumeHr/>
                        <ResumeP>Highly motivated software developer constantly chasing improvement with a strong understanding of many core programming
                        concepts as well as a wide-range of languages, concepts and technologies. Supportive, likeable, and a responsible team player
                            who’s dedicated to mastering his craft and never settling for anything less than top level performance.</ResumeP>
                        <ResumeHr/>
                        <ResumeH5>Location</ResumeH5>
                        <ResumeA href="https://goo.gl/maps/VxVavTjMyUgLZEmk6" target="_blank">Cary, IL</ResumeA>
                        <ResumeH5>Phone</ResumeH5>
                        <ResumeA href="tel:847-951-6388">(847) 951-6388</ResumeA>
                        <ResumeH5>Email</ResumeH5>
                        <ResumeA href="mailto:Bkwiat7@gmail.com">Bkwiat7@gmail.com</ResumeA>
                        <ResumeH5>Web</ResumeH5>
                        <ResumeA href= "http://Bkwiatt.github.io" target="_blank">Bkwiatt.github.io</ResumeA>                        
                        <ResumeHr/>
                    </ResumeCard>
                    <ResumeCard>
                    <ResumeH2>Education</ResumeH2>

                        <h4>hi</h4>

                    </ResumeCard>
                    <Button to='/'>Home</Button>

                </ResumeWrapper>
            </ResumeContainer>
        </>
    )
}

export default ResumePage