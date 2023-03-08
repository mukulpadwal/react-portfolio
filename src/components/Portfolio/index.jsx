import React, { useEffect, useState } from "react";
import "./index.scss";
import { Loader } from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import portfolioData from "../../data/portfolio.json"

const Portfolio = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    
    const portfolioStr = "Portfolio";
    const portfolioArr = portfolioStr.split("");

    useEffect(function (){
        setTimeout( function () {
            setLetterClass('text-animate-hover');
        }, 3000);
    }, []);

    function renderPortfolio(portfolio){
        return (
            <div className="images-container">
                {
                    portfolio.map((port, idx) => {
                        return (
                            <div key={idx} className="image-box">
                                <img
                                    src={port.cover} 
                                    className="portfolio-image"
                                    alt="portfolio"
                                />
                                <div className="content">
                                    <p className="title">{port.title}</p>
                                    <h4 className="description">{port.description}</h4>
                                    <button
                                        className="btn"
                                        onClick={() => window.open(port.url)}
                                    >
                                        Visit
                                    </button>
                                    <button
                                        className="btn"
                                        onClick={() => window.open(port.github)}
                                    >
                                        Github Repo
                                    </button>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        );
    }

    return (
    <div>
        <div className="container portfolio-page">
            <div>
                <h1 className='page-title'>
                    <AnimatedLetters 
                        letterClass={letterClass}  
                        strArray={portfolioArr}
                        idx={15}                    
                    />
                </h1>
            </div>
            
            <div>{renderPortfolio(portfolioData.portfolio)}</div>
        </div>
        <Loader type="pacman"/>
    </div>
    );
}

export default Portfolio;