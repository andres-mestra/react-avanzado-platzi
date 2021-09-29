import { useCategoriesData } from '../hooks/useCategoriesData'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCard } from '../components/ListOfPhotoCard'

export const Home = ({ id }) => {
  const { loading, categories } = useCategoriesData()

  return (
    <>
      <ListOfCategories loading={loading} categories={categories} />
      <ListOfPhotoCard categoryId={id} />
    </>
  )
}
