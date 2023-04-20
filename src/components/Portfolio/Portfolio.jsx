import React, { useEffect, useState } from "react";
import "./Portfolio.scss";
import { Loader } from "react-loaders";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../api/firebase';


const Portfolio = () => {

    const [letterClass, setLetterClass] = useState('text-animate');

    const portfolioArr = "Portfolio".split("");

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
    }, []);

    // This is the logic to fetch portfolios from firebase
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
    console.log(portfolio);

    return (
        <div>
            <div className="container portfolio-page">
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={portfolioArr}
                            index={15}
                        />
                    </h1>


                    <div className="portfolio-container">
                        {
                            portfolio.map((port, idx) => {
                                {/* const {title : {stringValue : t}, url, description, github, cover} = port._document.data.value.mapValue.fields; */ }
                                {/* console.log(port._document.data.value.mapValue.fields.title.stringValue); */ }
                                return (
                                    <div key={idx} className="portfolio-box">
                                        <img
                                            src={port._document.data.value.mapValue.fields.cover.stringValue}
                                            alt="portfolio"
                                        />

                                        <h2>{port._document.data.value.mapValue.fields.title.stringValue}</h2>
                                        <p>{port._document.data.value.mapValue.fields.description.stringValue}</p>

                                        <div className="btn-container">
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
                </div>
            </div>

            <Loader type="pacman" />
        </div>
    );
}

export default Portfolio;