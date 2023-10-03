import React, {useEffect, useState} from 'react';

import Country from "./Country"
import style from "./Countries.module.css";
import Search from './Search';

const  Countries = () => {

    const [countries, setCountries] = useState(null);
    const [isloading, setIsloading] =useState(true);
    const [error, setError] = useState(null);
    const [filtercountries, setFilterCountries] = useState(countries);

    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then((res)=>{
            if(!res.ok){
                throw Error("Country's data not fatched");
            } else {
                return res.json();
            }
        })
        .then((data) =>{
            setCountries(data);
            setFilterCountries(data);
            setIsloading(false);
        })
        .catch((error) => {
            setError(error.message);
            setIsloading(false);
        })
    }, [])
    
    const RemoveCountrty = (remove_country) => {
        
        const filterCountries = filtercountries.filter((country) =>{
            const revName = country.name.common;
           
            return  revName !== remove_country
        })
        

         setFilterCountries(filterCountries);
        
    }
    const searchData = (searchdata) =>{
        const data =searchdata.toLowerCase();
       const searchedCountry =countries && countries.filter((country) => {
        const countryName = country.name.common.toLowerCase();
        return (countryName.startsWith(data))
       })
      

     
       setFilterCountries(searchedCountry);
    }

  

  return (
    <div> 
        <h2>Country App</h2>
        <Search onsearchCountry = {searchData}/>
        {isloading && <p>Data is loading......</p>}
        {error && <p>{error}</p>}
        <div className={style.country_container}>
            {filtercountries && filtercountries.map((country) => {
                return(<div>
                    <Country country={country} onRemoveCountry = {RemoveCountrty} key={country.name.common}  />
                    
                </div>)

            })}
        </div>
        
      
    </div>
  )
}

export default  Countries;