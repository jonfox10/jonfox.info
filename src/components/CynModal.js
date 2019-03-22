import React from 'react'
import './CynModal.css'
import cynImage1 from '../images/cyn-project/CYN desktop home page.png'
import cynImage2 from '../images/cyn-project/CYN desktop HS event page.png'
import cynImage3 from '../images/cyn-project/CYN desktop news page.png'
import cynImage4 from '../images/cyn-project/CYN desktop rsvp page.png'
import cynImage5 from '../images/cyn-project/CYN mobile home page.png'
import cynImage6 from '../images/cyn-project/CYN mobile HS event page.png'
import cynImage7 from '../images/cyn-project/CYN mobile rsvp page.png'
import cynImage8 from '../images/cyn-project/CYN tablet home page.png'
import cynImage9 from '../images/cyn-project/CYN tablet rsvp page.png'


const CynModal = (props) => {


    return (
        <div>
        {
            props.visableCyn ? (

                <div className='gallery-body'>

                    <div className='images'>
                        <div className='cynSlides'>
                                <img className='modal-img'src={cynImage1} alt='teach tools desktop view screen shot'/>
                        </div>
                        <div className='cynSlides'>
                                <img className='modal-img'src={cynImage2} alt='teach tools desktop view screen shot'/>
                        </div>
                        <div className='cynSlides'>
                                <img className='modal-img'src={cynImage3} alt='teach tools desktop view screen shot'/>
                        </div>
                        <div className='cynSlides'>
                                <img className='modal-img'src={cynImage4} alt='teach tools desktop view screen shot'/>
                        </div>
                        <div className='cynSlides'>
                                <img className='modal-img'src={cynImage5} style={{borderRadius: '5vh'}} alt='cyn mobile view screen shot'/>
                        </div>
                        <div className='cynSlides'>
                                <img className='modal-img'src={cynImage6} style={{borderRadius: '5vh'}} alt='cyn mobile view screen shot'/>
                        </div>
                        <div className='cynSlides'>
                                <img className='modal-img'src={cynImage7}style={{borderRadius: '5vh'}} alt='cyn mobile view screen shot'/>
                        </div>
                        <div className='cynSlides'>
                                <img className='modal-img'src={cynImage8} style={{borderRadius: '3.5vh'}} alt='cyn mobile view screen shot'/>
                        </div>
                        <div className='cynSlides'>
                                <img className='modal-img'src={cynImage9} style={{borderRadius: '3.5vh'}} alt='cyn mobile view screen shot'/>
                        </div>
                    </div>
                    <h6 className='close-modal' onClick={() => props.setVisableCyn(!props.visableCyn)}>x</h6>
                </div>  

            ) : (
                <div/>
            )
        }
        </div>

    )
}

export default CynModal