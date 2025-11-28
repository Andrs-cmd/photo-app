import { useState } from 'react'
import './Header.css'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className="main-header">
        <div className="header-container">
          <button 
            className={`menu-hamburger ${isOpen ? 'active' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>

          <div className="logo-wrapper">
            <h1 className="brand-logo cursive-font">
              Fresno Estudio
            </h1>
          </div>

          <div className="session-buttons">
            <button className="btn-login cursive-font">
              Iniciar Sesión
            </button>
            <button className="btn-register cursive-font">
              Registrarse
            </button>
          </div>
        </div>
      </header>

      <nav className={`side-menu ${isOpen ? 'open' : ''}`}>
        <div className="menu-content">
          <button className="close-menu" onClick={() => setIsOpen(false)}>
            <span className="close-icon">×</span>
          </button>

          <div className="menu-header">
            <h2 className="menu-title cursive-font">Navegación</h2>
            <div className="menu-divider"></div>
          </div>

          <div className="menu-items">
            <a href="#inicio" className="menu-item" onClick={() => setIsOpen(false)}>
              <span className="item-text cursive-font">Inicio</span>
            </a>
            <a href="#fotografos" className="menu-item" onClick={() => setIsOpen(false)}>
              <span className="item-text cursive-font">Fotógrafos</span>
            </a>
            <a href="#clientes" className="menu-item" onClick={() => setIsOpen(false)}>
              <span className="item-text cursive-font">Clientes</span>
            </a>
            <a href="#contacto" className="menu-item" onClick={() => setIsOpen(false)}>
              <span className="item-text cursive-font">Contacto</span>
            </a>
          </div>
        </div>
      </nav>

      <div 
        className={`menu-overlay ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(false)}
      />
    </>
  )
}

export default Header