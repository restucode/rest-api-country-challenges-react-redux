const FilterCountry = ({ handleInputCountry, onOptionClicked, isOpen, setIsOpen, selectOptionName }) => {

 const options = ['Africa', 'Americas','Asia','Europe','Oceania']

 return (
  <div className="filter-country">
   <div className="input-country">
    <svg className="" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
    <input 
      type="text" 
      placeholder="Search for a country" 
      onChange={(e) => handleInputCountry(e.target.value)}
    />
   </div> 

   <div className="select-country">
    <div className="select-custom" onClick={() => setIsOpen(!isOpen)}>
     <span>{ selectOptionName }</span>
     <svg className="" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
    </div>
    {isOpen && (
    <div className='options-custom'>
      {options.map(option => (
        <div onClick={() => onOptionClicked(option)} key={Math.random()}>
         {option}
        </div>
      ))}
    </div>
    )}

   </div>
  </div>
 )
}

export default FilterCountry