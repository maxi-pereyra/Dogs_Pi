import React from 'react'
import style from './Search.module.css'

const Search = ({onSearch , handleChange}) => {
  return (
    <div className={style.search_container}>
      
        <input  onChange={handleChange} placeholder='buscar' />
        <button onClick={onSearch}>?</button>
      
    </div>
  )
}

export default Search