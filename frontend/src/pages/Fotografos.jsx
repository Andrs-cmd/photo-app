import FotografoDashboard from '../components/FotografoDashboard'

const Fotografos = () => {
  return (
    <div className="fotografos-page">
      <div className="page-header">
        <h1 className="page-title cursive-font">Panel de Fotógrafos</h1>
        <p className="page-subtitle">Gestiona tu portfolio y conecta con clientes</p>
      </div>
      <FotografoDashboard />
    </div>
  )
}

export default Fotografos