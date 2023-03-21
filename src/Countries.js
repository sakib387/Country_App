import React from 'react'
import {v4 as uuidv4} from "uuid";
import Country from './Country';
import './countries.css'
  function Countries(props) {
  return (
    <div className='contries'>
      {
        props.countries.map((country)=>{
          const counttryNew={country,id:uuidv4()}
          return <Country {...counttryNew} key={counttryNew.id} remove={props.remove}/>
        })
      }
    </div>
  )
}
export default Countries;