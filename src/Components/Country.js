import React from 'react';
import style from "./Country.module.css";

const Country = (props) => {
    const {name, flags, population, capital } = props.country;


    
const removeCountry = () =>{
    const countryName = name.common;
    props.onRemoveCountry(countryName);
}
  return (
    <div className={style.container}>
      <div className={style.card}>
      <img src={flags.png} alt='pic'/>
        <p>Country : {name.common}</p>
        <p>population :{population}</p>
        <p>capital :{capital}</p>
        <button className={style.btn} onClick={removeCountry}>Remove</button>
      </div>
       
       
    </div>
  )
}

export default Country
