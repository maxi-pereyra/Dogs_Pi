import React from 'react'
import Search from '../Search/Search';
import Sort from '../Sort/Sort';

const Navbar = ({onSearch,handleChange}) => {
  return (
    <div>
      <div>
      <p>Ordenar por:</p>
      <Sort></Sort>
      </div>
      <Search onSearch={onSearch} handleChange={handleChange}/>
    </div>
  )
}

export default Navbar