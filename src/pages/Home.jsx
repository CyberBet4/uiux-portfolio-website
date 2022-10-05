import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faArrowTrendUp } from '@fortawesome/free-solid-svg-icons'
import Marquee from "react-fast-marquee";

const Home = () => {
  return (
    <div className=' dark:text-white dark:bg-black overflow-hidden'>
        <div className="p-4 grid grid-flow-col ">
            
            {/* Intro */}
            <div>
                <h4 className="animate__animated animate__fadeInUp animate__faster text-gray semi-bold heading-four">
                    Hi There! 👋🏽
                </h4>
            
                <h2 style={{animationDelay : '0.2s'}}  className='heading-one animate__animated animate__fadeIn '>
                    I am Triumph Anazia, a <span className='bg-red text-white '>UI/UX</span>  Designer based in Nigeria that enjoys designing user-centric mobile and web applications.
                </h2>
                
                {/* socials */}
                <div className="flex mt-6 md:mt-12 space-x-2 md:space-x-4">
                    {/* linkedin */}
                    <div style={{animationDelay : '0.3s'}} className="social linkedin heading-one animate__animated animate__fadeInUp animate__faster">
                        <a href="https://www.linkedin.com/in/triumph-anazia-912357183/" target="_blank" rel="noreferrer">
                            <svg width="93" className='social ' height="93" viewBox="0 0 93 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="46.5" cy="46.5" r="46.5" fill="#333333"/>
                            <g clip-path="url(#clip0_10_2198)">
                            <path d="M31 35.485C31 34.4748 31.3535 33.6415 32.0606 32.985C32.7677 32.3284 33.6869 32.0001 34.8182 32.0001C35.9293 32.0001 36.8283 32.3233 37.5151 32.9698C38.2222 33.6365 38.5757 34.5051 38.5757 35.5759C38.5757 36.5456 38.2323 37.3536 37.5454 38.0001C36.8384 38.6668 35.9091 39.0001 34.7576 39.0001H34.7273C33.6161 39.0001 32.7172 38.6668 32.0303 38.0001C31.3434 37.3334 31 36.4951 31 35.485ZM31.3939 62.0001V41.7577H38.1212V62.0001H31.3939ZM41.8485 62.0001H48.5757V50.6971C48.5757 49.99 48.6565 49.4445 48.8182 49.0607C49.101 48.3738 49.5303 47.793 50.106 47.3183C50.6818 46.8435 51.404 46.6062 52.2727 46.6062C54.5353 46.6062 55.6666 48.1314 55.6666 51.1819V62.0001H62.3939V50.394C62.3939 47.4041 61.6868 45.1365 60.2727 43.591C58.8585 42.0456 56.9899 41.2728 54.6666 41.2728C52.0606 41.2728 50.0303 42.394 48.5757 44.6365V44.6971H48.5454L48.5757 44.6365V41.7577H41.8485C41.8889 42.4041 41.9091 44.4142 41.9091 47.788C41.9091 51.1617 41.8889 55.8991 41.8485 62.0001Z" fill="black"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_10_2198">
                            <rect width="31.3939" height="30" fill="white" transform="translate(31 32)"/>
                            </clipPath>
                            </defs>
                            </svg>
                        </a>
                    </div>

                    {/* twitter */}
                    <div style={{animationDelay : '0.4s'}} className="social twitter  animate__animated animate__fadeInUp animate__faster">
                        <a href="https://twitter.com/triumph_anazia" target="_blank" rel="noreferrer">
                            <svg width="93" height="93" viewBox="0 0 93 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="46.5" cy="46.5" r="46.5" fill="#333333"/>
                                <path d="M62 37.7C60.8725 38.1892 59.6801 38.5125 58.46 38.66C59.7473 37.891 60.7119 36.6812 61.175 35.255C59.9653 35.9751 58.6411 36.4825 57.26 36.755C56.3368 35.7539 55.1075 35.0875 53.7647 34.8603C52.422 34.6331 51.0418 34.858 49.8407 35.4998C48.6396 36.1415 47.6854 37.1638 47.1279 38.4063C46.5703 39.6487 46.4409 41.0411 46.76 42.365C44.3141 42.2413 41.9217 41.6044 39.738 40.4958C37.5543 39.3872 35.6283 37.8315 34.085 35.93C33.5437 36.8753 33.2593 37.9457 33.26 39.035C33.2581 40.0466 33.5063 41.0429 33.9826 41.9354C34.4589 42.8278 35.1485 43.5886 35.99 44.15C35.012 44.1234 34.0548 43.861 33.2 43.385V43.46C33.2073 44.8773 33.704 46.2486 34.606 47.342C35.508 48.4353 36.7599 49.1835 38.15 49.46C37.6149 49.6229 37.0593 49.7087 36.5 49.715C36.1128 49.7105 35.7266 49.6754 35.345 49.61C35.7409 50.8292 36.5069 51.8947 37.5366 52.6582C38.5663 53.4218 39.8084 53.8453 41.09 53.87C38.9258 55.5729 36.2538 56.5023 33.5 56.51C32.9986 56.5117 32.4976 56.4816 32 56.42C34.8116 58.2354 38.0882 59.1991 41.435 59.195C43.7445 59.219 46.0357 58.7825 48.1747 57.9111C50.3136 57.0397 52.2575 55.7508 53.8928 54.1198C55.5281 52.4887 56.8219 50.5481 57.6988 48.4114C58.5757 46.2746 59.0181 43.9846 59 41.675C59 41.42 59 41.15 59 40.88C60.177 40.0022 61.1922 38.9261 62 37.7Z" fill="black"/>
                            </svg>
                        </a>
                    </div>

                    {/* behance */}
                    <div style={{animationDelay : '0.5s'}} className="social behance animate__animated animate__fadeInUp animate__faster">
                        <a href="https://www.behance.net/triumphanazia" target="_blank" rel="noreferrer">
                        <svg width="93" height="93" viewBox="0 0 93 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="46.5" cy="46.5" r="46.5" fill="#333333"/>
                        <path d="M59.105 38.525H51.5V40.64H59.135L59.105 38.525ZM57.5 53.075C56.9231 53.4573 56.2418 53.6512 55.55 53.63C55.0921 53.6777 54.6293 53.6304 54.1905 53.4911C53.7517 53.3517 53.3464 53.1232 53 52.82C52.3595 52.0938 52.0261 51.1473 52.07 50.18H62C62.0716 49.1728 61.9855 48.1606 61.745 47.18C61.5123 46.247 61.1051 45.3665 60.545 44.585C59.9812 43.8269 59.253 43.2064 58.415 42.77C57.4827 42.3103 56.4544 42.0789 55.415 42.095C54.4375 42.0878 53.4684 42.2765 52.565 42.65C51.7378 42.9987 50.9882 43.5086 50.36 44.15C49.7336 44.8042 49.2485 45.5803 48.935 46.43C48.5986 47.3473 48.4309 48.318 48.44 49.295C48.4246 50.2859 48.5871 51.2715 48.92 52.205C49.2027 53.0503 49.6515 53.8306 50.24 54.5C50.8489 55.1572 51.5972 55.6698 52.43 56C53.3587 56.3538 54.3464 56.5269 55.34 56.51C56.7341 56.5535 58.1106 56.1885 59.3 55.46C60.5014 54.6063 61.3663 53.3593 61.745 51.935H58.43C58.2525 52.4062 57.926 52.8065 57.5 53.075ZM52.355 46.895C52.4717 46.521 52.6655 46.1756 52.9239 45.8811C53.1822 45.5866 53.4994 45.3495 53.855 45.185C54.3259 44.973 54.8388 44.8705 55.355 44.885C55.7279 44.8531 56.1033 44.9023 56.4554 45.0292C56.8076 45.1561 57.1281 45.3576 57.395 45.62C57.9047 46.2439 58.2317 46.9967 58.34 47.795H52.115C52.1393 47.4902 52.1946 47.1886 52.28 46.895H52.355ZM44.42 46.175C45.1834 45.8571 45.8468 45.3388 46.34 44.675C46.7933 43.97 47.0185 43.1425 46.985 42.305C47.0144 41.5413 46.8655 40.7812 46.55 40.085C46.285 39.4819 45.8595 38.963 45.32 38.585C44.748 38.192 44.0984 37.926 43.415 37.805C42.6062 37.6354 41.7813 37.5549 40.955 37.565H32V56.435H41.15C41.985 56.4356 42.8167 56.3297 43.625 56.12C44.3911 55.9218 45.1169 55.5919 45.77 55.145C46.4026 54.7066 46.9177 54.1193 47.27 53.435C47.6599 52.6697 47.8507 51.8185 47.825 50.96C47.8534 49.8961 47.555 48.8491 46.97 47.96C46.3409 47.0659 45.4078 46.4314 44.345 46.175H44.42ZM36.155 40.79H40.04C40.3969 40.7896 40.7532 40.8197 41.105 40.88C41.4289 40.928 41.74 41.0402 42.02 41.21C42.2905 41.363 42.5097 41.5927 42.65 41.87C42.8237 42.2026 42.9065 42.5751 42.89 42.95C42.9179 43.2729 42.8686 43.5977 42.746 43.8977C42.6234 44.1977 42.4311 44.4641 42.185 44.675C41.6482 45.044 41.0058 45.2283 40.355 45.2H36.155V40.79ZM43.415 51.95C43.2609 52.2557 43.0278 52.5146 42.74 52.7C42.4405 52.8863 42.1104 53.0183 41.765 53.09C41.3811 53.1759 40.9884 53.2162 40.595 53.21H36.095V48.035H40.595C41.3672 48.0012 42.1298 48.2168 42.77 48.65C43.0592 48.9095 43.2833 49.2335 43.424 49.5958C43.5647 49.958 43.6181 50.3483 43.58 50.735C43.6206 51.1473 43.564 51.5634 43.415 51.95Z" fill="black"/>
                        </svg>
                        </a>
                    </div>

                    {/* dribbble */}
                    <div style={{animationDelay : '0.6s'}} className="social dribbble animate__animated animate__fadeInUp animate__faster">
                        <a href="https://dribbble.com/Triumph__" target="_blank" rel="noreferrer">
                        <svg width="93" height="93" viewBox="0 0 93 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="46.5" cy="46.5" r="46.5" fill="#333333"/>
                            <g clip-path="url(#clip0_10_2195)">
                            <path d="M64.9625 47.777C61.181 46.586 56.771 46.445 52.376 47.408C51.6829 45.6961 50.9024 44.0209 50.0375 42.389C54.344 40.7945 58.0205 38.42 60.347 34.9685C63.227 38.162 65 42.3755 65 47C65 47.2625 64.97 47.5175 64.9625 47.777ZM59.18 33.788C57.0395 37.1405 53.468 39.425 49.2485 40.952C46.9944 36.9835 44.2586 33.3087 41.1035 30.011C42.9984 29.3457 44.9917 29.0039 47 29C51.6995 29 55.97 30.8255 59.18 33.788ZM39.3695 30.7205C42.5364 33.9577 45.2693 37.5926 47.4995 41.534C41.7605 43.2755 35.111 43.811 29.297 43.826C30.338 38.0105 34.175 33.167 39.3695 30.7205ZM29 47C29 46.481 29.033 45.971 29.078 45.4655C35.177 45.4625 42.2075 44.894 48.29 42.989C49.133 44.5739 49.8974 46.1994 50.5805 47.8595C44.4185 49.643 38.498 53.657 34.649 60.062C31.1795 56.777 29 52.142 29 47ZM35.8985 61.142C39.548 54.923 45.254 51.0485 51.1685 49.367C52.9025 53.966 53.996 58.739 54.329 63.4235C52.0251 64.4617 49.527 64.9991 47 65C42.8105 65 38.96 63.5495 35.8985 61.142ZM55.9685 62.5835C55.646 57.9725 54.6155 53.366 52.9715 48.9305C57.0965 48.0695 61.2275 48.242 64.742 49.4135C64.7675 49.4225 64.793 49.4165 64.8185 49.4225C64.445 52.146 63.4533 54.7478 61.9193 57.029C60.3853 59.3102 58.3498 61.2102 55.9685 62.5835Z" fill="black"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_10_2195">
                            <rect width="36" height="36" fill="white" transform="translate(29 29)"/>
                            </clipPath>
                            </defs>
                        </svg>

                        </a>
                    </div>
                </div>
            </div>

            {/* image goes here */}
            <div className='hidden md:flex' style={{ width : 281, backgroundColor : '#D9D9D9'}}>
                <div className='animate__animated animate__fadeIn'>
                    My Image goes here
                </div>

            </div>
            <a data-aos="flip-right" data-aos-duration='1000' href="#projects" className="float-circle animate__animated animate__pulse animate__slower animate__infinite">
                <div className='bg-yellow text-black p-10 pt-12 text-center rounded-full'>
                    <FontAwesomeIcon icon={faArrowTrendUp} className='heading-five' /> <br />
                    <h6 className="heading-six">
                        Projects
                    </h6>
                    {/* Projects */}
                </div>
            </a>
        </div>


    {/* Skills and Experience */}
    <div id='skills' className="skills mt-40">
        <div className="grid mt-10 p-8 md:grid-flow-col gap-x-8">
            <div>
                <div className="flex space-x-2" style={{marginBottom : -20}}>
                    <h1 data-aos="fade-up" data-aos-duration="500" className=" xl-display experience bold text-uppercase text-yellow">
                        2 Years
                    </h1>
                    <span data-aos="fade-in" data-aos-duration="1000" className='heading-two plus bold text-uppercase text-blue'>+</span>
                </div>
                <h5 data-aos="fade-up" data-aos-duration="500" className="mt-4 md:mt-0 heading-five text-gray">
                Proven experience in designing intuitive applications
                </h5>
            </div>

            <div className='md:mt-10'>
                <h5 data-aos="fade-up" data-aos-duration="1000" className="heading-five">
                    I also possess 3+ years of proficiency in writing front-end codes (React & Javascript) for web-based applications. This in turn gives me an added advantage of understanding the perspective of both users and developers.
                </h5>
            </div>
        </div>
    </div>

    {/* marquee */}
    <div data-aos="zoom-out-up" data-aos-duration="500" className="marquee">
        
        {/* <marquee behavior="scroll" direction="left" scrollamount="10"> */}
        
        <Marquee speed={100} gradientColor={[0,0,0]}>
            <div className="flex items-center space-x-4 mr-7">
                <FontAwesomeIcon icon={faCircle} style={{color : '#333'}} />
                <h1 className="xl-display marquee text-uppercase bold text-gray opacity-40">
                    UI/UX Design
                </h1>
                <FontAwesomeIcon icon={faCircle} style={{color : '#333'}} />
                <h1 className="xl-display marquee text-uppercase bold text-gray opacity-40">
                    Frontend Development
                </h1>
            </div>    
        </Marquee>
        {/* </marquee> */}
    </div>


    {/* Projects */}    
    <div id='projects' className="projects mt-40 p-8">
        <h3 data-aos="fade-up" data-aos-duration="500" className="heading-three text-blue">
            Projects
        </h3>
        <h1 data-aos="fade-up" data-aos-duration="500" className="xl-display bold text-uppercase" >
            Selected <br /> works
        </h1>
    </div>

    {/* Send a Message */}
    <div id='message' className="send-message mt-40 p-8">
        <h3 data-aos="fade-up" data-aos-duration="500" className="text-center heading-three text-blue">
            Let's Chat
        </h3>
        <h1 data-aos="fade-up" data-aos-duration="500" className="text-center xl-display bold text-uppercase" >
            Send a message
        </h1>

        <div data-aos="fade-in" data-aos-duration="500" className="form flex justify-center mt-10">
            <form  action="" method="post" className='w-full md:w-2/5 '>
                <div className="grid grid-rows-2 gap-y-0 mb-4">
                    <label className='heading-five'>Name</label>
                    <input type="text" placeholder='Your name' className='dark:bg-black outline-3 pl-4 pr-4 h-12 outline-gray' />
                </div>

                <div className="grid grid-rows-2 gap-y-0 mt-5">
                    <label className='heading-five'>Email</label>
                    <input type="email" placeholder='Your email address' className='dark:bg-black outline-3 pl-4 pr-4 h-12 outline-gray' />
                </div>

                <div className=" mt-5">
                    <h5 className='heading-five'>Message</h5>
                    <textarea name="" id="" cols="30" rows="10" className='dark:bg-black outline-3 w-full pl-4 pr-4 h-40 outline-gray'></textarea>
                </div>

                <div className="grid grid-rows-2 gap-y-0 mt-10">
                    <button type="submit" className='btn btn-red base-text p-3'>
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    </div>

    </div>
  )
}

export default Home