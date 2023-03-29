import React, { useState } from 'react'
import './search.css'
export default function Search(props) {
    const [txt,setTxt]=useState('');
    function handlechange(e){
         
        props.search(e.target.value);
        setTxt(e.target.value);
    }
  return (
    <div class="search_box">
        <input type="text" placeholder=' Search country'
        value={txt}
        onChange={handlechange}
        />
    </div>
  )
}
