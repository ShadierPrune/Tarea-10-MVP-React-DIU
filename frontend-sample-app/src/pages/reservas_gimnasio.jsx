import React, { useState } from 'react'

export const ReservasGimnasio = ({ opciones }) => {
  const [reservaSeleccionada, setReservaSeleccionada] = useState(null)
  const [confirmada, setConfirmada] = useState(false)

  const reiniciar = () => {
    setReservaSeleccionada(null)
    setConfirmada(false)
  }

  if (confirmada && reservaSeleccionada) {
    return (
      <div className="gym-reservation">
        <div className="gym-reservation__panel gym-reservation__panel--success">
          <h2>¡Reserva confirmada!</h2>

          <p>
            Has confirmado tu reserva para el siguiente horario:
          </p>

          <div className="gym-reservation__summary">
            <p>
              <strong>Recinto:</strong>{' '}
              {reservaSeleccionada.nombre}
            </p>

            <p>
              <strong>Horario:</strong>{' '}
              {reservaSeleccionada.horario}
            </p>
          </div>

          <button className="btn-primary" onClick={reiniciar}>
            Realizar otra reserva
          </button>
        </div>
      </div>
    )
  }

  if (reservaSeleccionada) {
    return (
      <div className="gym-reservation">
        <div className="gym-reservation__panel">
          <h2>Revisar reserva</h2>

          <p>Comprueba los datos antes de confirmar.</p>

          <div className="gym-reservation__summary">
            <p>
              <strong>Recinto:</strong>{' '}
              {reservaSeleccionada.nombre}
            </p>

            <p>
              <strong>Horario:</strong>{' '}
              {reservaSeleccionada.horario}
            </p>

            <p>
              <strong>Cupos disponibles:</strong>{' '}
              {reservaSeleccionada.cupos}
            </p>
          </div>

          <div className="gym-reservation__actions">
            <button
              className="btn-secondary"
              onClick={() => setReservaSeleccionada(null)}
            >
              Volver a los horarios
            </button>

            <button
              className="btn-primary"
              onClick={() => setConfirmada(true)}
            >
              Confirmar reserva
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="gym-reservation__intro">
        <h2>Horarios del gimnasio</h2>
        <p>
          Selecciona un bloque horario según la disponibilidad de cupos.
        </p>
      </div>

      <div className="options-grid">
        {opciones.map((item) => {
          const sinCupos = item.cupos === 0

          return (
            <div
              key={item.id}
              className={`option-box ${sinCupos ? 'disabled' : ''}`}
            >
              <h3>{item.nombre}</h3>

              <p>
                <strong>Bloque:</strong> {item.horario}
              </p>

              <p>
                <strong>Cupos disponibles:</strong> {item.cupos}
              </p>

              <button
                className="btn-primary"
                disabled={sinCupos}
                onClick={() => setReservaSeleccionada(item)}
              >
                {sinCupos ? 'Sin cupos' : 'Seleccionar horario'}
              </button>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default ReservasGimnasio