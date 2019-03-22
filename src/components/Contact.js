import React from 'react';
import './Contact.css'
import iphoneIcon from '../images/round-phone_iphone-24px.svg'
import mailIcon from '../images/round-mail_outline-24px.svg'
import homeIcon from '../images/round-home-24px.svg'
import githubLogo from '../images/icon-github.svg';
import linkedinLogo from '../images/icon-linkedin.svg';

const Contact = () => {
    return(
        <div className='contact-body' id='contact-page'>
                <h2>GET IN TOUCH</h2>
            <div className='contact-content'>
                
                <div className='contact-item'>
                    <img src={iphoneIcon} alt='iphone icon'/> 
                    <a href='tel:1-916-206-8539'>916-206-8539</a>
                </div>
                <div className='contact-item'>
                    <img src={mailIcon} alt='email icon'/> 
                    <a href='mailto:jon@jonfox.info'>jon@jonfox.info</a>
                </div>
                <div className='contact-item'>
                    <img src={linkedinLogo} alt='linked in logo'/> 
                    <a href='https://www.linkedin.com/in/jonfox-info/' target='_blank' rel="noopener noreferrer" >in/jonfox-info</a>  
                </div>
                <div className='contact-item'>
                    <img src={githubLogo} alt='github logo'/> 
                    <a href='https://github.com/jonfox10/' target='_blank' rel="noopener noreferrer" >github.com/jonfox10</a>
                </div>
                <div className='contact-item'>
                    <img src={homeIcon} alt='house icon'/> 
                    <a href='https://www.google.com/search?hl=en&source=hp&ei=IziQXKziDaicjgTCrKeQBA&q=saratoga+springs+utah&oq=saratoga&gs_l=psy-ab.1.0.35i39j0i131j0i131i20i263j0l7.2817.5160..6704...1.0..0.130.774.6j3......0....1..gws-wiz.....6..0i67j0i131i67.vXP87I_tNWs' target='_blank' rel="noopener noreferrer" >Saratoga Springs, Utah</a>
                </div>
            </div>
        </div>

    )
}
export default Contact