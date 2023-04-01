import React, { useEffect, useState } from "react";
import "./index.scss";
import { Loader } from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import { getDocs ,collection } from 'firebase/firestore';
import { db } from '../../firebase';


const Portfolio = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    const portfolioStr = "Portfolio";
    const portfolioArr = portfolioStr.split("");

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
    }, []);

    const [portfolio, setPortfolio] = useState([]);

    useEffect(() => {
        getPortfolio();
    }, []);

    const getPortfolio = async () => {
        const querySnapshot = await getDocs(collection(db, 'portfolio'));
        // console.log(querySnapshot);
        setPortfolio(querySnapshot.docs.map((doc) => doc));
    }

    // portfolio[0]._document.data.value.mapValue.fields;
    // console.log(portfolio);

    function renderPortfolio(portfolio){
        return (
            <div className="images-container">
                {
                    portfolio.map((port, idx) => {
                        {/* const {title : {stringValue : t}, url, description, github, cover} = port._document.data.value.mapValue.fields; */}
                        {/* console.log(port._document.data.value.mapValue.fields.title.stringValue); */}
                        return (
                            <div key={idx} className="image-box">
                                <img
                                    src={port._document.data.value.mapValue.fields.cover.stringValue} 
                                    className="portfolio-image"
                                    alt="portfolio"
                                />
                                <div className="content">
                                    <p className="title">{port._document.data.value.mapValue.fields.title.stringValue}</p>
                                    <h4 className="description">{port._document.data.value.mapValue.fields.description.stringValue}</h4>
                                    <button
                                        className="btn"
                                        onClick={() => window.open(port._document.data.value.mapValue.fields.url.stringValue)}
                                    >
                                        Visit
                                    </button>
                                    <button
                                        className="btn"
                                        onClick={() => window.open(port._document.data.value.mapValue.fields.github.stringValue)}
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
                        index={15}                    
                    />
                </h1>
            </div>
            
            <div>{renderPortfolio(portfolio)}</div>
        </div>
        <Loader type="pacman"/>
    </div>
    );
}

export default Portfolio;