import { useState, useEffect } from "react";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters"
import { Loader } from "react-loaders";
import { gql, GET_USER_ARTICLES } from "../../api/hashnode";
import "./Blog.scss";

const Blog = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    const [fetchedBlogs, setFetchedBlogs] = useState([]);

    const blogArr = "Blogs".split("");

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
    }, []);

    useEffect(() => {

        gql(GET_USER_ARTICLES, { page: 0 })
            .then((response) => setFetchedBlogs(response.data.user.publication.posts))
            .catch((error) => console.log(error));


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

                    <div className="blog-container">
                        {
                            fetchedBlogs.map((blog, idx) => {
                                return (
                                    <div className="blog" key={idx}>
                                        <img alt="blog-img" src={blog.coverImage} />
                                        <h2>{blog.title}</h2>
                                        <p>{blog.brief} <a href={`https://mukulpadwal.hashnode.dev/${blog.slug}`}>Read More</a></p>
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

export default Blog;