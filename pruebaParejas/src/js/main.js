const etqTablero = document.getElementById('tablero');
const etqCartas = document.querySelectorAll('#tablero img');

/*of = nodeLists
* in = array */

for (let img of etqCartas) {
    addEventListener('click', event => {
        let cartaClicada = event.target;
        girarCarta(cartaClicada);

    })
}
