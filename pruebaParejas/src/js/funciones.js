function girarCarta(cartaClicada){
    cartaClicada.src = generarSrc();
}


function generarSrc(){
    // Clubs (C)
    // A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K
    // Diamonds (D)
    // A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K
    // Hearts (H)
    // A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K
    // Spades (S)
    // A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K
    // DOS DE CADA

    let randomPalo = randomInt(1, 4);
    let randomValor = randomInt(1, 13);
    let src = "/pruebaParejas/pruebaParejas/src/assets/img/cartas/";



    switch (randomValor){
        case 1: src = src.concat("A");
        break;
        case 2: src = src.concat("2");
        break;
        case 3: src = src.concat("3");
        break;
        case 4: src = src.concat("4");
        break;
        case 5: src = src.concat("5");
        break;
        case 6: src = src.concat("6");
        break;
        case 7: src = src.concat("7");
        break;
        case 8: src = src.concat("8");
        break;
        case 9: src = src.concat("9");
        break;
        case 10: src = src.concat("10");
        break;
        case 11: src = src.concat("J");
        break;
        case 12: src = src.concat("K");
        break;
        case 13: src = src.concat("Q");
        break;
    }
    cartaClicadaValor = src[src.length-1];


    switch (randomPalo){
        case 1: src = src.concat("C");
        break;
        case 2: src = src.concat("D");
        break;
        case 3: src = src.concat("H");
        break;
        case 4: src = src.concat("S");
        break;
    }
    cartaClicadaPalo = src[src.length-1];

    src = src.concat(".png");

    return src;
}

function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}