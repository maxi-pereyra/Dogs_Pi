import React, { useEffect } from 'react'
import style from './Paginado.module.css'
import Pagination from 'react-bootstrap/Pagination';

const Paginado = ({page , total , handlePage}) => {

    const PageNumber = [];
    
    for(let i = 1 ; i <= total ; i ++){
        PageNumber.push(i);
    }
    
    const NumberPageAux = []
    if(page===2 || page===total) NumberPageAux[0] = page;
    else{NumberPageAux[0] = page-1;
        NumberPageAux[1] = page;
        NumberPageAux[2] = page+1;}

    useEffect(()=>{
        if(page>total){
            handlePage(1);
        }
    },[total])

    return (
    <div className={style.paginado_cont}>
        <Pagination>
            <Pagination.First  onClick={() => handlePage(1)} disabled={page === 1}/>
            <Pagination.Prev onClick={() => handlePage(page - 1)} disabled={page === 1}/>
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Ellipsis />
            {
            NumberPageAux.map((number) => (
                 
                <Pagination.Item key={number}
                onClick={() => handlePage(number)}
                >{number}</Pagination.Item>

            ))
            }
            
            <Pagination.Ellipsis />
            <Pagination.Item>{total}</Pagination.Item>
            <Pagination.Next onClick={() => handlePage(page + 1)} disabled={page === total} />
            <Pagination.Last  onClick={() => handlePage(total)} disabled={page === total}/>
        </Pagination>
        {/* <button className={style.boton} onClick={() => handlePage(1)} disabled={page === 1}>
            inicio
        </button>
        <button className={style.boton}  onClick={() => handlePage(page - 1)} disabled={page === 1}>
            anterior
        </button>
        {
            NumberPageAux.map((number) => (
                 
                <button className={style.boton}
                key={number}
                onClick={() => handlePage(number)}
                >
                .{number}.
                </button>
            ))
        }
        
         <button className={style.boton} onClick={() => handlePage(page + 1)} disabled={page === total}>
            next
        </button>
        <button className={style.boton} onClick={() => handlePage(total)} disabled={page === total}>
            end
        </button> */}
    </div>
  )
}

export default Paginado 