import React from 'react';
import avatar1 from '../../images/avatar1.jpg'
import Education from './Education';
import Experience from './Experience'
import { ResumeContainer, ResumeWrapper, ResumeCardLeft, ResumeCardRight, ResumeLeftH2, ResumeLeftH4, ResumeLeftHr, ResumeLeftP, ResumeLeftH5, ResumeLeftA, ResumeRightH2, ResumeRightHr, ResumeImg, ResumeRoute } from './ResumeElements'

const ResumePage = () => {
    return (
        <>
            <ResumeContainer>
                <ResumeWrapper>
                    <ResumeCardLeft>
                        <ResumeImg src={avatar1} alt="avatar" />
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
                            degree={"Computer Science, B.S"}
                        />
                        <Education
                            startYear={2018}
                            endYear={2019}
                            schoolName={"University of Wisconsin Whitewater"}
                            degree={"Computer Science, B.S"}
                        />

                        <Education
                            startYear={2019}
                            endYear={2019}
                            schoolName={"The Tech Academy | C# & .NET Bootcamp"}
                            degree={"Computer Science Related Studies"}
                        />

                        <Education
                            startYear={2019}
                            endYear={2020}
                            schoolName={"Southern New Hampshire University"}
                            degree={"Computer Science, B.S"}
                        />


                        <ResumeRightHr />

                        <ResumeRightH2>Experience</ResumeRightH2>

                        <Experience
                            startYear={2014}
                            endYear={2015}
                            jobName={"Best Buy"}
                            jobTitle={"Electronics Salesman"}
                            jobDescription={"In charge of selling a wide variety of home appliance and home theater equipment. Was expected to learn many about many different technology related products."}
                        />

                        <Experience
                            startYear={2015}
                            endYear={2016}
                            jobName={"HK Mehchanical"}
                            jobTitle={"HVAC Apprentice"}
                            jobDescription={"Assisted in the installation of HVAC equipment into commercial and residential buildings."}
                        />

                        <Experience
                            startYear={2016}
                            endYear={2017}
                            jobName={"Precision Duct Design"}
                            jobTitle={"Sheet Metal Fabricator"}
                            jobDescription={"Operated and maintained a linux based CNC plasma cutter. Fabricated HVAC Ductwork and fitting parts."}
                        />

                        <Experience
                            startYear={2018}
                            endYear={2018}
                            jobName={"Prosper IT Consulting"}
                            jobTitle={"Web Developer"}
                            jobDescription={"Worked on a web application with a team using Team Foundation Server where we utilized c# and ASP.NET MVC."}
                        />

                        <Experience
                            startYear={2019}
                            endYear={2021}
                            jobName={"Duraflex"}
                            jobTitle={"Warehouse Specialist"}
                            jobDescription={"Completed various different warehouse assignments as well as assuring and tracking quality on high priority aerospace components for companies such as SpaceX, Boeing and more."}
                        />
                        <ResumeRightHr />
                    </ResumeCardRight>
                    <ResumeRoute to='/'>Home</ResumeRoute>

                </ResumeWrapper>
            </ResumeContainer>
        </>
    )
}

export default ResumePage