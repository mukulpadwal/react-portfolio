import { useState, useEffect } from "react";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters"
import { Loader } from "react-loaders";

const Blog = () => {

    const [letterClass, setLetterClass] = useState('text-animate');

    const blogArr = "Blogs".split("");

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
    }, []);

    return (
        <div>
            <div className="container blog-page">
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={blogArr}
                            index={15}
                        />
                    </h1>


                </div>
            </div>
            <Loader type="pacman" />
        </div>
    );
}

export default Blog;