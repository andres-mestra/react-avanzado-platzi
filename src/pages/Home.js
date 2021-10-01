import { useCategoriesData } from '../hooks/useCategoriesData'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCard } from '../components/ListOfPhotoCard'
import { HelmetMeta } from '../components/HelmetMeta'
import { memo } from 'react'

const HomePage = ({ id }) => {
  const { loading, categories } = useCategoriesData()

  return (
    <>
      <HelmetMeta
        title="Petgram - Tu app de fotos de mascotas"
        description="Con Petgram puedes encontar fotos  de animales domesticos muy bonitos"
      />
      <ListOfCategories loading={loading} categories={categories} />
      <ListOfPhotoCard categoryId={id} />
    </>
  )
}

const Home = memo(HomePage, (prevProps, props) => {
  return prevProps.id === props.id
})

export default Home
