import React from 'react';
import Video from '../../videos/video.mp4'
import { ResumeContainer, ResumeWrapper, ResumeCard } from './ResumeElements'

const ResumePage = () => {
    return (
        <>
            <ResumeContainer>
                <ResumeWrapper>
                    <ResumeCard>
                        <h2>Brandon Kwiatkowski</h2>
                        <h4>Programmer</h4>
                        <hr/>
                        <p>Highly motivated software developer constantly chasing improvement with a strong understanding of many core programming
                        concepts as well as a wide-range of languages, concepts and technologies. Supportive, likeable, and a responsible team player
                            who’s dedicated to mastering his craft and never settling for anything less than top level performance.</p>
                        <hr/>
                        <h5>Location</h5>
                        <p>Cary, IL</p>
                        <h5>Phone</h5>
                        <a href="tel:847-951-6388">(847) 951-6388</a>
                        <h5>Email</h5>
                        <a style={{ color: "black" }} href="mailto: Bkwiat7@gmail.com">Bkwiat7@gmail.com</a>
                        <h5>Web</h5>
                        <a href= "http://Bkwiatt.github.io">Bkwiatt.github.io</a>                        
                        <hr/>
                    </ResumeCard>
                        <ResumeCard>
                        <h2>Education/Experience</h2>

                        </ResumeCard>

                </ResumeWrapper>
            </ResumeContainer>
        </>
    )
}

export default ResumePage
