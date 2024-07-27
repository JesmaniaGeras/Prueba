import React, { useState } from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState
} from 'react-accessible-accordion';
import "react-accessible-accordion/dist/fancy-example.css"
import {MdOutlineArrowDropDown} from "react-icons/md"
import './Value.css'
import data from '../../utils/accordion'
const value = () => {
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* Lado izquierdo */}
        <div className="v-left">
          <div className="image-container">
            <img src="./value.png" alt="" />
          </div>
        </div>

        {/* Lado derecho */}
        <div className="flexColStart v-right">
          <span className="orangeText">Nuestro Valor</span>
          <span className="primaryText">Valores con los que trabajamos</span>
          <span className="secondaryText">
            Siempre listos para ayudarte, ofreciendote los mejores servicios
            <br />
            Fieles creyentes de que podemos hacer mejor tu vida
          </span>

          <Accordion
          className='accordion'
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {
              data.map((item, i) => {
                const  [className, setClassName] = useState(null)
                return(
                  <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                    {/* Encabezado */}
                    <AccordionItemHeading>
                      <AccordionItemButton className='flexCenter accordionButton'> 
                      
                      {/* Empieza analizador si esta expandido o no*/}
                        <AccordionItemState>
                          {({expanded}) => expanded 
                            ? setClassName("expanded") 
                            : setClassName("collapsed")}
                        </AccordionItemState>

                        <div className="flexCenter icon">{item.icon}</div>
                        <span className="primaryText">
                          {item.heading}
                        </span>
                        <div className="flexCenter icon">
                          <MdOutlineArrowDropDown size={20}/>
                        </div>
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    {/*Contenido de la card*/}
                    <AccordionItemPanel>
                      <p className="secondaryText">
                        {item.detail}
                      </p>
                    </AccordionItemPanel>

                  </AccordionItem>
                )
              })
            }
          </Accordion>

        </div>
      </div>
    </section>
  )
}

export default value