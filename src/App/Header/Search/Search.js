import React from 'react'
import searchIcon from './search.png'
import './search.css'
const Search= ()=>
{

        return(
            <>
                <div className="search-post">
                        <input type="text" placeholder="SEARCH POST" className="search"/> 
                        <img src={searchIcon} alt=""/>
                </div>
            </>
        )

}
export default Search