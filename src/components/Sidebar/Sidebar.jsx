import { Link, NavLink } from "react-router-dom";
import "./Sidebar.scss";
import LogoM from "../../assets/images/logo-m.png";
import LogoSubtitle from "../../assets/images/logo_sub.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose, faEnvelope, faBlog, faHome, faSuitcase, faUser } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faHashnode, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

const Sidebar = () => {

    // This hook will decide if to show the hamburger icon or not on different devices
    const [showNav, setShowNav] = useState(false);

    return (
        <div className="nav-bar">

            {/* Top icon and Name */}
            <Link className="logo" to="/">
                <img src={LogoM} alt="logo" />
                <img className="sub-logo" src={LogoSubtitle} alt="mukul" />
            </Link>

            {/* Main nav bar */}
            <nav className={showNav ? "mobile-show" : ""}>
                <NavLink
                    onClick={() => setShowNav(false)}
                    exact="true"
                    className="home-link"
                    activeclassname="active"
                    to="/"
                >
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>

                <NavLink
                    onClick={() => setShowNav(false)}
                    exact="true"
                    activeclassname="active"
                    className="about-link"
                    to="/about"
                >
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>

                <NavLink
                    onClick={() => setShowNav(false)}
                    exact="true"
                    className="portfolio-link"
                    activeclassname="active"
                    to="/portfolio"
                >
                    <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
                </NavLink>

                <NavLink
                    onClick={() => setShowNav(false)}
                    exact="true"
                    className="blog-link"
                    activeclassname="active"
                    to="/blog"
                >
                    <FontAwesomeIcon icon={faBlog} color="#4d4d4e" />
                </NavLink>

                <NavLink
                    onClick={() => setShowNav(false)}
                    exact="true"
                    className="contact-link"
                    activeclassname="active"
                    to="/contact"
                >
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>

                <FontAwesomeIcon
                    onClick={() => setShowNav(false)}
                    icon={faClose}
                    color="#ffd700"
                    size="3x"
                    className="close-icon"
                />
            </nav>

            {/* Social Media Icons */}
            <ul>
                <li>
                    <a
                        target="_blank"
                        rel='noreferrer'
                        href='https://www.linkedin.com/in/mukulpadwal/'
                    >
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                    </a>
                </li>

                <li>
                    <a
                        target="_blank"
                        rel='noreferrer'
                        href='https://www.github.com/mukulpadwal/'
                    >
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                    </a>
                </li>

                <li>
                    <a
                        target="_blank"
                        rel='noreferrer'
                        href='https://www.twitter.com/padwalmukul/'
                    >
                        <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
                    </a>
                </li>

                <li>
                    <a
                        target="_blank"
                        rel='noreferrer'
                        href='https://mukulpadwal.hashnode.dev/'
                    >
                        <FontAwesomeIcon icon={faHashnode} color="#4d4d4e" />
                    </a>
                </li>
            </ul>

            {/* If switched to smaller devices this hamburger icon gets activated */}
            <FontAwesomeIcon
                onClick={() => setShowNav(true)}
                icon={faBars}
                color="#ffd700"
                size="3x"
                className="hamburger-icon"
            />

        </div>
    );
}

export default Sidebar;