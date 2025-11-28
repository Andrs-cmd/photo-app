import { useState, useEffect } from 'react'
import './Carousel.css'

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      title: "FOTOGRAFÍA URBANA",
      subtitle: "CAPTURANDO LA ESENCIA DE LA CIUDAD"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      title: "RETRATOS AUTÉNTICOS",
      subtitle: "HISTORIAS A TRAVÉS DEL LENTE"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      title: "MODA Y ESTILO",
      subtitle: "TENDENCIAS EN CADA CAPTURA"
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  // Auto slide cada 5 segundos
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="carousel">
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div 
            key={slide.id} 
            className={`carousel-item ${index === currentSlide ? 'active' : ''}`}
          >
            <img src={slide.image} className="carousel-image" alt={slide.title} />
            <div className="carousel-caption">
              <h2 className="carousel-title">{slide.title}</h2>
              <p className="carousel-subtitle">{slide.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Indicadores */}
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button 
            key={index}
            className={`carousel-indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Controles */}
      <button className="carousel-control prev" onClick={prevSlide} aria-label="Slide anterior">
        <span>‹</span>
      </button>
      <button className="carousel-control next" onClick={nextSlide} aria-label="Slide siguiente">
        <span>›</span>
      </button>
    </div>
  )
}

export default Carousel