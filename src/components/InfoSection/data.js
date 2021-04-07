import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'


export const homeObjOne = {
    id: "about",
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: "About Me",
    headline: "24 years young",
    description: "I'm a huge fan of all things technology! I love sports, especially baseball. I'm from the Chicagoland area so I'm a big Cubs fan. I'm into fitness, video games, food/cooking and all things technology.",
    buttonLabel: 'Lets go',
    imgStart: false,
    img: Icon1,
    alt: 'Car',
    dark: true,
    primary: true,
    darkText: false,
    buttonLocation: 'skills'
}

export const homeObjTwo = {
    id: "skills",
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: "Skills",
    headline: "Full Stack Developer",
    description: "I'm a developer capable of working on both the front and backend of a project. I carry a wide variety of skills and am always looking to learn more! Click the button below to view my skills.",
    buttonLabel: 'My Skills',
    imgStart: true,
    img: Icon3,
    alt: 'Car',
    dark: false,
    primary: false,
    darkText: true,
    buttonLocation: 'projects'
}

export const homeObjThree = {
    id: "contact",
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: "Contact",
    headline: "Feel free to reach out!",
    number: '(847)-951-6388',
    buttonLabel: 'Email Me',
    imgStart: false,
    img: Icon2,
    alt: 'Car',
    dark: false,
    primary: false,
    darkText: true,
    buttonLocation: 'mailto: bkwiat7@gmail.com'
}