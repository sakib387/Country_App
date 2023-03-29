import React from 'react'
import './country.css'
 
export default function country(props) {
    const {country}=props;
    const {name,flags,capital,population,area}=country;
    function handleremove(name){
      props.remove(name);
    }
  return (
    <div class="country_card">
        <img src={flags.png}></img>
        <h3>Name: {name.common}</h3>
        <h3>Population: {population}</h3>
        <h3>Capital: {capital}</h3>
        <h3>Area: {area}</h3>
        <button onClick={()=>{
            handleremove( name.common)
        }}>Remove</button>
    </div>
  )
}
