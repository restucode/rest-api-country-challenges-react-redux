import FilterCountry from './FilterCountry'
import { useState } from 'react'
import useFetch from '../hooks/useFetch'
import CountryList from './CountryList'

const Country = () => {


 // NOT USING REDUX
 // const { data: allCountry, setData: setAllCountry, isPending, error } = useFetch('https://restcountries.eu/rest/v2/all')

 // REDUX WITHOUT DESTRUCTURING
 // const { allCountry } = useFetch('https://restcountries.eu/rest/v2/all')

 // USING REDUX DESCTRUCTURING
 const { allCountry, loading, error } = useFetch('https://restcountries.eu/rest/v2/all')
 const [ searchCountry, setSearchCountry ] = useState(null)
 const [ selectRegion, setSelectRegion ] = useState(null)
 const [ selectOptionName, setSelectOptionName ] = useState('Filter By Region')
 const [ isOpen, setIsOpen ] = useState(false)

 const handleInputCountry = (val) => {
  setSearchCountry(val)
 }

 const onOptionClicked = (option) => {
  setSelectRegion(option)
  setSelectOptionName(option)
  setIsOpen(!isOpen)
 }


 return (
  <div className="country">
   <div className="country-area">
     <FilterCountry 
       handleInputCountry={handleInputCountry} 
       onOptionClicked={onOptionClicked}
       isOpen={isOpen}
       setIsOpen={setIsOpen}
       selectOptionName={selectOptionName}
     />

     <div className="list-country">

    {/*TIDAK PAKAI REDUX*/}
{/*     {error && <div>Error</div>}
     {isPending && <div>Loading...</div>}    
     {allCountry && <CountryList allCountry={allCountry} /> } */}

    {/*REDUX TANPA DESTRUCTRING*/}

{/*     {allCountry.error && <div>Error</div>}
     {allCountry.loading && <div>Loading...</div>}    
     {allCountry.allCountry && <CountryList allCountry={allCountry.allCountry} /> } */}

    {/*REDUX DENGAN DESTRUCTRING*/}
     {error && <div className="error">Error</div>}
     {loading && <div className="loading">Loading...</div>}    
     {allCountry && <CountryList allCountry={allCountry} 
                                 searchCountry={searchCountry} 
                                 selectRegion={selectRegion} 
                                 loading={loading} /> }


     </div>
   </div> 
  </div>
 )
}

export default Country