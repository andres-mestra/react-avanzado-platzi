import { HelmetMeta } from '../components/HelmetMeta'

const NotFound = () => {
  return (
    <>
      <HelmetMeta
        title="Petgram - Ruta no encontrada"
        description="Esta ruta no existe :("
      />
      <h1>Esta pagina no existe 🙁</h1>
    </>
  )
}

export default NotFound
