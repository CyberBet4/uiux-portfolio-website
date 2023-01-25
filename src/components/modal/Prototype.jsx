import React from 'react'

const Prototype = ({ show = false, src="" }) => {
    const [toggle, toggleoverlay] = React.useState(false)

  return (
    <>
    {
        show ?
        <div data-aos="zoom-in-up" data-aos-duration="500"  className='video-overlay'>
            <iframe width="560" height="315" src="https://youtu.be/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
            <p>
                {/* Prototype */}
                
            </p>
        </div>

        : <></>

    }
        
    </>
    
  )
}

export default Prototype