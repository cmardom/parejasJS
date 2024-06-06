//etq
const etqTablero = document.getElementById('tablero');
const etqCartas = document.querySelectorAll('#tablero img');
const etqIntentos = document.getElementById('intentos');



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

generarBaraja();

for (let i = 0; i < 12; i++) {
    document.getElementById("carta"+i)
        .addEventListener("click", ()=>girarCarta(i));
}





/*of = nodeLists
* in = array */
