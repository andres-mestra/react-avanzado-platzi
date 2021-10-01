import { HelmetMeta } from '../components/HelmetMeta'
import { SinglePhotoCard } from '../components/PhotoCard'

const Detail = ({ id }) => {
  return (
    <>
      <HelmetMeta title={`Petgram - Fotografia ${id}`} />
      <SinglePhotoCard id={id} />
    </>
  )
}

export default Detail
