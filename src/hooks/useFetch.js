import { useState, useEffect, useRef } from 'react'

export const useFetch = (url) => {
  //Guardamos la referencia a este componente
  const isMounted = useRef(true)

  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  })

  useEffect(() => {
    //Esto se dispara cuando se desmonta el componente
    return () => {
      //Cuando se desmonta el componente isMounted es false
      isMounted.current = false
    }
  }, [])

  useEffect(() => {
    setState((s) => ({ ...s, loading: true }))

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        //Si el componente aun no ha sido desmontado isMount es true
        //caso contrario no llamo el setState
        if (isMounted.current) {
          setState({
            loading: false,
            error: null,
            data,
          })
        }
      })
      .catch(() => {
        setState({
          data: null,
          loading: false,
          error: 'No se pudo cargar la info',
        })
      })
  }, [url])

  return state
}
