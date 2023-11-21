import React from 'react'
import Search from '../Search/Search';
import Sort from '../Sort/Sort';
import { Link } from 'react-router-dom';
//mport style from './Navbar.module.css';
import {  Nav } from "react-bootstrap" ;
import Button from 'react-bootstrap/Button';

const Navigation = ({onSearch,handleChange}) => {
  return (
    <div className='container'>
      <Nav variant="pills" >
        <Nav.Item>
        <Sort></Sort>
        </Nav.Item>
        <Nav.Item>
            <Search onSearch={onSearch} handleChange={handleChange}/>
        </Nav.Item>
        <Nav.Item>
          <Link to={"/form"}>
              <Button> crear perro </Button>
            </Link>
        </Nav.Item>
      </Nav>
    </div>
  )
}

export default Navigation