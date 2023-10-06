//Validaciones para el formulario

const validacionFormulario = (dogAux,name) => {
    const errors = {}

    const regex = /^[^0-9]*$/;
    const regexImagURL = /(https?:\/\/.*\.(?:png|jpg|jpeg))/i; 
    //valido el nombre
    if(name==="name"){
        if(dogAux.name==="") errors.name = 'El nombre no puede estar vacío';
        if(dogAux.name.length > 20)  errors.name  = 'El nombre no puede tener mas de 20 caracteres';
        if(!regex.test(dogAux.name)) errors.name = "El nombre no puede contener numeros"

      }
    ///valido la imagen
    if(name === "imagen"){
        if(!regexImagURL.test(dogAux.image)) errors.image = 'La imagen debe ser una URL válida';
        if( dogAux.image === '') errors.image =  'Se requiere de una imagen para crearse';
    }
    /// vallido temperamentos
    if(name === 'temperament') {
        if( dogAux.temperament === '') errors.temperament = 'se requiere por lo menos un temperamento'
    }

    /// valido peso y altura
    if(name === 'height'){
        let altura = dogAux.height.split("-");

        if( altura[0] > altura[1] ) errors.height = 'la altura min no debe superar la altura max';
        if( altura[1] > 200 ) errors.height =  'la alura max no puede superar 2 mts';
    }
    if(name === 'weight'){
        let altura = dogAux.weight.split("-");

        if( altura[0] > altura[1] ) errors.weight = 'El peso min no debe superar el peso max';
        if( altura[1] > 99 ) errors.weight =  'El peso max no puede superar 99 kg';

    }

    //// valido esperanza de vida
    if(name === 'life_span'){
        let vida = dogAux.life_span.split("-");

        if( vida[0] > vida[1] ) errors.image = 'El rango de los valores es incorrecto';
        if( vida[1] > 99 ) errors.image =  'la esperanza de vida es invalida';
    }
    return errors

}

export default validacionFormulario;