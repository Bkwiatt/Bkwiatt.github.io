import React from 'react';
import Video from '../../videos/video.mp4'
import { ResumeContainer, NameCardWrapper, ResumeName, ResumeJobTitle, ResumeP, ResumeH5, VideoBg, ResumeBg } from './ResumeElements'

const ResumePage = () => {
    return (
        <>
            <ResumeContainer>
                {/* <ResumeBg>
                    <VideoBg autoPlay loop muted playsinline src={Video} type='/video/mp4' />
                </ResumeBg> */}

                <NameCardWrapper>
                    <ResumeName>Brandon Kwiatkowski</ResumeName>
                    <ResumeJobTitle>Programmer</ResumeJobTitle>
                    {/* <ResumeHR /> */}
                    <ResumeP>Highly motivated software developer constantly chasing improvement with a strong understanding of many core programming
                    concepts as well as a wide-range of languages, concepts and technologies. Supportive, likeable, and a responsible team player
                        who’s dedicated to mastering his craft and never settling for anything less than top level performance.</ResumeP>
                    {/* <ResumeHr /> */}
                    <ResumeH5>Location</ResumeH5>
                    <ResumeP>Cary, IL</ResumeP>
                    <ResumeH5>Phone</ResumeH5>
                    <ResumeP>(847)-951-6388</ResumeP>
                    <ResumeH5>Email</ResumeH5>
                    <ResumeP>Bkwiat7@gmail.com</ResumeP>
                    {/* <ResumeHr /> */}
                </NameCardWrapper>
            </ResumeContainer>
        </>
    )
}

export default ResumePage
