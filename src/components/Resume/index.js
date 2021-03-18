import React from 'react';
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElement'
import Education from './Education';
import Experience from './Experience'
import { ResumeContainer, ResumeWrapper, ResumeCardLeft, ResumeCardRight, ResumeLeftH2, ResumeLeftH4, ResumeLeftHr, ResumeLeftP, ResumeLeftH5, ResumeLeftA, ResumeRightH2, ResumeRightH4, ResumeRightHr, ResumeRightP, ResumeRightH5, ResumeRight, ResumeImg } from './ResumeElements'

const ResumePage = () => {
    return (
        <>
            <ResumeContainer>
                <ResumeWrapper>
                    <ResumeCardLeft>
                        <ResumeImg src="https://icon-library.net/images/avatar-icon-images/avatar-icon-images-4.jpg" alt="avatar" />
                        <ResumeLeftH2>Brandon Kwiatkowski</ResumeLeftH2>
                        <ResumeLeftH4>Programmer</ResumeLeftH4>
                        <ResumeLeftHr />
                        <ResumeLeftP>Highly motivated software developer constantly chasing improvement with a strong understanding of many core programming
                        concepts as well as a wide-range of languages, concepts and technologies. Supportive, likeable, and a responsible team player
                            who’s dedicated to mastering his craft and never settling for anything less than top level performance.</ResumeLeftP>
                        <ResumeLeftHr />
                        <ResumeLeftH5>Location</ResumeLeftH5>
                        <ResumeLeftA href="https://goo.gl/maps/VxVavTjMyUgLZEmk6" target="_blank">Cary, IL</ResumeLeftA>
                        <ResumeLeftH5>Phone</ResumeLeftH5>
                        <ResumeLeftA href="tel:847-951-6388">(847) 951-6388</ResumeLeftA>
                        <ResumeLeftH5>Email</ResumeLeftH5>
                        <ResumeLeftA href="mailto:Bkwiat7@gmail.com">Bkwiat7@gmail.com</ResumeLeftA>
                        <ResumeLeftH5>Web</ResumeLeftH5>
                        <ResumeLeftA href="http://Bkwiatt.github.io" target="_blank">Bkwiatt.github.io</ResumeLeftA>
                        <ResumeLeftHr />
                    </ResumeCardLeft>
                    <ResumeCardRight>
                        <ResumeRightH2>Education</ResumeRightH2>
                        <Education
                            startYear={2015}
                            endYear={2017}
                            schoolName={"Mchenry County College"}
                            schoolDescription={"uspendisse luctus ornare libero quis lobortis. Vivamus mauris justo, ultrices quis ligula in, hendrerit interdum ipsum. Maecenas eleifend ante id est elementum, eget tristique quam porta. Proin pharetra fringilla ante"}
                        />
                        <Education
                                startYear={2018}
                                endYear={2019}
                                schoolName={"University of Wisconsin Whitewater"}
                                schoolDescription={"uspendisse luctus ornare libero quis lobortis. Vivamus mauris justo, ultrices quis ligula in, hendrerit interdum ipsum. Maecenas eleifend ante id est elementum, eget tristique quam porta. Proin pharetra fringilla ante"}
                            />

                            <Education
                                startYear={2019}
                                endYear={2019}
                                schoolName={"The Tech Academy | C# & .NET Bootcamp"}
                                schoolDescription={"uspendisse luctus ornare libero quis lobortis. Vivamus mauris justo, ultrices quis ligula in, hendrerit interdum ipsum. Maecenas eleifend ante id est elementum, eget tristique quam porta. Proin pharetra fringilla ante"}
                            />

                            <Education
                                startYear={2019}
                                endYear={2020}
                                schoolName={"Southern New Hampshire University"}
                                schoolDescription={"uspendisse luctus ornare libero quis lobortis. Vivamus mauris justo, ultrices quis ligula in, hendrerit interdum ipsum. Maecenas eleifend ante id est elementum, eget tristique quam porta. Proin pharetra fringilla ante"}
                            />

                            <ResumeRightHr />

                            <ResumeRightH2>Experience</ResumeRightH2>

                            <Experience
                                startYear={2014}
                                endYear={2015}
                                jobName={"Best Buy"}
                                jobTitle={"Electronics Salesman"}
                                jobDescription={"uspendisse luctus ornare libero quis lobortis. Vivamus mauris justo, ultrices quis ligula in, hendrerit interdum ipsum. Maecenas eleifend ante id est elementum, eget tristique quam porta. Proin pharetra fringilla ante"}
                            />

                            <Experience
                                startYear={2015}
                                endYear={2016}
                                jobName={"HK Mehchanical"}
                                jobTitle={"HVAC Apprentice"}
                                jobDescription={"uspendisse luctus ornare libero quis lobortis. Vivamus mauris justo, ultrices quis ligula in, hendrerit interdum ipsum. Maecenas eleifend ante id est elementum, eget tristique quam porta. Proin pharetra fringilla ante"}
                            />

                            <Experience
                                startYear={2016}
                                endYear={2017}
                                jobName={"Precision Duct Design"}
                                jobTitle={"Sheet Metal Fabricator"}
                                jobDescription={"uspendisse luctus ornare libero quis lobortis. Vivamus mauris justo, ultrices quis ligula in, hendrerit interdum ipsum. Maecenas eleifend ante id est elementum, eget tristique quam porta. Proin pharetra fringilla ante"}
                            />

                            <Experience
                                startYear={2019}
                                endYear={2021}
                                jobName={"Duraflex"}
                                jobTitle={"Warehouse Specialist"}
                                jobDescription={"uspendisse luctus ornare libero quis lobortis. Vivamus mauris justo, ultrices quis ligula in, hendrerit interdum ipsum. Maecenas eleifend ante id est elementum, eget tristique quam porta. Proin pharetra fringilla ante"}
                            />
                            <ResumeRightHr />
                    </ResumeCardRight>
                    <Button to='/'>Home</Button>

                </ResumeWrapper>
            </ResumeContainer>
        </>
    )
}

export default ResumePage