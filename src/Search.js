import React, { useState } from 'react'

export default function Search(props) {
    const [txt,setTxt]=useState('');
    function handlechange(e){
         
        props.search(e.target.value);
        setTxt(e.target.value);
    }
  return (
    <div style={{textAlign:"center"}}>
        <input type="text" placeholder='Scarch country'
        value={txt}
        onChange={handlechange}
        />
    </div>
  )
}
