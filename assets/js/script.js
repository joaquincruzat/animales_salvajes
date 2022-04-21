class Animal {
    constructor (nombre,edad,img,comentarios,sonido){
        this._nombre = nombre;
        this._edad = edad;
        this._img = img,
        this._comentarios = comentarios,
        this._sonido = sonido
    }
    get nombre (){
        return this._nombre;
    }
    get edad () {
        return this._edad;
    }
    get img (){
        return this._img;
    }
    get comentarios (){
        return this._comentarios;
    }
    set comentarios (comentarios){
        this._comentarios = comentarios;
    }
    get sonido (){
        return this._sonido;
    }
}

class Leon extends Animal {
    constructor (nombre, edad, img, comentarios, sonido){
        super (nombre, edad, img, comentarios, sonido)
    }
    rugir (){
        console.log ("Roar!!");
    }
}



class Lobo extends Animal {
    constructor (nombre, edad, img, comentarios, sonido){
        super (nombre, edad, img, comentarios, sonido)
    }
    aullar (){
        console.log ("Awuu!");
    }
}



class Oso extends Animal {
    constructor (nombre, edad, img, comentarios, sonido){
        super (nombre, edad, img, comentarios, sonido)
    }
    grunir (){
        console.log ("Grrr!");
    }
    
}


class Serpiente extends Animal {
    constructor (nombre, edad, img, comentarios, sonido){
        super (nombre, edad, img, comentarios, sonido)
    }
    sisear (){
        console.log ("Ssss!");
    }
}


class Aguila extends Animal {
    constructor (nombre, edad, img, comentarios, sonido){
        super (nombre, edad, img, comentarios, sonido)
    }
    chillar () {
        console.log ("Chhh!");
    }    
}

/////

(()=>{
    async function getAnimales(){
    const response = await fetch("/animales.json");
    return await response.json();
}
let listadoAnimales;

getAnimales().then( (datos) =>{
    listadoAnimales = datos;

});

const selectAnimal = document.querySelector ("#animal");
const selectEdad = document.querySelector ("#edad");
const inputComentarios = document.querySelector ("#comentarios");
const selectMostrar = document.querySelector ("#preview");
const btnRegistrar = document.querySelector ("#btnRegistrar")


//Capturar seleccion de animal y filtrar
selectAnimal.addEventListener ("change", async (event) =>{
const animalSeleccionado = event.target.value;
const filtro = listadoAnimales.find((animal)=> animal.name === animalSeleccionado)

//Mostrar imagen de animal
const animalFoto = `/assets/imgs/${filtro.imagen}`

selectMostrar.style.backgroundImage = `url(${animalFoto})`

//Capturar datos de formulario

btnRegistrar.addEventListener ("click",()=>{
    const animalSeleccionado = selectAnimal.value;
    const rangoDeEdad = selectEdad.value;
    const comentarios = inputComentarios.value;
})
})
})();
