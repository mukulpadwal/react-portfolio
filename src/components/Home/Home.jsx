import { useEffect, useState } from "react";
import Loader from "react-loaders";
import { Link } from "react-router-dom";
import LogoTitle from "../../assets/images/logo-m.png"
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import './Home.scss';
import Logo from "./Logo/Logo";

const Home = () => {

    // This state will help us animate our lettera
    const [letterClass, setLetterClass] = useState('text-animate');

    // Here we are creating array to display the name
    const nameArray = "ukul Padwal".split("");
    const jobArray = "a Programmer".split("");

    // This is used to set our letterclass animation as the page loads first time
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
    }, []);

    return (
        <div>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br />
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>
                        <img src={LogoTitle} alt="developer" style={{ display: "inline-block", height: "6rem", position: "relative", top: "1rem", width: "5.5rem" }} />
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
                        Software Engineer / FullStack Developer / Open Source
                    </h2>
                    <Link to="/portfolio" className="flat-button">PORTFOLIO</Link>
                    <Link to="/contact" className="flat-button">CONTACT ME</Link>
                </div>
                <Logo />
            </div>
            <Loader type="pacman" />
        </div>
    );
};

export default Home;