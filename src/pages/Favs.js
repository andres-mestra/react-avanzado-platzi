import { ListOfFavs } from '../components/ListOfFavs'
import { getFavsQuery } from '../queries/getFavsQuery'

export const Favs = () => {
  const { loading, data, error } = getFavsQuery()

  const favs = data?.favs ?? []

  return (
    <>
      <h1>Fats</h1>
      <ListOfFavs favs={favs} />
    </>
  )
}
