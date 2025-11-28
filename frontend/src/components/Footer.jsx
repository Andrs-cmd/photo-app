import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="cursive-font">Fresno Estudio</h3>
          <p>Donde la creatividad se encuentra con la perfección</p>
        </div>
        
        <div className="footer-section">
          <h4 className="cursive-font">Enlaces Rápidos</h4>
          <a href="#inicio" className="footer-link">Inicio</a>
          <a href="#fotografos" className="footer-link">Fotógrafos</a>
          <a href="#clientes" className="footer-link">Clientes</a>
          <a href="#contacto" className="footer-link">Contacto</a>
        </div>
        
        <div className="footer-section">
          <h4 className="cursive-font">Contacto</h4>
          <p>📧 info@fresnoestudio.com</p>
          <p>📞 +1 234 567 890</p>
          <p>📍 Ciudad, País</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 Fresno Estudio. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer