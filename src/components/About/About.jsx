import { faCss3, faGithub, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import './About.scss';
import Typewriter from "typewriter-effect";

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    
    const aboutArr = "About Me".split("");

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
    }, []);

    return (
        <div>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={aboutArr}
                            index={15}
                        />
                    </h1>

                    <p id='about-content'>
                        {/* <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .changeDelay(15)
                                    .typeString(`Hello, my name is Mukul Padwal, and I am a fresher software engineer with experience in the <strong>MERN Stack</strong>, <strong>Java</strong>, <strong>Python</strong>, <strong>MySQL</strong>, <strong>Linux</strong>.<br /><br />`)
                                    .typeString(`I have always been fascinated by technology and how it can solve real-world problems. This passion led me to pursue a degree in computer science, and I'm excited to be starting my career in software engineering. I enjoy the challenge of writing code and finding elegant solutions to complex problems.<br /><br />`)
                                    .typeString(`I am skilled in developing <strong>web applications</strong>, creating <strong>responsive designs</strong>, and implementing <strong>RESTful APIs</strong>. I also possess a good understanding of database management and have experience working with <strong>SQL</strong> and <strong>NoSQL</strong> databases. I am a quick learner and thrive in team environments. I am excited to utilize my skills and contribute to the success of any team that I am a part of.`)
                                    .start()
                            }}
                        /> */}

                        <p>My name is Mukul Padwal and I'm a fresher software engineer.</p>
                        <p>Experienced in <strong>MERN Stack</strong>, <strong>Java</strong>, <strong>Python</strong>, <strong>MySQL</strong>, and <strong>Linux.</strong></p>
                        <p>Holds a Degree in <strong>Computer Science</strong>.</p>
                        <p>Skilled in developing <strong>web applications</strong> and creating <strong>responsive designs</strong>.</p>
                        <p>Experienced in implementing <strong>RESTful APIs</strong>.</p>
                        <p>Possesses a good understanding of database management, including <strong>SQL</strong> and <strong>NoSQL</strong> databases.</p>
                        <p>Thrives in team environments and is a quick learner.</p>
                        <p>Excited to contribute to the success of any team I'm a part of.</p>

                    </p>
                </div>

                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faDatabase} color="#DD0031" />
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faGithub} color="#110d33" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type='pacman' />
        </div>
    );
}

export default About;