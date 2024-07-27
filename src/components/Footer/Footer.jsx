import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">
            {/* Lado Izquierdo */}
            <div className="flexColStart f-left">
                <img src="./logo2.png" alt="" width={120}/>
                <span className="secondaryText">
                    Nuestra visión es hacer que todas las personas <br />
                    encuentren el mejor lugar para vivir
                </span>
            </div>

            {/* Lado Derecho */}
            <div className="flexColStart f-right">
                <span className='primaryText'>Informacion</span>
                <span className='secondaryText'>Cto. Florencia 233, Fracc. Villa Roma </span>
                <div className="flexCenter f-menu">
                    <span>Propiedades</span>
                    <span>Servicios</span>
                    <span>Productos</span>
                    <span>Acerca De</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer
