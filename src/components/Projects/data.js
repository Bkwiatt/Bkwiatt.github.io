import iosimg1 from '../../images/ios-fructus.png'
import iosimg2 from '../../images/ios-avocado.jpeg'
import cSharp1 from '../../images/pirateGamesCard.png'
import sql1 from '../../images/booksCard.png'
import react1 from '../../images/reactBasicCard.png'

//Card Type imports
import cLogo from '../../images/c.png'
import appleLogo from '../../images/apple_logo_black.svg'
import dbLogo from '../../images/db.png'
import reactLogo from '../../images/react_logo.png'


// iOS Card Data
/////////////////////////////////////////////////////////////////

export const iOSCard1 = {
    img: iosimg1,
    projectName: 'iOS Fructus App',
    projectTypeLogo: appleLogo,
    description: 'iOS project created around different fruits with the intention of learning beautiful UI design and best practices using Swift',
    githubLink: "//www.github.com/Bkwiatt/Fructus-iOS-App"
}

export const iOSCard2 = {
    img: iosimg2,
    projectTypeLogo: appleLogo,
    projectName: 'iOS Avocados App',
    description: 'iOS project created around avocados with the intention of learning beautiful UI design and best practices using Swift. This project also used data to populate content fields. ',
    githubLink: "//www.github.com/Bkwiatt/Avocados-iOS-App"
}


// C# Card Data
/////////////////////////////////////////////////////////////////
export const cSharpCard1 = {
    img: cSharp1,
    projectName: 'C# Pirate Games',
    projectTypeLogo: cLogo,
    description: "C# and SQL database WinForms app created for popular Twitch Streamer 'CDNThe3rd' to help enhance the video game, Sea of Thieves",
    githubLink: "//www.github.com/Bkwiatt/Window-Forms-Applicaitons/tree/master/ThePirateGames"
}


// SQL Card Data
/////////////////////////////////////////////////////////////////
export const sqlCard1 = {
    img: sql1,
    projectName: 'Library Database Management System',
    projectTypeLogo: dbLogo,
    description: "SQL project created around keeping data for a library with multiple branches and locations",
    githubLink: "//www.github.com/Bkwiatt/SQL-Coding-Projects/blob/master/Library%20Management%20System%20Database"
}

// React Card Data
/////////////////////////////////////////////////////////////////
export const reactCard1 = {
    img: react1,
    projectName: 'Personal Portfolio Website',
    projectTypeLogo: reactLogo,
    description: "THIS website was created using React and utilized many aspects of ReactJS",
    githubLink: "//www.github.com/Bkwiatt/Bkwiatt.github.io"
}