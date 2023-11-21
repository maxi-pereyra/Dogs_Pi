import React from 'react'
import style from './Search.module.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Search = ({onSearch , handleChange}) => {
  return (
    <InputGroup className="mb-3">
        <Button variant="outline-secondary" onClick={onSearch}>
          buscar
        </Button>
        <Form.Control
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
          onChange={handleChange} placeholder='buscar'
        />
      </InputGroup>
  )
}

export default Search