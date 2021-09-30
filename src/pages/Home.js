import { useCategoriesData } from '../hooks/useCategoriesData'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCard } from '../components/ListOfPhotoCard'
import { HelmetMeta } from '../components/HelmetMeta'

export const Home = ({ id }) => {
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
