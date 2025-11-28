import './FotografoDashboard.css'

const FotografoDashboard = () => {
  // Datos de ejemplo
  const estadisticas = {
    portfolio: 45,
    clientes: 12,
    proyectos: 8,
    ingresos: '$2,400'
  }

  const proyectosRecientes = [
    { id: 1, nombre: 'Boda Verano', cliente: 'Ana & Carlos', estado: 'Completado' },
    { id: 2, nombre: 'Retrato Familiar', cliente: 'Familia Rodríguez', estado: 'En Proceso' },
    { id: 3, nombre: 'Producto Moda', cliente: 'Boutique Elegante', estado: 'Pendiente' }
  ]

  return (
    <div className="fotografo-dashboard">
      {/* Estadísticas */}
      <div className="stats-grid">
        <div className="stat-card">
          <h3 className="stat-number">{estadisticas.portfolio}</h3>
          <p className="stat-label">Fotos en Portfolio</p>
        </div>
        <div className="stat-card">
          <h3 className="stat-number">{estadisticas.clientes}</h3>
          <p className="stat-label">Clientes Activos</p>
        </div>
        <div className="stat-card">
          <h3 className="stat-number">{estadisticas.proyectos}</h3>
          <p className="stat-label">Proyectos Activos</p>
        </div>
        <div className="stat-card">
          <h3 className="stat-number">{estadisticas.ingresos}</h3>
          <p className="stat-label">Ingresos Mensuales</p>
        </div>
      </div>

      {/* Acciones Rápidas */}
      <div className="acciones-grid">
        <button className="accion-btn cursive-font">
          <span className="accion-icon">📤</span>
          Subir Fotos
        </button>
        <button className="accion-btn cursive-font">
          <span className="accion-icon">👥</span>
          Gestionar Clientes
        </button>
        <button className="accion-btn cursive-font">
          <span className="accion-icon">💼</span>
          Mi Portfolio
        </button>
        <button className="accion-btn cursive-font">
          <span className="accion-icon">📊</span>
          Ver Estadísticas
        </button>
      </div>

      {/* Proyectos Recientes */}
      <div className="proyectos-section">
        <h2 className="section-title cursive-font">Proyectos Recientes</h2>
        <div className="proyectos-list">
          {proyectosRecientes.map(proyecto => (
            <div key={proyecto.id} className="proyecto-card">
              <h4 className="proyecto-nombre">{proyecto.nombre}</h4>
              <p className="proyecto-cliente">{proyecto.cliente}</p>
              <span className={`proyecto-estado ${proyecto.estado.toLowerCase()}`}>
                {proyecto.estado}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Subir Nuevas Fotos */}
      <div className="upload-section">
        <h2 className="section-title cursive-font">Subir Nuevas Fotos</h2>
        <div className="upload-area">
          <div className="upload-placeholder">
            <span className="upload-icon">📷</span>
            <p>Arrastra tus fotos aquí o haz click para seleccionar</p>
          </div>
          <input type="file" multiple className="upload-input" />
        </div>
      </div>
    </div>
  )
}

export default FotografoDashboard