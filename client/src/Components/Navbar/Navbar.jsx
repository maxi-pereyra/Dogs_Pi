import React from 'react'
import Search from '../Search/Search';
import Sort from '../Sort/Sort';
import { Link } from 'react-router-dom';

const Navbar = ({onSearch,handleChange}) => {
  return (
    <div>
      <div>
      <p>Ordenar por:</p>
      <Sort></Sort>
      </div>
      <div>
      <Search onSearch={onSearch} handleChange={handleChange}/>
      <Link to={"/form"}>
        <button>CREAR CAN</button>
      </Link>
      </div>
      <hr />

    </div>
  )
}

export default Navbar