//http-provider
const obtenerJugadores = () =>{
    let url = "http://localhost:3000/jugador";
    return fetch(url).then(resp => resp.json());
}


//etq
const etqIntentos = document.getElementById('intentos');
const etqUsuario = document.getElementById("usuario");
const etqPass = document.getElementById("passwd");

//botones
const btnConsultar = document.getElementById("botonConsultar");
btnConsultar.addEventListener("click", () => cargarJugadorLS());



//componentes
let jugador = {
    id: 0,
    nombre: "",
    resultado: [],
};

let enJuego={
    mazo:[],
    cartasGiradas: [],
    intento:0,
};


//juego
generarBaraja();
for (let i = 0; i < 12; i++) {
    document.getElementById("carta"+i)
        .addEventListener("click", ()=>girarCarta(i));
}





/*of = nodeLists
* in = array */
