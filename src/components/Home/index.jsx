import { useEffect, useState } from "react";
import Loader from "react-loaders";
import { Link } from "react-router-dom";
import LogoTitle from "../../assets/images/logo-m.png"
import AnimatedLetters from "../AnimatedLetters";
import './index.scss';
import Logo from "./Logo";

function Home() {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameString = "ukul Padwal"
    const nameArray = nameString.split("");
    const jobString = "a Programmer"
    const jobArray = jobString.split("");

    useEffect(function (){
        setTimeout( function () {
            setLetterClass('text-animate-hover');
        }, 4000);
    }, []);

    return (
        <>
        <div className="container home-page">
        <div className="text-zone">
            <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span> 
            <br /> 
            <span className={`${letterClass} _13`}>I</span> 
            <span className={`${letterClass} _14`}>'m</span> 
            <img src={LogoTitle} alt="developer" />
            <AnimatedLetters 
                letterClass={letterClass} 
                strArray={nameArray}
                index={15}
            />
            <br />
            <AnimatedLetters 
                letterClass={letterClass} 
                strArray={jobArray}
                index={26}
            />
            </h1>
            <h2>
                / FullStack Developer /
            </h2>
            <Link to="/contact" className="flat-button">CONTACT ME</Link>
        </div>
        <Logo />
        </div>
        <Loader type="pacman" />
        </>
        
    );
};

export default Home;