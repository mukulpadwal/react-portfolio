import { faCss3, faGithub, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import './About.scss';

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