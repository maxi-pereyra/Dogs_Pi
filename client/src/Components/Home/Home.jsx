import React from 'react'
import { useEffect , useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Cards from '../Cards/Cards';
import { getAllDogs , getDogByName, cleanDetail} from '../../Redux/Actions';
import Navbar from '../Navbar/Navbar';
import Paginado from '../Paginado/Paginado';

function Home() {

  const dispatch = useDispatch();
  const dogs = useSelector((state) => state.dogs)
  const [name,setName] = useState('')
  const[current,setCurrent] = useState(1)
  const elementsPerPagina = 8;

  const handleChange = (event) =>{
    setName(event.target.value.toLowerCase());
    console.log("nombre:",event.target.value)
  }

  const onSearch = async (event) => {
    event.preventDefault();
    dispatch(getDogByName(name))
  }

  const handlePage = (pageNumber) => {
    setCurrent(pageNumber);
  }


  const startIndex = (current - 1) * elementsPerPagina;
  const endIndex = startIndex + elementsPerPagina;

  const currentDogs = dogs?.slice(startIndex,endIndex);

  const totalPage = Math.ceil(dogs?.length/elementsPerPagina)



  useEffect (() => {
    if(!dogs?.length){
      dispatch(getAllDogs());
    }
    return()=>{
      dispatch(cleanDetail())
    }
  },[dispatch,dogs])


  return (
    <div>
        <Navbar handleChange={handleChange} onSearch={onSearch}></Navbar>
        <Paginado handlePage={handlePage} page={current} total={totalPage}></Paginado>
        <Cards dogs={currentDogs}></Cards>
    </div>
  )
}

export default Home