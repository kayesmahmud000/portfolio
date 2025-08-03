"use client"
import Image from "next/image";
import { BackgroundLines } from "../ui/background-lines";
import { Typewriter } from 'react-simple-typewriter'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
;
import { FaArrowRightLong } from "react-icons/fa6";

const Banner = () => {
  
    return (
      <div id="banner">
           <BackgroundLines  className="flex items-center justify-center w-full flex-col px-4">
         <div className="relative z-50 mt-10 items-center px-4 py-10">
            <div className= "w-14 h-14 md:w-32 md:h-32 border-4 border-red-700 rounded-full p-2 " data-aos="zoom-in"  data-aos-duration="3000">
             <Image src='/blackipc.jpg' alt="picture" width={500} height={100} className=" w-full h-full rounded-full "/>
           </div>
<div className=" py-2 md:py-10">
             <p className=" font-semibold text-sm md:text-2xl text-neutral-700 dark:text-white text-left " data-aos="fade-up"  data-aos-duration="3000"> Hi, my name is </p>
      <h2 className="bg-clip-text text-transparent md:text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 text-2xl md:text-4xl lg:text-7xl font-sans relative z-20 font-bold tracking-tight" data-aos="fade-up"  data-aos-duration="3000">
       <span className="text-red-700"> Kayes Mahmud.</span>
      </h2>
       <p className="max-w-xl mx-auto text-sm md:text-2xl text-neutral-700 dark:text-white text-left mt-6" data-aos="fade-up"  data-aos-duration="3000">
        I’m a
            <Typewriter
            words={[" Web Developer", " Frontend Developer"," Backend Developer", " Junior Full Stack Developer"]}
            loop={Infinity}
            cursor
            cursorStyle='_'
            typeSpeed={150}
            deleteSpeed={50}
            delaySpeed={1000}
            
          /> 
      </p>
</div>
    <div className="flex gap-5 items-center justify-between" data-aos="fade-right"  data-aos-duration="3000">
      <div>
         <a
  href="https://drive.google.com/file/d/1T9rh3mqR70Z9NBFtTpDzlv-U5IyHDT2_/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-6 inline-flex items-center gap-3 md:px-6 px-3 py-2 bg-transparent text-white border border-red-600 rounded-full group transition-all duration-300 hover:bg-red-600"
>
  Resume
  <span className=" w-5 h-5 bg-red-600 text-white flex  group-hover:bg-white group-hover:text-red-600 rounded-full items-center text-center justify-center transition-all duration-300 transform group-hover:translate-x-1">
<FaArrowRightLong />
</span>
</a>

      </div>
       <div className=' flex  gap-5 justify-end items-center mt-5' >
                <div  className="text-white hover:text-red-600 transition-colors duration-300" data-aos='fade-left' data-aos-duration="3000"><a href="https://www.facebook.com/mah.mud.473648" target='_blank'><FaFacebook size={20} ></FaFacebook></a></div>
                <div   className="text-white hover:text-red-600 transition-colors duration-300" data-aos='fade-left' data-aos-duration="4000"><a href="https://github.com/kayesmahmud000" target='_blank'><FaGithub size={20} ></FaGithub></a></div>
                <div   className="text-white hover:text-red-600 transition-colors duration-300" data-aos='fade-left'  data-aos-duration="5000"><a href="https://www.instagram.com/kayes.error_404/" target='_blank'><FaInstagram size={20} ></FaInstagram></a></div>
                <div   className="text-white hover:text-red-600 transition-colors duration-300" data-aos='fade-left' data-aos-duration="6000"><a href="https://www.linkedin.com/in/kayes-mah/" target='_blank'><FaLinkedin size={20} ></FaLinkedin></a> </div>
            </div>
    </div>
         </div>
       
    </BackgroundLines>
      </div>
    );
};

export default Banner;