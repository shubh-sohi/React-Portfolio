import React from 'react'
import './Home.scss'


function Greetings(){
    return (<section
        className='foo-home'
        style={{backgroundImage: "url(/background.jpg)"}}>
        <Names/>
    </section>);
}

const Names = () => {
    return (
        <article className='wordCarousel'>
            <span>var Shubhkarman_Sohi = </span>
            <div>
                <ul className='flip3'>
                    <li>Full Stack Developer;</li>
                    <li>Software Developer;</li>
                    <li>Data analyst;</li>
                </ul>
            </div>
        </article>);
}

export default Greetings


