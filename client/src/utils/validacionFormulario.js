//Validaciones para el formulario

/* let errors = {  image:'',
name:'*El nombre es reqerido',
heightMin:"*La altura es requerida",
heightMax:"*La altura es requerida",
weightMin:"*El peso es requerida",
weightMax:"*El peso es requerida",
life_span_min:"*La esperanza de vida es requerida",
life_span_max:"*La esperanza de vida es requerida",
temperament:"*Es necesario al menos un temperamento"} */

const validacionFormulario = (dogAux,errors,name) => {

    const regex = /^[^0-9]*$/;
    const regexImagURL = /(https?:\/\/.*\.(?:png|jpg|jpeg))/i; 
    const numregex = /^\d+$/;
    //valido el nombre
    if(name==="name"){
        /* if(dogAux.name==="")  errors.name = 'El nombre es requerido';
        if(dogAux.name.length > 20)  errors.name = 'El nombre no puede tener mas de 20 caracteres';
        if(!regex.test(dogAux.name)) errors.name = "El nombre no puede contener numeros" */
        if(dogAux.name==="") return {...errors, [name] : 'El nombre es requerido'};
        if(dogAux.name.length > 20)  return {...errors, [name]  : 'El nombre no puede tener mas de 20 caracteres'};
        if(!regex.test(dogAux.name)) return {...errors, [name] : "El nombre no puede contener numeros"}
        return {...errors , [name]:''}
      }
    ///valido la imagen
    if(name === "image"){
        if(!regexImagURL.test(dogAux.image)) return {...errors, [name] : 'La imagen debe ser una URL válida'};
        return {...errors , [name]: ''}
    }
    /// vallido temperamentos
    if(name === 'temperament') {
        if( dogAux.temperament === '') return {...errors , [name] : 'se requiere por lo menos un temperamento'};
        return {...errors , [name]: ''}
    }

    /// valido peso y altura
    if(name === 'heightMin'){

        if( !numregex.test(dogAux.heightMin)) return {...errors , [name] : 'La altura debe ser un numero valido;'}
        if( !dogAux.heightMin > 0 ) return {...errors , [name] :  'la alura min debe ser un valor valido'};
        return {...errors , [name]:''}
    }
    if(name === 'heightMax'){

        if( !numregex.test(dogAux.heightMax)) return {...errors , [name] : 'La altura debe ser un numero valido;'}
        if( parseInt(dogAux.heightMin) > parseInt(dogAux.heightMax)) return {...errors , [name] : 'la altura min no debe superar la altura max'};
        if( dogAux.heightMax > 200 ) return {...errors, [name] :  'la alura max no puede superar 2 mts'};
        return {...errors , [name]:''}

    }
    if(name === 'weightMin'){

        if( !numregex.test(dogAux.weightMin)) return {...errors , [name] : 'El peso debe ser un numero valido;'}
        if( !dogAux.weightMin > 0 ) return {...errors, [name] :  'El peso max no puede superar 99 kg'};
        return {...errors , [name]:''}


    }
    if(name === 'weightMax'){

        if( !numregex.test(dogAux.weightMax)) return {...errors, [name] : 'El peso debe ser un numero valido;'}
        if( parseInt(dogAux.weightMin) > parseInt(dogAux.weightMax)) return {...errors , [name] : 'El peso min no debe superar el peso max'};
        if( dogAux.weightMax > 150 ) return {...errors, [name] :  'El peso max no puede superar 150 kg'};
        return {...errors , [name]:''}

    }

    //// valido esperanza de vida
    if(name === 'life_span_min'){
        
        if(!numregex.test(dogAux.life_span_min)) return {...errors, [name] : " El rango tiene que ser un numero valido"};
        if( !dogAux.life_span_min > 0 ) return {...errors, [name] :  'la esperanza de vida es invalida'};
        return {...errors , [name]:''}

    }
    if(name === 'life_span_max'){
        
        if(!numregex.test(dogAux.life_span_max)) return {...errors, [name] : " El rango tiene que ser un numero valido"}
        if( parseInt(dogAux.life_span_min) > parseInt(dogAux.life_span_max)) return {...errors, [name] : " El rango tiene que ser 'min - max' "}
        if( !dogAux.life_span_min > 0 ) return {...errors, [name] :  'la esperanza de vida es invalida'};
        return {...errors , [name]:''}

    }


}

export default validacionFormulario;