import { faCss3, faGithub, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    const aboutStr = "About Me";
    const aboutArr = aboutStr.split("");

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
                            strArray = {aboutArr}
                            index = {15}
                        />
                    </h1>
                    <p>
                    Hello, my name is Mukul Padwal, and I am a fresher software engineer with experience in the MERN Stack, Java, Python, MySQL, Linux.</p>

                    <p>
                    I have always been fascinated by technology and how it can solve real-world problems. This passion led me to pursue a degree in computer science, and I'm excited to be starting my career in software engineering. I enjoy the challenge of writing code and finding elegant solutions to complex problems.
                    </p>
                    
                    <p> I am a self-motivated and detail-oriented individual who is passionate about coding and enjoys learning new things. I have a strong foundation in programming concepts and have completed several projects using these technologies. I am skilled in developing web applications, creating responsive designs, and implementing RESTful APIs. I also possess a good understanding of database management and have experience working with SQL and NoSQL databases. I am a quick learner and thrive in team environments. I am excited to utilize my skills and contribute to the success of any team that I am a part of.
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
            <Loader type='pacman'/>
        </div>
    );
}

export default About;