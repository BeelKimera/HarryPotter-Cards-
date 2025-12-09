`use strict`

// JSON es una sintaxis para compartir datos, compatible con asi todos los lengajes de programación

/* Así está escrito JSON
[
    {"nombre": "Pedro", "edad": 24},
    {"nombre": "Pepe", "edad": 30}
]
*/


// Cargar nuestro archivo JSON, se utiliza Fetch (API de JavaScript)



/* response, data y error son variables, se les puede cambiar el nombre

fetch('./alumnos.json')                                 ordenamos a fetch que busque el archivo
.then(response => response.json())                      se prepara para buscar los datos, transforma response en formato JSON
.then(data => console.log(data))                        imprime la informacion (si la encuentra) en la consola
.catch(error => console.log(error))                     para cuando no consigue los archivos se ejecuta error en la consola
.finally(data => console.log('proceso terminado'))      para cuando acaba
*/

const gridContainer = document.querySelector(`#grid`)

fetch('https://hp-api.onrender.com/api/characters')
    .then(response => response.json())
    .then(data => {
        data.forEach((personaje) => {
            let newDiv = document.createElement(`div`)
            newDiv.classList.add(`grid__item`)
            newDiv.innerHTML = `
            <img src="${personaje.image}"> 
            <h2>${personaje.name}</h2>
            <p class="especie">Clase: ${personaje.species}</p>
            <p class="cumple">Nació el ${personaje.dateOfBirth}</p>
            <p class="casa">Pertenece a la casa de ${personaje.house}</p>
            `

            if(personaje.house === `Gryffindor`){
                newDiv.style.background = `#740001`
                newDiv.style.color = `#d3a625`
            } else if (personaje.house === `Hufflepuff`) {
                newDiv.style.background = `#ffdb00`
                newDiv.style.color = `#000000`
            } else if (personaje.house === `Slytherin`) {
                newDiv.style.background = `#1a472a`
                newDiv.style.color = `#aaaaaa`
            } else if (personaje.house === `Ravenclaw`) {
                newDiv.style.background = `#0e1a40`
                newDiv.style.color = `#946b2d`
            } else {
                newDiv.style.background = `rgba(122, 107, 105, 0.2)`
            }

            if (!personaje.image ){
                newDiv.querySelector(`img`).src = `https://i.pinimg.com/236x/a6/cd/ac/a6cdac8c77f6b6d77913ee398a7617a9.jpg`
            }

            if (!personaje.species){
                newDiv.querySelector(`.especie`).innerText = `No se sabe de qué especie es`
            }

            if (!personaje.dateOfBirth){
                newDiv.querySelector(`.cumple`).innerText = `Muy joven o muy viejo`
            }

            if (!personaje.house){
                newDiv.querySelector(`.casa`).innerText = `No ha estudiado`
            }
            gridContainer.appendChild(newDiv)
        })
    })
    .catch(error => console.error(error))


// grid, card con cada coso y que cada personaje segun su casa tenga el color de esa casa


