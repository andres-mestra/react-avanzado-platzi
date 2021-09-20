import { useLocalStorage } from '../../hooks/useLocaStorage'
import { useNearScreen } from '../../hooks/useNearScreen'
import { singlePhotoQuery } from '../../queries/singlePhotoQuery'
import { toggleLikeMutation } from '../../mutations/toggleLikeMutation'
import { FavButton } from '../FavButton'
import { Article, Img, ImgWrapper } from './styles'
import { Link } from '@reach/router'

const DEFAULT_IMAGE =
  'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen()
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)
  const { toggleLike } = toggleLikeMutation()

  const handleFavClick = () => {
    !liked && toggleLike(id)
    setLiked(!liked)
  }

  return (
    <Article ref={element}>
      {show && (
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
          <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
        </>
      )}
    </Article>
  )
}

export const SinglePhotoCard = ({ id }) => {
  const { data, loading } = singlePhotoQuery(id)

  if (loading) return 'Loading...'

  const photo = data.photo
  return <PhotoCard {...photo} />
}
