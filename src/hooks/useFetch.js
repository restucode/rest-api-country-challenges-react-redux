import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const useFetch = (url) => {

 // NOT USING REDUX
 // const [data, setData] = useState(null)
 // const [isPending, setIsPending] = useState(true)
 // const [error, setError] = useState(null)

 // REDUX WITHOUT DESTRUCTIRNG
 // const allCountry = useSelector((state) => state.countries)


 // REDUX USING DESCTRUCTUTRING
 const { allCountry, loading, error } = useSelector((state) => state.countries)

 const dispatch = useDispatch()

 useEffect(() => {
    
    dispatch({type: 'MAKE_REQUEST'})
    const abortCont = new AbortController()

    fetch(url, { signal: abortCont.signal })
     .then(res => {
      if(!res.ok) {
       throw Error('could not fetch the data for that result')
      }
      return res.json()
     })
     .then(data => {

       // NOT USING REDUX 
       // setData(data)
       // setIsPending(false)
       // setError(null)

       // USING REDUX
       dispatch({type: 'GET_DATA', payload: {allCountry: data}})

     })
     .catch(err => {
        if(err.name === 'AbortError') {
         
        } else {

         // NOT USING REDUX
         // setIsPending(false)
         // setError(err.message)

         // USING REDUX
         dispatch({type: 'ERROR', payload: {error: err.message}})
        }

     })

     return () => abortCont.abort()

   }, [url, dispatch])  

  // NOT USING REDUX
  // return { data, setData, isPending, error }

  // REDUX WITHOUT DESTRUCTURING
  // return { allCountry }

  // REDUX USING DESTRUCTURING
  return { allCountry, loading, error }
}

export default useFetch