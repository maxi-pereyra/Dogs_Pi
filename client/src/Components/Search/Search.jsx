import React from 'react'

const Search = ({onSearch , handleChange}) => {
  return (
    <div>
      <form >
        <input onChange={handleChange} placeholder='buscar' />
        <button onClick={onSearch}>?</button>
      </form>
    </div>
  )
}

export default Search