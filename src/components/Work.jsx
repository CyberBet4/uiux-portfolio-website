import React, { useState, useEffect } from 'react'
import Artwork from '../assets/img/works/slice_artwork.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLink, faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import Prototype from './modal/Prototype'

const Work = ({ title, desc, link, videolink, width, image }) => {

  const [overlay, setoverlay] = useState(false);
  const [overlayDisplay, setoverlayDisplay] = useState("work-overlay hidden flex justify-center")

  useEffect(()=>{
    if(overlay){
      setoverlayDisplay("work-overlay animate__animated animate__fadeInUp animate__faster flex justify-center")
    }else{
      setoverlayDisplay("work-overlay animate__animated animate__fadeOutDown animate__faster flex justify-center")
    }

  })

    
  return (
    <div data-aos="fade-up" data-aos-duration="500" className={width} style={{position : 'relative', overflow : 'hidden'}}>
      
      {
        // For Two works in one row
        width == "col-6" ?
      <div className={overlayDisplay} onMouseLeave={()=>setoverlay(false)}>
          <div>
            <h3 className='uppercase text-center bold mb-3' style={{fontSize: 31.25}}>{title}</h3>
            <p className='text-center mb-3'>{desc}</p>
            <div className="flex justify-center mb-10">
              <p className="category text-center">UX/UI DESIGN</p>
            </div>
            
            {/* links */}
            
            <div className="flex space-between justify-center">
              {
                videolink == "#" && link == "#" || videolink == "" && link == "" ?
                <p className='text-center'>Coming Soon</p>:
                <></>
              }
              {
                link != "#" && link != "" ?
                <a href={link} target="_blank" rel='noreferrer' className="text-center overlay-link mr-3">
                    <FontAwesomeIcon icon={faExternalLink} style={{color : '#fff'}} />
                    <p>View case study</p>
                </a> :
                <></>
              }
                
              {
                videolink != "#" && videolink != "" ?
                <a href={videolink} className="text-center overlay-link">
                    <FontAwesomeIcon icon={faCirclePlay} style={{color : '#fff'}} />
                    <p>Watch Prototype</p>
                </a> :
                <></>
              }
            </div>
          </div>
      </div>
      
      
      : 
      // For one work in one row
      <div className={overlayDisplay} style={{justifyContent : 'space-around'}} onMouseLeave={()=>setoverlay(false)}>
          <div>
            <h3 className='uppercase bold mb-3' style={{fontSize: 31.25}}>{title}</h3>
            <p className='mb-3'>{desc}</p>
            <div className="flex justify-center mb-10">
              <p className="category">UX/UI DESIGN</p>
            </div>
            </div>
            {/* links */}
            
            <div className="flex space-between justify-center">
              {
                videolink == "#" && link == "#" || videolink == "" && link == "" ?
                <p className=''>Coming Soon</p>:
                <></>
              }
              {
                link != "#" && link != "" ?
                <a href={link} target="_blank" rel='noreferrer' className="text-center overlay-link mr-3">
                    <FontAwesomeIcon icon={faExternalLink} style={{color : '#fff'}} />
                    <p>View case study</p>
                </a> :
                <></>
              }
                
              {
                videolink != "#" && videolink != "" ?
                <a href={videolink} className="text-center overlay-link">
                    <FontAwesomeIcon icon={faCirclePlay} style={{color : '#fff'}} />
                    <p>Watch Prototype</p>
                </a> :
                <></>
              }
            </div>
          
      </div>
}

      <img src={image} alt="" 
      onMouseEnter={()=>setoverlay(true)} 
      onClick={()=>setoverlay(true)} 
      
      className='imagework'  />
      
    </div>
  )
}

export default Work