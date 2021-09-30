import { HelmetMeta } from '../components/HelmetMeta'

export const NotFound = () => {
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
