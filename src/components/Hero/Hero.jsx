import React from 'react'
import "./Hero.css"
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup'
import {motion} from 'framer-motion'
const Hero = () => {
  return (
    <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container">
            {/* Comienza lado izquierdo */}
            <div className="flexColStart hero-left">
                <div className="hero-title">
                    <div className="orange-circle"/>
                    <motion.h1
                    initial={{y:"2rem", opacity:"0"}}
                    animate={{y:0, opacity:1}}
                    transition={{
                        duration:2,
                        type: "spring"
                    }}
                    >
                        Discover <br/>
                        Most Suitable <br/>
                        Property
                    </motion.h1>
                </div>

                <div className="flexColStart hero-des">
                    <span className='secondaryText'>Encuentra una gran variedad de propiedades ideales para ti</span>
                    <span className='secondaryText'>Olvídate de todas las dificultades de encontrar una residencia</span>
                </div>

                <div className="flexCenter search-bar">
                    <HiLocationMarker color="var(--blue)" suze={25}/>
                    <input type="text" />
                    <button className='button'>Search</button>
                </div>

                <div className="flexCenter stats">
                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start={8800} end={9000} duration={4}/>
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>
                            Productos Top
                        </span>
                    </div>

                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start={1950} end={2000} duration={4}/>
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>
                            Clientes Felices
                        </span>
                    </div>

                    <div className="flexColCenter stat">
                        <span>
                            <CountUp end={28}/>
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>
                            Reconocimientos
                        </span>
                    </div>
                </div>
            </div>

            {/*Comienza lado derecho*/}
            <div className="flexCenter hero-right">
                <motion.div 
                initial={{x:"7rem", opacity:0}}
                animate={{x:0, opacity:1}}
                transition={{
                    duration:2,
                    type:"spring"
                }}
                className="image-container">
                    <img src="./hero-image.png" alt="" />
                </motion.div>
            </div>
        </div> 
    </section>
  )
}

export default Hero