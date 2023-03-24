 
import React,{useState,useEffect} from "react";
import './App.css'
import Countries from "./Countries";
 
import Search from "./Search";
const url="https://restcountries.com/v3.1/all";
function App() {
  const [isloding,setIsloding]=useState(null);
  const [error,serError]=useState(null);
  const [countries,setCountries]=useState([]);
  const [maindata,setmaindata]=useState([]);
   
  const fetchData=async (url)=>{
     try{
      setIsloding(true);
    const res=await fetch(url);
    const data=await res.json();
     
    setCountries(data);
    setmaindata(data);
    
    setIsloding(false);
     }
     catch(error){
      setIsloding(false);
      serError(error)
     }

  }
  useEffect(()=>{
    fetchData(url);
  },[])
  function removeCountry(name){
    const newdata=maindata;
    const filted= newdata.filter((countries)=>
      countries.name.common!==name
    )
    setCountries(filted);
    setmaindata(filted);
     
  }
  function findcountry(name){
   
    name=name.toLowerCase();
    if(name.length==0){
      setCountries(maindata);
    }
    else{

      const newdata=maindata;
      const filted= newdata.filter((countries)=>{
       const ans=countries.name.common.toLowerCase();
       return ans.startsWith(name);
        
      }
    )
    setCountries(filted);

    }
     
    
  }
  return (
    <div >
      
     <h1>Country App</h1>
     <Search search={findcountry}/>
     {isloding&& <p>Loding ...</p>}
     {error && <h2>{error.message}</h2> }
     {countries&& <Countries countries={countries}  remove={removeCountry}/> }
    </div>
  );
}

export default App;
