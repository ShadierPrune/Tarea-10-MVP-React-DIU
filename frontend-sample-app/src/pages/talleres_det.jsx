import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { LISTA_TALLERES } from '../data/talleres.js'

export const TallerDetallePage = () => {
  const { id } = useParams()
  const taller = LISTA_TALLERES.find((item) => item.id === Number(id))

  if (!taller) {
    return (
      <div className='section-page'>
        <h2>Taller no encontrado</h2>
        <Link to='/talleres' className='btn-back'>← Volver a Talleres</Link>
      </div>
    )
  }

  return (
    <div className='section-page'>
      <Link to='/talleres' className='btn-back'>
        ← Volver a la lista de Talleres
      </Link>

      <div className='taller-detalle'>
        <div className='taller-detalle__img-box'>
          <img src={taller.imagen} alt={taller.nombre} />
        </div>

        <div className='taller-detalle__content'>
          <h1>
            <span className='yellow-bar'>|</span> {taller.nombre}
          </h1>
          <span className='taller-detalle__badge'>{taller.campus}</span>

          <div className='taller-detalle__info-list'>
            <div className='info-item'>
              <strong>Profesor encargado:</strong>
              <p>{taller.profesor}</p>
            </div>
            <div className='info-item'>
              <strong>Recinto deportivo:</strong>
              <p>{taller.recinto}</p>
            </div>
            <div className='info-item'>
              <strong>Horarios de entrenamiento:</strong>
              <p>{taller.horario}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TallerDetallePage