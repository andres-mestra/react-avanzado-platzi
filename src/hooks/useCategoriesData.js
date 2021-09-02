import { useFetch } from './useFetch'

export const useCategoriesData = () => {
  const { data: categories, loading } = useFetch(
    'https://petgram-server-mestra.vercel.app/categories'
  )

  return { categories, loading }
}
