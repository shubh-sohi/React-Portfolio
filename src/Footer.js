import React from 'react'
import './Footer.css'

var values = [
    {
        icon: "/icons/email.svg",
        name: "Email",
        link: "mailto:shubhkarman.sohi@usask.ca",
        colour: "#4285F4"
    },
    {
        icon: "/icons/resume.svg",
        name: "Resume",
        link: "/icons/resume.pdf",
        colour: "#DB4437"
    },
    {
        icon: "/icons/linkedin.svg",
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/shubhsohi/",
        colour: "#F4B400"
    },
    {
        icon: "/icons/github.svg",
        name: "GitHub",
        link: "https://github.com/shubh-sohi",
        colour: "#0F9D58"
    }
]
function Footer() {
    return(
        <footer>
            {values.map((v, index)=>{
                return(<Link key={index} {...v}/>)
            })}


        </footer>
    )
}

const Link = ({name, link, icon, colour}) =>{
    return(
        <a href={link} target="_blank" rel="noopener noreferrer" className='foot_style'
           style={{backgroundColor: colour}}>
            <img className='icon-class' src={icon} alt={name}/>
        </a>
    )
};
export default Footer