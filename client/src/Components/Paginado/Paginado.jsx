import React, { useEffect } from 'react'
import style from './Paginado.module.css'

const Paginado = ({page , total , handlePage}) => {

    const PageNumber = [];
    
    for(let i = 1 ; i <= total ; i ++){
        PageNumber.push(i);
    }
    
    const NumberPageAux = []
    if(page===1 || page===total) NumberPageAux[0] = page;
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
        <button className={style.boton} onClick={() => handlePage(1)} disabled={page === 1}>
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
        </button>
    </div>
  )
}

export default Paginado 