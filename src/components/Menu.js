import React from 'react'
import './Menu.css'
import githubLogo from '../images/icon-github.svg';
import linkedinLogo from '../images/icon-linkedin.svg';
import jfwd from '../images/jfwd.svg'



const Menu = () => {


    let homeScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
    }

    


    return(
        <div>
            <div className='menu-container'>
                <div className='name-logo'> 
                    <img src={jfwd} alt='jon fox web developer'/>  
                </div> 
                <div>
                    <ul className='menuList'>  
                        <li onClick={homeScroll} id='home-btn'>HOME</li>
                        <li><a href='#about-page'>ABOUT</a></li>
                        <li><a href='#skills-page'>SKILLS</a></li>
                        <li><a href='#projects-page'>PROJECTS</a></li>
                        <li><a href='#contact-page'>CONTACT</a></li>
                        <li id='menuIcon'>
                        <a      href='https://www.linkedin.com/in/jonfox-info/'
                        target='_blank' rel="noopener noreferrer" ><img src={linkedinLogo} alt='github logo'/></a></li>
                        <li id='menuIcon'>
                        <a 
                        href='https://github.com/jonfox10/'
                        target='_blank' rel="noopener noreferrer" ><img src={githubLogo} alt='github logo'/></a></li>
                        
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Menu