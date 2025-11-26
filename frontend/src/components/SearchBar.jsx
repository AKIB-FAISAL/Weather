import React, { useState } from "react";
import './SearchBar.css'


const SearchBar = ({onsearch}) =>{
    const [city, setCity] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        if (city){
            onsearch(city);
            setCity('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
          <span className="search-icon">🔍</span>

          <input type="text" className="search-input" 
             value={city}
             onChange={
                (e)=> setCity(e.target.value)}
                placeholder="Dhaka"
                 required
          
          />

        </form>
    )
}
 export default SearchBar;