import React from 'react'
import { Link } from 'react-router-dom'
import { LISTA_TALLERES } from '../data/talleres.js'

export const TalleresPage = () => {
  return (
    <div className='section-page'>
      <div className='section-page__header'>
        <h1><span className='yellow-bar'>|</span> Talleres Deportivos</h1>
        <p>
          Selecciona cualquiera de los talleres de la cuadrícula para ver sus horarios, 
          profesor encargado y recinto.
        </p>
      </div>

      {/* Cuadrícula de 5 columnas */}
      <div className='talleres-grid-5x5'>
        {LISTA_TALLERES.map((taller) => (
          <Link 
            to={`/talleres/${taller.id}`} 
            key={taller.id} 
            className='taller-square'
          >
            <img src={taller.imagen} alt={taller.nombre} className='taller-square__img' />
            <div className='taller-square__overlay'>
              <h3>
                <span className='yellow-bar'>|</span> {taller.nombre}
              </h3>
              <p>{taller.campus}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default TalleresPage