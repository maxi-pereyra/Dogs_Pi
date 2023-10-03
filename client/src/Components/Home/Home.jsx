import React from 'react'
import { useEffect , useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Cards from '../Cards/Cards';
import { getAllDogs , getDogByName} from '../../Redux/Actions';
import Navbar from '../Navbar/Navbar';

function Home() {

  const dispatch = useDispatch();
  const dogs = useSelector((state) => state.dogs)
  const [name,setName] = useState('')
  
  const handleChange = (event) =>{
    setName(event.target.value.toLowerCase());
    console.log("nombre:",event.target.value)
  }

  const onSearch = async (event) => {
    event.preventDefault();
    dispatch(getDogByName(name))
  }

  console.log(name)
  useEffect (() => {
    dispatch(getAllDogs());

  },[dispatch])


  return (
    <div>
        <h2>Perros</h2> 
        <Navbar handleChange={handleChange} onSearch={onSearch}></Navbar>
        <Cards dogs={dogs}></Cards>
    </div>
  )
}

export default Home