const etqTablero = document.getElementById('tablero');
const etqCartas = document.querySelectorAll('#tablero img');

/*of = nodeLists
* in = array */


let cartaClicadaPalo, cartaClicadaValor;
let cartasGeneradas1 = [];
let cartasGeneradas2 = [];

for (let img of etqCartas) {
    img.addEventListener('click', event => {
        let cartaClicada = event.target;
        girarCarta(cartaClicada);

        console.log(cartasGeneradas1);
    })
}
