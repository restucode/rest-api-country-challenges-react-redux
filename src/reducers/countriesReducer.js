const initialState = [
 {
  allCountry: [],
  loading: true,
  error: null
 }
]

const countriesReducer = (state = initialState, action) => {
 const { type, payload } = action

 switch(type) {
  case 'MAKE_REQUEST':
   return { allCountry: [], loading: true, error: null }
  case 'GET_DATA':
   return { ...state, allCountry: payload.allCountry, loading: false, error: null }
  case 'ERROR':
   return { ...state, allCountry: [], loading: false, error: payload.error }
  case 'SEARCH_COUNTRY':
  return { ...state, allCountry: payload.country, loading: false, error: null}
  default:
   return state
 }
}

export default countriesReducer