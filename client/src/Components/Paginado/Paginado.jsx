import React from 'react'

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

    return (
    <div>
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
    </div>
  )
}

export default Paginado