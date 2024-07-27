import React from 'react'
import './Contact.css';
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
const Contact = () => {
  return (
    <section className="c-wrapper">
        <div className="paddings innerWidth flexCenter c-container">
            {/* Lado izquierdo */}
            <div className="flexColStart c-left">
                <span className='orangeText'>Contacto</span>
                <span className='primaryText'>Fácil de Ponerte en contacto con nosotros</span>
                <span className='secondaryText'>Siempre listos para ofrecerte el mejor servicio y hacer tu vida mejor</span>

                <div className="flexColStart contactModes">
                    {/* Primera fila */}
                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Número Telefónico</span>
                                    <span className='secondaryText'>771 420 2689</span>
                                </div>
                            </div>
                            <div className="flexCenter button">
                                Llama Ya
                            </div>
                        </div>
                        
                        {/*Segundo cuadro*/}
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Chat</span>
                                    <span className='secondaryText'>771 420 2689</span>
                                </div>
                            </div>
                            <div className="flexCenter button">
                                Chatea Ahora
                            </div>
                        </div>
                        
                    </div>
                    {/*Aqui termina la primer fila*/}

                    {/* Aquí empieza la segunda fila */}
                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Videollamada</span>
                                    <span className='secondaryText'>771 420 2689</span>
                                </div>
                            </div>
                            <div className="flexCenter button">
                                LVideollamada
                            </div>
                        </div>
                        
                        {/*cuart cuadro*/}
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <HiChatBubbleBottomCenter size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Mensajes</span>
                                    <span className='secondaryText'>771 420 2689</span>
                                </div>
                            </div>
                            <div className="flexCenter button">
                                Envianos un mensaje
                            </div>
                        </div>
                        
                    </div>
                    {/* Aquí termina la segunda fila */}
                                  
                </div>
            </div>

            {/* Lado derecho */}
            <div className="c-right">
                <div className="image-container">
                    <img src="./contact.jpg" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact