
async function Tablas(nombre) {
    const SHEET_ID = "1uLNHtuM2fcaaCaIXh5lGy-Im5vou6uItiM8YjgiLmL4"

    const url =
    `https://opensheet.elk.sh/${SHEET_ID}/${nombre}`    
    
    try {
    const res = await fetch(url)
    return await res.json()        
    } catch (error) {
        throw new Error(error)
    }

}

async function cargarDatos() {
    
    const programa = await Tablas("Tabla_Principal")

    const fila = programa[0]

    const tesoros = await Tablas("Tesoros")
    const maestros = await Tablas( fila.Tabla_Mejores_Maestros)
    const vida_cristiana = await Tablas( fila.Tabla_Vida_Cristiana)
    try{

const tesoros =
await Tablas("Tesoros")

console.log(tesoros)

Tesoros(tesoros)

}catch(error){

console.log(error)

}
}

function Tesoros(data){

const contenedor =
document.getElementById("data_tesoros")

if(!contenedor){
console.log("No existe #data_tesoros")
return
}

contenedor.innerHTML=""

data.forEach(element=>{

if(!element.Presidente)
return

contenedor.innerHTML += `

<div class="card">

<h3>${element.Presidente ?? ""}</h3>

<p>${element.Presidente_Sala_B ?? ""}</p>

<p>${element.Cantico ?? ""}</p>

<p>${element.Titulo_Tesoros ?? ""}</p>

<p>${element.Discursante ?? ""}</p>

<p>${element.Conductor_Perlas ?? ""}</p>

<p>${element.Lectura_Biblia ?? ""}</p>

<p>${element.Lector_A ?? ""}</p>

<p>${element.Lector_B ?? ""}</p>

</div>

`

})

}

cargarDatos()