import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import LogoM from "../../assets/images/logo-m.png";
import LogoSubtitle from "../../assets/images/logo_sub.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faHashnode, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Stack } from "@mui/material";

function Sidebar() {
    return (
        <Stack
            direction="row"
            sx={{
                overflowY: "auto", 
                height: {sx : "auto", md: "95%"},
                flexDirection: {md: "column"}
            }}
        >
            <div className="nav-bar">

                <Link className="logo" to="/">
                    <img src={LogoM} alt="logo" />
                    <img className="sub-logo" src={LogoSubtitle} alt="mukul" />
                </Link>
                <nav>
                    <NavLink
                        exact="true"
                        activeclassname="active"
                        to="/"
                    >
                        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                    </NavLink>

                    <NavLink
                        exact="true"
                        activeclassname="active"
                        className="about-link"
                        to="/about"
                    >
                        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                    </NavLink>

                    <NavLink
                        exact="true"
                        className="contact-link"
                        activeclassname="active"
                        to="/contact"
                    >
                        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                    </NavLink>
                </nav>
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

                    {/* <li>
            <a 
                target="_blank" 
                rel='noreferrer' 
                href='https://www.instagram.com/mukulpadwal/'
            >
                <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
            </a>
        </li> */}
                </ul>
            </div>
        </Stack>
    );
}

export default Sidebar;