const etqTablero = document.getElementById('tablero');
const etqCartas = document.querySelectorAll('#tablero img');

for (let img of etqCartas) {
    addEventListener('click', event => {
        girarCarta();

    })
}
