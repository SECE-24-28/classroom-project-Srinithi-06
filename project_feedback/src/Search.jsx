import React, { useContext } from 'react'
import DataContext from './context/DataContext'

const Search = () => {
   
    const {search,setSearch}=useContext(DataContext)
  return (
    
    <div className="search-box">
           
         <input type="text" placeholder='Type to search here' value={search} onChange={(e)=>setSearch(e.target.value)}></input>
</div>
  )
}

export default Search