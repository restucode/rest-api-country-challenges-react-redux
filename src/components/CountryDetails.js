import { useParams, Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

const CountryDetails = () => {

 const { name } = useParams()

 const { allCountry, loading, error } = useFetch('https://restcountries.eu/rest/v2/all')
 const country = allCountry && allCountry.filter(c => c.name === name)

 return (
  <div className="country-detail">
   <div className="cd-area">

    <div className="btn-back-detail">
     <Link to="/">
     <svg className="" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
      <span>Back</span>
     </Link>
    </div>

    {error && <div className="error">Error</div>}
    {loading && <div className="loading">Loading...</div>}
    {country && country.map(data => (
    <div className="cd-content" key={data.name}>
      <div className="cd-content-left">
       <img src={data.flag} alt="" />
      </div>

      <div className="cd-content-right">

       <h2>{data.name}</h2>

       <div className="cd-content-spesific">

        <div className="cs-left">
         <span>Native Name: {data.nativeName}</span>
         <span>Population: {data.population}</span>
         <span>Region: {data.region}</span>
         <span>Sub Region: {data.subregion}</span>
         <span>Capital: {data.capital}</span>
        </div>

        <div className="cs-right">
         <span>Top Level Domain: {data.topLevelDomain}</span>
         <div className="cs-right-curriencies">
          <span>Currencies:</span> 
          {data.currencies.map(curr => (
            <span key={curr.name}>{curr.name}</span>
          ))}
         </div>
         <div className="cs-right-languages">
          <span>Languages:</span> 
          {data.languages.map(lang => (
            <span key={lang.name}>{lang.name}</span>
          ))}
         </div>
        </div>

         <div className="border-countries">
          <h4>Border Countries:</h4>
          <div className="bc-category">
           {data.borders.map(border => (
            <span key={border}>{border}</span>
           ))}
           
          </div>
         </div>

        </div>

      </div>
    </div>
    ))}

   </div>
  </div>
 )
}

export default CountryDetails