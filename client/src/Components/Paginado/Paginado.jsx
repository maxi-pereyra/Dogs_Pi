import React, { useEffect } from 'react'

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
    <div>
        <button onClick={() => handlePage(1)} disabled={page === 1}>
            inicio
        </button>
        <button onClick={() => handlePage(page - 1)} disabled={page === 1}>
            anterior
        </button>
        {
            NumberPageAux.map((number) => (
                 
                <button
                key={number}
                onClick={() => handlePage(number)}
                >
                {number}
                </button>
            ))
        }
        
         <button onClick={() => handlePage(page + 1)} disabled={page === total}>
            next
        </button>
        <button onClick={() => handlePage(total)} disabled={page === total}>
            fin
        </button>
    </div>
  )
}

export default Paginado