import React from 'react'
import './Skills.css'

var project_data = [
    {
        title: "Employment platform Web application",
        description: "Designed and built a website using JavaScript, Php, Docker, MySQL, and HTML/CSS. Employment " +
            "platform with complete functionality which include login, signup, posting a job and picking a job. ",
        background: "url(/rock_job.png)",
        github: "#"
    },
    {
        title: "Complete Sudoku interface game",
        description: "A complete Sudoku game made using python with options to solve and generate new game. " +
            "Custom algorithm used to solve the game, and includes options like helper grid, solver and new game " +
            "generator. Implemented using Python, pyGame and Numpy. ",
        background: "url(/sudoku.png)",
        github: "https://github.com/shubh-sohi/Sudoku"
    },
    {
        title: "React web app Portfolio 👩‍💻🧑‍💻",
        description: "React web app, made using standard React components along with HTML and CSS/SCSS. Every section" +
            "has its own component and stylesheet. ",
        background: "url(/this_proj.png)",
        github: "https://github.com/shubh-sohi/React-Portfolio"
    },
    {
        title: "Web app to visualize data",
        description: "Made purely using JavaScript and its D3 library. Data stored in CSV for active Airbnb customers" +
            " is interactively visualized on bar-graphs and on the city's. " +
            "Based on the maps, users can clearly determine prices and popularity of the areas within the city",
        background: "url(/air_bnb.png)",
        github: "https://github.com/shubh-sohi/Calgary_Airbnb_Data_Visualization"
    },
    {
        title: "Stock price predictor using Monte Carlo analysis",
        description: "A simple python desktop app the uses Matplitlib, Numpy, tkinter and yahoo finance API. Using the " +
            "user input of stock name and number of stimulation, prediction of the range of the stock is plotted",
        background: "url(/monte_carlo.png)",
        github: "#"
    },
    {
        title: "Android app to virtualize graphs",
        description: "Android app developed using Java that helps in making virtual graphs from pictures of graphs." +
            "From an graph image, virtual points and axis are mapped to produce a virtual map.",
        background: "url(/chart.png)",
        github: "https://github.com/shubh-sohi/ChartExtractor"
    }
]
    function Skills() {
        return (
            <section>
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