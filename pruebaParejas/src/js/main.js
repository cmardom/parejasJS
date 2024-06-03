const etqTablero = document.getElementById('tablero');
const etqCartas = document.querySelectorAll('#tablero img');
const etqIntentos = document.getElementById('intentos');

/*of = nodeLists
* in = array */


let cartaClicadaPalo, cartaClicadaValor;
let cartasGeneradas1 = [];
let cartasGeneradas2 = [];
let contandorIntentos = 0;

for (let img of etqCartas) {
    img.addEventListener('click', event => {
        contandorIntentos++;
        let cartaClicada = event.target;
        girarCarta(cartaClicada);
        etqIntentos.innerText = contandorIntentos.toString();


        setTimeout(() => {
            if (!comprobarPares()){
                taparCarta(cartaClicada);

            }
        }, "1000");

    })
}
