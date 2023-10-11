import React from 'react'
import Search from '../Search/Search';
import Sort from '../Sort/Sort';
import { Link } from 'react-router-dom';
import style from './Navbar.module.css';

const Navbar = ({onSearch,handleChange}) => {
  return (
    <div className={style.navbar}>
      <div>
      <Sort></Sort>
      </div>
      <div>
      <Search onSearch={onSearch} handleChange={handleChange}/>
      </div>
      <div>
      <Link to={"/form"}>
        <button className={style.button_crear}>CREAR PERRO</button>
      </Link>
      </div>
      <hr />

    </div>
  )
}

export default Navbar