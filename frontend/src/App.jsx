import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Inicio from './pages/Inicio'
import Fotografos from './pages/Fotografos'
import Clientes from './pages/Clientes'
import Contacto from './pages/Contacto'

function App() {
  // Simulamos la ruta actual (luego puedes usar React Router)
  const currentPage = 'inicio' // Cambia esto para ver diferentes páginas

  const renderPage = () => {
    switch(currentPage) {
      case 'fotografos':
        return <Fotografos />
      case 'clientes':
        return <Clientes />
      case 'contacto':
        return <Contacto />
      default:
        return <Inicio />
    }
  }

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        {renderPage()}
      </main>
      <Footer />
    </div>
  )
}

export default App