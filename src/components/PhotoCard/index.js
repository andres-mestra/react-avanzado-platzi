import * as React from 'react'
import { useLocalStorage } from '../../hooks/useLocaStorage'
import { useNearScreen } from '../../hooks/useNearScreen'
import { singlePhotoQuery } from '../../queries/singlePhotoQuery'
import { Article, Button, Img, ImgWrapper } from './styles'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

const DEFAULT_IMAGE =
  'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen()
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)

  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <Article ref={element}>
      {show && (
        <>
          <a href={`/?detail=${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>
          <Button onClick={() => setLiked(!liked)}>
            <Icon size="32px" />
            {likes} likes!
          </Button>
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
