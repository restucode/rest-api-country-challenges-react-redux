import { Fragment } from 'react'
import { Link } from 'react-router-dom'

const CountryList = ({ allCountry, searchCountry, selectRegion, loading }) => {

 const dataAllCountry = allCountry.filter(country => {
  if(selectRegion === null) return country
  else if(country.region.toLowerCase() === selectRegion.toLowerCase()) {
   return country
  }
  return country
 }).filter(country => {
  if(searchCountry === null) return country
  else if(country.name.toLowerCase().includes(searchCountry.toLowerCase())) {
   return country
  }

  return country
 }).map(country => (
    <Link className="card-country" to={`detail/${country.name}`} key={country.name}>
      <div className="card-img">
       <img src={country.flag} alt={country.name} />
      </div>
      <h3>{country.name}</h3>
      <span>{country.population}</span>
      <span>{ country.region }</span>
      <span>Capital {country.capital}</span>
    </Link> 

  ))

 return (
  <Fragment>
  {dataAllCountry.length ? (
   dataAllCountry
  ) : (
   !loading && (
     <div className="data-tidak-tersedia">Data tidak tersedia !</div>
   )
  )}
  </Fragment>


 )
}

export default CountryList