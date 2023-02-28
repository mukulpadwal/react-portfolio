import { useEffect, useRef, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from "../AnimatedLetters";
import './index.scss';
import emailjs from '@emailjs/browser';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

function Contact() {
    
    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef();

    const contactStr = "Contact Me";
    const contactArr = contactStr.split("");

    useEffect(function (){
        setTimeout( function () {
            setLetterClass('text-animate-hover');
        }, 3000);
    }, []);

    function sendEmail(e){
        e.preventDefault();

        // For anyone who needs help setting up the emailJS portion:
    // The format should be as follows: sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY') 
    // After creating an account, can find your service ID in the email services tab, your template ID in the email templates tab, and your public key within the Account tab under API Keys.
        emailjs
        .sendForm(
            // 'service_4cv5ipb',
            // 'template_m3quit9',
            // refForm.current,
            // '8RBsHHJ4l6xqzm9uY'
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            refForm.current,
            process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
        .then(
            () => {
                alert('Message Successfully sent!');
                window.location.reload(false);
            },
            () => {
                alert("Failed to send the message, please try again!");
                window.location.reload(false);
            }
        );
    }
    
    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={contactArr}
                            index={15}
                        />
                    </h1>
                    <p>
                    Thank you for taking the time to learn more about me and my work. If you're interested in collaborating, have a project you'd like to discuss, or just want to say hello, please don't hesitate to get in touch! You can reach me by dropping your message below. I'm always excited to hear from like-minded individuals and potential clients, and I look forward to exploring the ways in which we can work together to create something amazing.
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input 
                                        type="text" 
                                        name="name" 
                                        placeholder='Name' 
                                        required/>
                                </li>
                                <li className='half'>
                                    <input 
                                        type='email'
                                        name='email'
                                        placeholder='Email'
                                        required
                                    />
                                </li>
                                <li>
                                    <input 
                                        type='text'
                                        name='subject'
                                        placeholder='Subject'
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea 
                                        placeholder='Message'
                                        name='message'
                                        required
                                    ></textarea>
                                </li>
                                <li>
                                    <input 
                                        type='submit'
                                        className='flat-button'
                                        value="SEND"
                                    />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>

                {/* <div className='info-map'>
                    Mukul Padwal
                    <br />
                    India
                    <br />
                    Garam Sadak, Dalhousie
                    <br />
                    176304
                    <br />
                    <span>mukulpadwal786@gmail.com</span>
                </div> */}

                <div className='map-wrap'>
                    <MapContainer center={[32.535062,75.973719]} zoom={13}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[32.535062,75.973719]}>
                            <Popup>
                                Mukul lives here, you can have a visit!!!
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    );
}

export default Contact;