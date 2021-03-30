import React from 'react'
import './About.css'

function About() {
    return (
        <section className='container'
                 style={{backgroundImage: "url(/about-background.jpg)"}}>
            <Left/>
            <Right/>
        </section>
    );
}

const Left = () => {
    return (
        <div className='about-header'>
            <div className='float-img'
                 style={{backgroundImage: "url(/me.jpeg)"}}>
            </div>
            <h1 className='about-title'>echo $ABOUT</h1>
        </div>);
}

const Right = () => {
    return (
        <article className='disc-right'>
            <h3 className='context-about'><h2 className='right-heading'>Greetings, my name is Shubh </h2>
                I am passionate about designing and building excellent software. Learning how to write and engineer
                code has been a journey of a lifetime and I aim to always keep learning. To write software
                that one day is able to make life easier for someone or is contributing towards a sustainable
                future will be a dream come true.
            </h3>
        </article>)
}
export default About