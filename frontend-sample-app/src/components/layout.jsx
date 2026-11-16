import React from 'react'
import {HashRouter,Routes,Route,NavLink,Link} from 'react-router-dom'

import HomePage from '../pages/home_page'
import ReservasPage from '../pages/reservas_page'
import TalleresPage from '../pages/talleres_page'

import TallerDetallePage from '../pages/talleres_det' 
import usm from '../assets/usm.png'

export const Layout = () => {
  return (
    <HashRouter>
      <div className='layout'>
        <header className='navbar'>
          <Link to='/' className='navbar__logo-link'>
            <div className='navbar__logo' style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <img 
                src={usm} 
                alt="Logo USM" 
                style={{ 
                  height: '48px', 
                  width: 'auto', 
                  objectFit: 'contain', 
                  display: 'block' 
                }} 
              />
              <div className='navbar__logo-text'>
                <strong>UNIVERSIDAD TÉCNICA</strong>
                <span>FEDERICO SANTA MARÍA</span>
              </div>
              <div className='navbar__logo-subtext'>
                DEPARTAMENTO DE EDUCACIÓN FÍSICA, DEPORTES Y RECREACIÓN
              </div>
            </div>
          </Link>

          <nav className='navbar__nav'>
            <NavLink 
              to='/reservas' 
              className={({ isActive }) => isActive ? 'navbar__link navbar__link--active' : 'navbar__link'}
            >
              Reservas
            </NavLink>
            <NavLink 
              to='/talleres' 
              className={({ isActive }) => isActive ? 'navbar__link navbar__link--active' : 'navbar__link'}
            >
              Talleres
            </NavLink>
          </nav>
        </header>

        <main className='layout__page'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/reservas' element={<ReservasPage />} />
            <Route path='/talleres' element={<TalleresPage />} />
            <Route path='/talleres/:id' element={<TallerDetallePage />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  )
}

export default Layout