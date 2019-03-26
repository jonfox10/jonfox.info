import React from 'react'
import './CynModal.css'
import msba1 from '../images/scoreapp/msba-desktop-1.png'
import msba2 from '../images/scoreapp/msba-desktop-2.png'
import msba3 from '../images/scoreapp/msba-tablet-1.png'
import msba4 from '../images/scoreapp/msba-mobile-1.png'
import msba5 from '../images/scoreapp/msba-mobile-2.png'
import msba6 from '../images/scoreapp/msba-mobile-3.png'


const MyScoreAppModal = (props) => {

    return (
        <>
        {
            props.visableTt ? (

        
            <div className='gallery-body'>
                <h6 className='close-modal' onClick={() => props.setVisableTt(!props.visableTt)}>x</h6>
                <div className='images'>
                    <div className='cynSlides'>
                            <img id='wideimg' className='modal-img'src={msba1} alt='teach tools home page screen shot'/>
                    </div>
                    <div className='cynSlides'>
                            <img id='wideimg' className='modal-img'src={msba2} alt='teach tools home page screen shot'/>
                    </div>
                    <div className='cynSlides'>
                            <img className='modal-img'src={msba3} style={{borderRadius: '3.5vh'}} alt='teach tools game display screen shot'/>
                    </div>
                    
                    <div className='cynSlides'>
                            <img  className='modal-img'src={msba4} style={{borderRadius: '5vh'}} alt='teach tools mobile view screen shot'/>
                    </div>
                    <div className='cynSlides'>
                            <img  className='modal-img'src={msba5} style={{borderRadius: '5vh'}} alt='teach tools mobile view screen shot'/>
                    </div>
                    <div className='cynSlides'>
                            <img  className='modal-img'src={msba6} style={{borderRadius: '5vh'}} alt='teach tools mobile view screen shot'/>
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

export default MyScoreAppModal