const Contacto = () => {
  return (
    <div className="contacto-page">
      <div className="page-header">
        <h1 className="page-title cursive-font">Contacto</h1>
        <p className="page-subtitle">Estamos aquí para ayudarte</p>
      </div>
      
      <div className="contacto-content">
        <div className="contacto-info">
          <h2 className="cursive-font">Información de Contacto</h2>
          <div className="contacto-item">
            <strong>Email:</strong> info@fresnoestudio.com
          </div>
          <div className="contacto-item">
            <strong>Teléfono:</strong> +1 234 567 890
          </div>
          <div className="contacto-item">
            <strong>Dirección:</strong> Ciudad, País
          </div>
        </div>
        
        <form className="contacto-form">
          <h2 className="cursive-font">Envíanos un Mensaje</h2>
          <input type="text" placeholder="Tu nombre" className="form-input" />
          <input type="email" placeholder="Tu email" className="form-input" />
          <textarea placeholder="Tu mensaje" rows="5" className="form-textarea"></textarea>
          <button type="submit" className="form-submit cursive-font">Enviar Mensaje</button>
        </form>
      </div>
    </div>
  )
}

export default Contacto