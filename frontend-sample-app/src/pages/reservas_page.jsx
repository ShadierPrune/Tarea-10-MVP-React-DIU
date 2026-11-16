import React, { useState, useMemo } from 'react'
import { OPCIONES_RESERVA, BLOQUES_HORARIOS } from '../data/talleres'
import ReservasGimnasio from './reservas_gimnasio'

const DIAS_SEMANA = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']

// Devuelve las fechas (lunes a sábado) de la semana actual
const obtenerFechasSemana = () => {
  const hoy = new Date()
  const diaActual = hoy.getDay() // 0 = domingo, 1 = lunes, ...
  const lunes = new Date(hoy)
  // Si hoy es domingo, se muestra la semana siguiente
  const diferencia = diaActual === 0 ? 1 : 1 - diaActual
  lunes.setDate(hoy.getDate() + diferencia)

  const fechas = {}
  DIAS_SEMANA.forEach((dia, i) => {
    const fecha = new Date(lunes)
    fecha.setDate(lunes.getDate() + i)
    fechas[dia] = fecha
  })
  return fechas
}

const formatearFecha = (fecha) =>
  fecha.toLocaleDateString('es-CL', { day: 'numeric', month: 'short' })

export const ReservasPage = () => {
  const [categoriaSel, setCategoriaSel] = useState('futbol') // 'futbol' | 'tenis' | 'pesas'
  const [canchaFutbolSel, setCanchaFutbolSel] = useState('Cancha 1 de Fútbol')
  const [diaSel, setDiaSel] = useState('Lunes')
  const [seleccionada, setSeleccionada] = useState(null)

  const fechasSemana = useMemo(() => obtenerFechasSemana(), [])

  const opcionesParaMostrar = useMemo(() => {
    if (categoriaSel === 'pesas') {
      return OPCIONES_RESERVA.filter((item) => item.nombre === 'Sala de Pesas / Musculación')
    }

    const nombreCanchaActual = categoriaSel === 'futbol' ? canchaFutbolSel : 'Cancha de Tenis'

    return BLOQUES_HORARIOS.map((bloque, index) => {
      const encontrado = OPCIONES_RESERVA.find(
        (item) => item.nombre === nombreCanchaActual && item.dia === diaSel && item.horario === bloque
      )

      return encontrado || {
        id: `empty-${diaSel}-${bloque}-${index}`,
        nombre: nombreCanchaActual,
        dia: diaSel,
        horario: bloque,
        cupos: 0
      }
    })
  }, [categoriaSel, canchaFutbolSel, diaSel])

  return (
    <div className='section-page'>
      <div className='section-page__header'>
        <h1><span className='yellow-bar'>|</span> Opciones de Reservas</h1>
        <p>Selecciona un recinto deportivo para realizar tu reserva de bloque horario.</p>
      </div>

      {/* Selector Nivel 1: Recinto */}
      <div className='category-selector' style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
        <button
          className={`btn-tab ${categoriaSel === 'futbol' ? 'active' : ''}`}
          onClick={() => { setCategoriaSel('futbol'); setSeleccionada(null) }}
        >
          Canchas de Fútbol
        </button>
        <button
          className={`btn-tab ${categoriaSel === 'tenis' ? 'active' : ''}`}
          onClick={() => { setCategoriaSel('tenis'); setSeleccionada(null) }}
        >
          Cancha de Tenis
        </button>
        <button
          className={`btn-tab ${categoriaSel === 'pesas' ? 'active' : ''}`}
          onClick={() => { setCategoriaSel('pesas'); setSeleccionada(null) }}
        >
          Sala de Pesas / Musculación
        </button>
      </div>

      {/* Selector Nivel 2: Sub-cancha (Solo Fútbol) */}
      {categoriaSel === 'futbol' && (
        <div className='subcategory-selector' style={{ display: 'flex', gap: '8px', marginBottom: '15px' }}>
          <button
            className={`btn-subtab ${canchaFutbolSel === 'Cancha 1 de Fútbol' ? 'active' : ''}`}
            onClick={() => setCanchaFutbolSel('Cancha 1 de Fútbol')}
          >
            Cancha 1
          </button>
          <button
            className={`btn-subtab ${canchaFutbolSel === 'Cancha 2 de Fútbol' ? 'active' : ''}`}
            onClick={() => setCanchaFutbolSel('Cancha 2 de Fútbol')}
          >
            Cancha 2
          </button>
        </div>
      )}

      {/* Selector de Días */}
      {categoriaSel !== 'pesas' && (
        <div className='day-selector' style={{ display: 'flex', gap: '6px', marginBottom: '20px', flexWrap: 'wrap' }}>
          {DIAS_SEMANA.map((dia) => (
            <button
              key={dia}
              className={`btn-day ${diaSel === dia ? 'active' : ''}`}
              onClick={() => { setDiaSel(dia); setSeleccionada(null) }}
            >
              {dia} {formatearFecha(fechasSemana[dia])}
            </button>
          ))}
        </div>
      )}

      {categoriaSel === 'pesas' ? (
        <ReservasGimnasio opciones={opcionesParaMostrar} />
      ) : (
        <>
          {seleccionada && (
            <div className='alert-success'>
              Has seleccionado reservar: {seleccionada.nombre} - {seleccionada.dia}{' '}
              {formatearFecha(fechasSemana[seleccionada.dia])} - {seleccionada.horario}
            </div>
          )}

          {/* Grid con TODOS los bloques del día (UNA sola vez) */}
          <div className='options-grid'>
            {opcionesParaMostrar.map((item) => {
              const sinCupos = item.cupos === 0

              return (
                <div
                  key={item.id}
                  className={`option-box ${sinCupos ? 'disabled' : ''}`}
                >
                  <h3>{item.nombre}</h3>

                  {item.dia && (
                    <p>
                      <strong>Día:</strong> {item.dia} {formatearFecha(fechasSemana[item.dia])}
                    </p>
                  )}

                  <p>
                    <strong>Bloque:</strong> {item.horario}
                  </p>

                  <p>
                    <strong>Cupos disponibles:</strong> {item.cupos}
                  </p>

                  <button
                    className='btn-primary'
                    disabled={sinCupos}
                    onClick={() => setSeleccionada(item)}
                  >
                    {sinCupos ? 'Sin Cupos' : 'Seleccionar Reserva'}
                  </button>
                </div>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}

export default ReservasPage
