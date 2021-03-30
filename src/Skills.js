import React from 'react'
import './Skills.css'
import {project_data} from './ProjectData'

    function Skills() {
        return (
            <section style={{marginBottom:'20px'}}>
                <h1 className='title-skills'>println(Projects);</h1>
                <div className='project-container'>
                    {project_data.map((proj, index) =>{
                        return( <Project key={index} {...proj}/>)
                    })}
                </div>
            </section>
        )
    }

const Project = ({title, description, background, github}) => {
    return (
        <a href={github} target="_blank" rel="noopener noreferrer">
            <div className='project' style={{backgroundImage: background}}>
                <h1>{title}</h1>
                <h3>{description}</h3>
            </div>
        </a>
    )
};

export default Skills