import React from 'react'
import { useEffect , useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Cards from '../Cards/Cards';
import { getAllDogs } from '../../Redux/Actions';

function Home() {

  const dispatch = useDispatch();
  const dogs = useSelector((state) => state.dogs)

  useEffect (() => {
    dispatch(getAllDogs());

  },[dispatch])
  return (
    <div>
        <h2>Perros</h2>
        <Cards dogs={dogs}></Cards>
    </div>
  )
}

export default Home