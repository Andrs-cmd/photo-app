import './GaleriaFotografos.css'

const GaleriaFotografos = () => {
  const fotografos = [
    {
      id: 1,
      nombre: "ALEX RIVERS",
      especialidad: "FOTOGRAFÍA URBANA",
      imagen: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      link: "#alex-rivers"
    },
    {
      id: 2,
      nombre: "SAMANTHA CROSS",
      especialidad: "RETRATOS ARTÍSTICOS", 
      imagen: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      link: "#samantha-cross"
    },
    {
      id: 3,
      nombre: "MARCUS WELLS",
      especialidad: "MODA Y ESTILO",
      imagen: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      link: "#marcus-wells"
    }
  ]

  return (
    <div className="galeria-fotografos">
      <div className="galeria-grid">
        {fotografos.map((fotografo) => (
          <FotografoCard key={fotografo.id} {...fotografo} />
        ))}
      </div>
    </div>
  )
}

const FotografoCard = ({ nombre, especialidad, imagen, link }) => {
  return (
    <div className="fotografo-card">
      <a href={link} className="card-link">
        <div className="image-container">
          <img src={imagen} alt={nombre} className="card-image" />
          <div className="overlay">
            <div className="rayo-effect"></div>
            <h3 className="fotografo-nombre">{nombre}</h3>
            <p className="fotografo-especialidad">{especialidad}</p>
          </div>
        </div>
      </a>
    </div>
  )
}

export default GaleriaFotografos