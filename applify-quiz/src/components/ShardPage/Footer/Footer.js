import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import google from '../../../images/google-play.png';
import store from '../../../images/app-store.png';

const Footer = () => {
    return (
        <div className='bg-secondary text-light mx-auto p-5'>
            <div className='d-flex flex-wrap gap-5 align-items-top justify-content-around m-0 mb-5'>
                <div className='d-flex flex-column gap-4 text-start p-0 gap-2'>
                    <p className='fs-3 m-0'>Appify<span className='text-warning'>Quiz</span></p>
                    <div className='d-flex flex-wrap gap-4 align-items-center justify-content-start'>
                        <FontAwesomeIcon className='facebook-icons p-1 fs-4' icon={faFacebook}></FontAwesomeIcon>
                        <FontAwesomeIcon className='twitter-icons p-1 fs-4' icon={faTwitter}></FontAwesomeIcon>
                        <FontAwesomeIcon className='instagram-icons p-1 fs-4' icon={faInstagram}></FontAwesomeIcon>
                        <FontAwesomeIcon className='youtube-icons fs-4' style={{ padding: '1px'}} icon={faYoutube}></FontAwesomeIcon>
                        <FontAwesomeIcon className='linkedIn-icons fs-4' style={{ padding: '2px'}} icon={faLinkedin}></FontAwesomeIcon>
                    </div>
                    <div className='d-flex flex-wrap gap-2 align-items-center justify-content-start'>
                        <img src={google} alt="Download form Google" />
                        <img src={store} alt="Download form App Store" />
                    </div>
                </div>
                <div className='footer-resources d-flex flex-wrap gap-5 align-items-top justify-content-around text-start'>
                    <div className='d-flex flex-wrap gap-5 align-items-top justify-content-around'>
                        <div>
                            <h4 className='text-uppercase fs-6'>AppifyQuiz Market</h4>
                            <div style={{ fontSize: '14px', color: '#B0C1C4'}}>
                                <p>Terms</p>
                                <p>Licenses</p>
                                <p>Market API</p>
                                <p>Become an affiliate</p>
                            </div>
                        </div>
                        <div>
                            <h4 className='text-uppercase fs-6'>Help</h4>
                            <div style={{ fontSize: '14px', color: '#B0C1C4'}}>
                                <p>Help Center</p>
                                <p>Author</p>
                            </div>
                        </div>
                    </div>
                    <div  className='d-flex flex-wrap gap-5 align-items-top justify-content-around'>
                        <div>
                            <h4 className='text-uppercase fs-6'>Our Community</h4>
                            <div style={{ fontSize: '14px', color: '#B0C1C4'}}>
                                <p>Community</p>
                                <p>Blog</p>
                                <p>Forums</p>
                                <p>Meetups</p>
                            </div>
                        </div>
                        <div>
                            <h4 className='text-uppercase fs-6'>Meet AppifyQuiz</h4>
                            <div style={{ fontSize: '14px', color: '#B0C1C4'}}>
                                <p>About AppifyQuiz</p>
                                <p>Careers</p>
                                <p>Privacy Policy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <p className='m-0 mt-5'>Copyright &copy;{new Date().getFullYear()} | Reserved by Appify<span className='text-warning'>Quiz</span></p>
        </div>
    );
};

export default Footer;