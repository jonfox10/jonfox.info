import React from 'react'
import './CynModal.css'
import ttImage1 from '../images/teach-tools/Teach-Tools game demo.mp4'
import ttImage2 from '../images/teach-tools/Teach-Tools desktop home page.png'
import ttImage3 from '../images/teach-tools/Teach-Tools desktop game display.png'
import ttImage5 from '../images/teach-tools/Teach-Tools mobile home page.png'
import ttImage6 from '../images/teach-tools/Teach-Tools tablet game control.png'


const TToolsModal = (props) => {

    return (
        <>
        {
            props.visableTt ? (

        
            <div className='gallery-body'>
                <h6 className='close-modal' onClick={() => props.setVisableTt(!props.visableTt)}>x</h6>
                <div className='images'>
                    <div className='cynSlides'>
                            <video id='wideimg' className='modal-vid' controls autoplay loop src={ttImage1}>
                            </video>
                    </div>
                    <div className='cynSlides'>
                            <img id='wideimg' className='modal-img'src={ttImage2} alt='teach tools home page screen shot'/>
                    </div>
                    <div className='cynSlides'>
                            <img id='wideimg' className='modal-img'src={ttImage3} alt='teach tools game display screen shot'/>
                    </div>
                    
                    <div className='cynSlides'>
                            <img  className='modal-img'src={ttImage5} style={{borderRadius: '5vh'}} alt='teach tools mobile view screen shot'/>
                    </div>
                    <div className='cynSlides'>
                            <img  className='modal-img'src={ttImage6} style={{borderRadius: '3.5vh'}} alt='teach tools mobile view screen shot'/>
                    </div>
                </div>    
            </div>

            ) : (
                <div/>
            )
        }
        </>
    )
}

export default TToolsModal