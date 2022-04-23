class Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        this._nombre = nombre;
        this._edad = edad;
        this._img = img,
            this._comentarios = comentarios,
            this._sonido = sonido
    }
    get nombre() {
        return this._nombre;
    }
    get edad() {
        return this._edad;
    }
    get img() {
        return this._img;
    }
    get comentarios() {
        return this._comentarios;
    }
    set comentarios(comentarios) {
        this._comentarios = comentarios;
    }
    get sonido() {
        return this._sonido;
    }
}

class Leon extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
    rugir() {
        console.log("Roar!!");
    }
}



class Lobo extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
    aullar() {
        console.log("Awuu!");
    }
}



class Oso extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
    grunir() {
        console.log("Grrr!");
    }

}


class Serpiente extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
    sisear() {
        console.log("Ssss!");
    }
}


class Aguila extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
    chillar() {
        console.log("Chhh!");
    }
}

/////


async function getAnimales() {
    const response = await fetch("/animales.json");
    return await response.json();
}

(() => {
    const animalesSalvajes = []
    let listadoAnimales;

    getAnimales().then((datos) => {
        listadoAnimales = datos;

    });
    //Capturar elementos del DOM
    const selectAnimal = document.querySelector("#animal");
    const selectEdad = document.querySelector("#edad");
    const inputComentarios = document.querySelector("#comentarios");
    const selectMostrar = document.querySelector("#preview");
    const divAnimales = document.querySelector("#Animales");
    const btnRegistrar = document.querySelector("#btnRegistrar");
    const bodyModal = document.querySelector ("#exampleModal .modal-body");
    const audioPlayer = document.querySelector ("#player");


    //Capturar seleccion de animal y filtrar
    selectAnimal.addEventListener("change", async (event) => {
        const animalSeleccionado = event.target.value;
        const filtro = listadoAnimales.find((animal) => animal.name === animalSeleccionado)

        //Mostrar imagen de animal
        const animalFoto = `/assets/imgs/${filtro.imagen}`

        selectMostrar.style.backgroundImage = `url(${animalFoto})`

        //Capturar datos de formulario

        btnRegistrar.addEventListener("click",(e) => {
            e.preventDefault ();
            e.stopImmediatePropagation ();
            const animalSeleccionado = selectAnimal.value;
            const rangoDeEdad = selectEdad.value;
            const comentarios = inputComentarios.value;
            const filtro = listadoAnimales.find((animal) => animal.name === animalSeleccionado)
            switch (animalSeleccionado) {
                case "Leon": {
                    const leon = new Leon(animalSeleccionado, rangoDeEdad, filtro.imagen, comentarios, filtro.sonido);
                    animalesSalvajes.push(leon);
                } break;

                case "Oso": {
                    const oso = new Oso(animalSeleccionado, rangoDeEdad, filtro.imagen, comentarios, filtro.sonido);
                    animalesSalvajes.push(oso);
                } break;

                case "Lobo": {
                    const lobo = new Lobo(animalSeleccionado, rangoDeEdad, filtro.imagen, comentarios, filtro.sonido);
                    animalesSalvajes.push(lobo);
                } break;

                case "Serpiente": {
                    const serpiente = new Serpiente(animalSeleccionado, rangoDeEdad, filtro.imagen, comentarios, filtro.sonido);
                    animalesSalvajes.push(serpiente);
                } break;

                case "Aguila": {
                    const aguila = new Aguila(animalSeleccionado, rangoDeEdad, filtro.imagen, comentarios, filtro.sonido);
                    animalesSalvajes.push(aguila);
                } break;

                default:
                    break;
                    
            }
            htmlAnimalesSalvajes (animalesSalvajes);
        });
       
    })
        //Agregar animales al listado
   function htmlAnimalesSalvajes(animalesSalvajes){
            divAnimales.innerHTML = " ";
            animalesSalvajes.forEach((animal) =>{
                const card = document.createElement("div");
                const modalImg = document.createElement ("img");
                const cardBtn = document.createElement ("button");

                card.classList.add("card");
                card.classList.add("cardAnimales");
                modalImg.src = `assets/imgs/${animal.img}`;
                modalImg.classList.add("card-img-top");

                cardBtn.classList.add("btn");
                cardBtn.classList.add ("btn-secondary");
                cardBtn.innerHTML = `<img src="/assets/imgs/audio.svg" width="35px" height="35px">` 

    //Lógica del modal y el botón de sonido
                modalImg.addEventListener("click", () =>{
                    bodyModal.innerHTML =`
                    <img src= "assets/imgs/${animal.img}"}>
                    <p class="text-center text-white mt-1">${animal.edad}</p>
                    <h6 class="text-center text-white">Comentarios:</h6>
                    <p class="text-center text-white">${animal.comentarios}</p>`
                    $('#exampleModal').modal('show')
                })

                cardBtn.addEventListener("click", () =>{
                    audioPlayer.setAttribute("src", `assets/sounds/${animal.sonido}`);
                    audioPlayer.load ();
                    audioPlayer.play();
                })

                card.appendChild(modalImg);
                card.appendChild(cardBtn);

            divAnimales.appendChild (card);
            });
        } 
})();
