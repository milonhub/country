import React, { useEffect, useState } from 'react';

import style from "./Search.module.css";

const Search = (props) => {

    const [searchText,  setSearch] = useState("");
   

function handleChange(event) {
     setSearch(event.target.value)
     
   

}


useEffect(()=> {
    props.onsearchCountry(searchText);
}, [searchText])



  return (
    <div className={style.search}>
        <input type='text' placeholder='Search Country' onChange={handleChange} value={searchText}>
        </input>
    </div>
  )
}

export default Search;