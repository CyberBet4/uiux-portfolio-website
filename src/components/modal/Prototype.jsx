import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { toggleOverlay } from '../../redux/overlay'
import { useDispatch } from "react-redux";



const Prototype = ({ show = false, src="" }) => {
    
    const dispatch = useDispatch(); //dispatch is used to call a function from a state manager (React Redux Toolkit)

  return (
    <>
    {
        show ?
        <div data-aos="zoom-in-up" data-aos-duration="500"  className='video-overlay'>
            <div>
                <div className="close-btn-container mb-3" style={{display : 'flex', justifyContent : 'flex-end'}}>
                    <button className='close-btn' style={{zIndex : 2000, color : 'white'}}
                    onClick={()=>dispatch(toggleOverlay())}
                    >Close
                    <FontAwesomeIcon className='ml-2' icon={faClose}/>
                    </button>
                </div>

                <iframe width="660" height="415" className='prototype-vid' src={src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen ></iframe>
            </div>
        </div>

        : <></>
    }
        
    </>
    
  )
}

export default Prototype