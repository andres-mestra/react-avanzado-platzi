import { HelmetMeta } from '../components/HelmetMeta'
import { ListOfFavs } from '../components/ListOfFavs'
import { getFavsQuery } from '../queries/getFavsQuery'

export const Favs = () => {
  const { data } = getFavsQuery()

  const favs = data?.favs ?? []

  return (
    <>
      <HelmetMeta
        title="Petgram - Tus favoritos"
        description="Aquí puedes encontrar tus favoritos"
      />
      <h1>Favs</h1>
      <ListOfFavs favs={favs} />
    </>
  )
}
