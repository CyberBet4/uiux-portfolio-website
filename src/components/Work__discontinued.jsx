import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Work = ({ link, title, desc, date, color }) =>{
    return(
        <>
              <a href={link} target="_blank" rel="noreferrer">
        <div data-aos="zoom-out-up" data-aos-duration="500" className='mt-20'>
            <div style={{backgroundColor : color}} className="flex flex-wrap justify-between items-center p-10 md:p-20 rounded-3xl work-one mb-10 md:mb-20"  >
                <div className='mb-10 md:mb-0'>
                    <h1 className="big-display bold uppercase">{title}</h1>
                    
                        <h5 className="heading-five text-white">
                        {desc}
                        </h5>
                    
                </div>
                
                <div className='space-y-4'>

                <h3 className="heading-three bold capitalize">{date}</h3>
                    <h5 className="heading-five work-link md:text-right text-black">
                        View Project
                        <FontAwesomeIcon icon={faArrowRight} className='ml-2' />
                    </h5>
                </div>
                

            </div>
        </div>
        </a>
        </>
    )
}

export default Work;

