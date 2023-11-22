import React from 'react'
import Search from '../Search/Search';
import Sort from '../Sort/Sort';
import { Link } from 'react-router-dom';
//mport style from './Navbar.module.css';
import   Nav   from "react-bootstrap/Nav" ;
import  Navbar from 'react-bootstrap/Navbar';
import  Container  from 'react-bootstrap/container';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navigation = ({onSearch,handleChange}) => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
          <Navbar.Brand href="/"> Dogs
            </Navbar.Brand>   
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav  className='ms-auto'>
              <NavDropdown title="Filtros" id="basic-nav-dropdown">

                <Nav.Item>
                <Sort></Sort>
                </Nav.Item>
              
              </NavDropdown>
                <Nav.Item>
                    <Search onSearch={onSearch} handleChange={handleChange}/>
                </Nav.Item>
                <Nav.Item>
                  <Link to={"/form"}>
                      <Button> crear perro </Button>
                    </Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation