const sectionSeleccionarAtaque = document.getElementById("seleccionar_ataque")//seccion de selecionar ataque
const sectionReiniciar = document.getElementById("reiniciar")//seccion de reiniciar el juego
const botonMascotaJugador = document.getElementById("boton_mascota")//boton de seleccionar mascota


const sectionSeleccionarMascota = document.getElementById("seleccionar_mascota")//seccion donde se pone el titulo y ingresan las mascotas
const mascotaJugador =  document.getElementById("mascota_jugador")//nombre de la mascota del jugador

const mascotaEnemigo =  document.getElementById("mascota_enemigo")//nombre de la mascota del enemigo

const spanVidasJugador = document.getElementById("vidas_jugador")//vidas del jugador
const spanVidasEnemigo = document.getElementById("vidas_enemigo")//vidas del enemigo

const sectionMensajes = document.getElementById("resultado")//mensaje donde se imprime la bienvenida y el resultado de los ataques
const ataques_jugador = document.getElementById("ataques_jugador")//guarda los ataques que realiza el jugador
const ataques_enemigo = document.getElementById("ataques_enemigo")//guarda los ataques que realiza el enemigo

const contenedorTarjetas=document.getElementById("contenedor_tarjetas")//parte donde se imprimen los mokepones a elegir
const contenedorAtaques= document.getElementById("contenedor_ataques")//parte donde se imprimen los ataques a elegir


let mokepones = []//arreglo que guarda las caracteristicas de los mokepones que se agregan asi: mokepon.push(variable)
let ataqueEnemigo=[]//guarda el ataque aleatorio del enemigo
let opcionDeMokepones//nos da el mokepon que elegimos 
let mascotaJugadorEscogida//mascota que escogio el jugador
let ataquesMokepon
let resultado
let botonFuego
let botonAgua 
let botonTierra 
let botones = []
let ataqueJugador=[]
let ataquesMokeponEnemigo
let indexAtaqueJugador
let  indexAtaqueEnemigo
let victoriasJugador=0
let victoriasEnemigo=0

let vidasJugador = 3
let vidasEnemigo = 3

class Mokepon
{
    constructor(nombre, foto, vida)
    {
        this.nombre= nombre
        this.foto=foto
        this.vida=vida
        this.ataques= []
    }
}

let hipodoge = new Mokepon("hipodoge", "./imagenes/hipodoge.png", 3)

let ratigueya = new Mokepon("ratigueya", "./imagenes/ratigueya.png", 3)

let capipepo = new Mokepon("capipepo", "./imagenes/capipepo.png", 3)

hipodoge.ataques.push(
    {nombre:"💧", id:"boton_agua"},
    {nombre:"💧", id:"boton_agua"},
    {nombre:"💧", id:"boton_agua"},
    {nombre:"🔥", id:"boton_fuego"},    
    {nombre: "🌱", id:"boton_tierra"},    
)

capipepo.ataques.push(
    {nombre:"🌱", id:"boton_tierra"},
    {nombre:"🌱", id:"boton_tierra"},
    {nombre:"🌱", id:"boton_tierra"},
    {nombre:"💧", id:"boton_agua"},
    {nombre: "🔥", id:"boton_fuego"},
)

ratigueya.ataques.push(
    {nombre:"🔥", id:"boton_fuego"},
    {nombre:"🔥", id:"boton_fuego"},
    {nombre:"🔥", id:"boton_fuego"},
    {nombre:"💧", id:"boton_agua"},
    {nombre: "🌱", id:"boton_tierra"},
)

mokepones.push(hipodoge,capipepo,ratigueya)


function iniciarJuego()
{    
    sectionSeleccionarAtaque.style.display = "none"    
    mokepones.forEach((mokepon)=>{
        opcionDeMokepones = 
        `
        <input type="radio" name="mascota" id=${mokepon.nombre}>
        <label class="tarjeta_de_mokepon" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>
        `
    contenedorTarjetas.innerHTML+=opcionDeMokepones
    })
     hipodoge = document.getElementById("hipodoge")
     capipepo = document.getElementById("capipepo")
     ratigueya = document.getElementById("ratigueya")

    sectionReiniciar.style.display = "none"   
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)   
    reiniciar.addEventListener("click", reiniciarJuego)
 

}

function seleccionarMascotaJugador()
{
    sectionSeleccionarAtaque.style.display = "flex"   
    sectionSeleccionarMascota.style.display = "none"  
    
    if(hipodoge.checked)
    {
        mascotaJugador.innerHTML =hipodoge.id
        mascotaJugadorEscogida =hipodoge.id
    }
    else if(capipepo.checked)
    {
        mascotaJugador.innerHTML =capipepo.id
        mascotaJugadorEscogida=capipepo.id
    }
    else if(ratigueya.checked)
    {
        mascotaJugador.innerHTML =ratigueya.id
        mascotaJugadorEscogida=ratigueya.id
    }
    else 
    alert("Escoge una mascota")

    extraerAtaques(mascotaJugadorEscogida)
    seleccionarMascotaEnemigo()
    
}

function  extraerAtaques(mascotaJugadorEscogida)
{
    let ataques 
    for (let i =0;  i < mokepones.length; i++) 
    {
        if (mascotaJugadorEscogida == mokepones[i].nombre) 
        {
            ataques=mokepones[i].ataques
        }
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques)
{
    ataques.forEach((ataque)=>
    {
        ataquesMokepon=
        `
        <button id=${ataque.id} class="boton_ataque BAtaque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML+=ataquesMokepon
    })

     botonFuego = document.getElementById("boton_fuego")
     botonAgua = document.getElementById("boton_agua")
     botonTierra = document.getElementById("boton_tierra")
     botones=document.querySelectorAll(".BAtaque")    
}

function secuenciaAtaque()
{
    botones.forEach((boton)=>{
        boton.addEventListener("click",(e)=>{
            console.log(e)
            if (e.target.textContent == "🔥") {
                ataqueJugador.push("🔥")
                console.log(ataqueJugador)
                boton.style.background = "#112f58"
                boton.disabled = true  
            } else if (e.target.textContent == "💧") {
                ataqueJugador.push("💧")
                console.log(ataqueJugador)
                boton.style.background = "#112f58"
                boton.disabled = true  
            } else if(e.target.textContent == "🌱") {
                ataqueJugador.push("🌱")
                console.log(ataqueJugador)
                boton.style.background = "#112f58"
                boton.disabled = true  
            }
            ataqueAleatorioEnemigo()
        })
    })
    
}

function seleccionarMascotaEnemigo()
{
    let mascotaAleatoria = aleatorio(0, mokepones.length-1)   

    mascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre
    ataquesMokeponEnemigo=mokepones[mascotaAleatoria].ataques

    secuenciaAtaque()
}


function ataqueAleatorioEnemigo()
{
    let ataqueAleatorio = aleatorio(0, ataquesMokeponEnemigo.length-1)
    
    if (ataqueAleatorio==0 || ataqueAleatorio == 1)
    {
        ataqueEnemigo.push("🔥")
    }
    else if (ataqueAleatorio==3 || ataqueAleatorio==4)
    {
        ataqueEnemigo.push("💧")
    }
    else 
    {
        ataqueEnemigo.push("🌱")
    }
    console.log(ataqueEnemigo)
    iniciarPelea()
}

function iniciarPelea() 
{
    if (ataqueJugador.length==5) {
        combate()
    }
}

function indexAmbosOponentes(jugador, enemigo)
{
    indexAtaqueJugador=ataqueJugador[jugador]
    indexAtaqueEnemigo=ataqueEnemigo[enemigo]
}

function combate()
{  
    for (let index = 0; index < ataqueJugador.length; index++) {
        if (ataqueJugador[index]==ataqueEnemigo[index]) {
            indexAmbosOponentes(index, index)
            crearMensaje("EMPATE")
        }else if (ataqueJugador[index]=="🔥" && ataqueEnemigo[index]=="🌱") {
            indexAmbosOponentes(index,index)
            crearMensaje("GANASTE")
            victoriasJugador ++
            spanVidasJugador.innerHTML = victoriasJugador
        }else if (ataqueJugador[index]=="💧" && ataqueEnemigo[index]=="🔥") {
            indexAmbosOponentes(index,index)
            crearMensaje("GANASTE")
            victoriasJugador ++
            spanVidasJugador.innerHTML = victoriasJugador
        }else if (ataqueJugador[index]=="🌱" && ataqueEnemigo[index]=="💧") {
            indexAmbosOponentes(index,index)
            crearMensaje("GANASTE")
            victoriasJugador ++
            spanVidasJugador.innerHTML = victoriasJugador
        }else {
            crearMensaje("PERDISTE")
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML=victoriasEnemigo
        }
        
    }

    revisarVidas()
}

function revisarVidas()
{
    if (victoriasJugador===victoriasEnemigo)
    {
        crearMensajeFinal("ESTO FUE UN EMPATE!!")
    }
    else if (vidasJugador>victoriasEnemigo)
    {
        crearMensajeFinal("FELICIDADES, GANASTE!! :)")
    }else
    {
        crearMensajeFinal("LO SIENTO, PERDISTE:(")
    }
}

function crearMensaje(resultado)
{  
    let nuevoAtaqueJugador = document.createElement("p")
    let nuevoAtaqueEnemigo = document.createElement("p")

    sectionMensajes.innerHTML=resultado
    nuevoAtaqueJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueEnemigo.innerHTML = indexAtaqueEnemigo
        
    
    ataques_jugador.appendChild(nuevoAtaqueJugador)
    ataques_enemigo.appendChild(nuevoAtaqueEnemigo)
}

function crearMensajeFinal(resultadoFinal)
{   
   sectionMensajes.innerHTML= resultadoFinal
    sectionReiniciar.style.display = "block"
}

function reiniciarJuego()
{
    location.reload()
}

function aleatorio(min, max)
{
    return Math.floor(Math.random()*(max-min + 1) + min)
}

window.addEventListener("load", iniciarJuego)