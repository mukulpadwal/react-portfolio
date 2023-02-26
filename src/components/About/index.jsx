import { faAndroid, faCss3, faGitAlt, faGithub, faGitSquare, faHtml5, faJava, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

function About(){

    const [letterClass, setLetterClass] = useState('text-animate');
    const aboutStr = "About Me";
    const aboutArr = aboutStr.split("");

    useEffect(function (){
        setTimeout( function () {
            setLetterClass('text-animate-hover');
        }, 3000);
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
                I have always been fascinated by technology and how it can solve real-world problems. This passion led me to pursue a degree in computer science, and I'm excited to be starting my career in software engineering. I enjoy the challenge of writing code and finding elegant solutions to complex problems.
                </p>
                <p>
                I have experience working with languages like Python, Java, and JavaScript, and I'm familiar with web development frameworks like React. I also have a good understanding of database management systems like MySQL and MongoDB.
                </p>
                <p>
                I'm a detail-oriented person with strong problem-solving skills, and I enjoy working in a collaborative environment where I can learn from my peers
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