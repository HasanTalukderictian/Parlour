import React from 'react';
import { faLocation,    } from '@fortawesome/free-solid-svg-icons';
import  { faFacebook, faInstagram, faYoutube, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <div>
            <footer className="footer mx-auto p-10 bg-rose-400 text-base-content">
               <div className='flex'>
               <nav >
                <FontAwesomeIcon icon={faLocation}></FontAwesomeIcon>
                <p>H#000(0th Floor), Road #00</p>
               
                <p>New DOHS, Mohakhali, Dhaka 1212, Bangladesh</p>
                </nav>
               </div>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Terms and Condition</a>
                    <a className="link link-hover">Submit Listing</a>
                </nav>
                <nav>
                    <header className="footer-title">Quick Links</header>
                    <a className="link link-hover">Quick Links</a>
                    <a className="link link-hover">Rentals</a>
                    <a className="link link-hover">Sales</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Our Blog</a>
                </nav>
                <nav>
                    <header className='footer-title'>About Us</header>
                    <p>Lorem ipsum, dolor sit amet consectetur <br />
                     adipisicing elit. Eum, consequatur.</p>
                     <div className='flex'>
                        <FontAwesomeIcon  className='mx-4 text-xl md:text-2xl' icon={faFacebook}/>
                        <FontAwesomeIcon  className='mx-4 text-xl md:text-2xl' icon={faInstagram}/>
                        <FontAwesomeIcon  className='mx-4 text-xl md:text-2xl' icon={faLinkedin}/>
                        <FontAwesomeIcon className='mx-4 text-xl md:text-2xl' icon={faYoutube}/>
                     </div>
                </nav>
                
            </footer>
            <div className='text-center my-5rem'>
                <aside className="items-center grid-flow-col">
                
                    <p>Copyright © 2023 - All right reserved</p>
                </aside>
            </div>
        </div>
    );
};

export default Footer;