function girarCarta(index){

    //esta es la carta clicada
    let carta= document.getElementById("carta"+index);

    if (!carta.classList.contains("girada") /*&& jugador.id!=0*/){
        carta.src = "assets/img/cartas/"+enJuego.mazo[index]+".png";
        carta.classList.add("girada");
        enJuego.cartasGiradas.push(index);

        //si hay 2 giradas
        if (enJuego.cartasGiradas.length%2===0){

            //se declara la carta clicada anterior
            let indexCartaAnterior = enJuego.cartasGiradas[enJuego.cartasGiradas.length-2];
            let cartaAnterior = document.getElementById("carta"+indexCartaAnterior);


            //si no son iguales los indices penultimo y ultimo en mazo
            if (enJuego.mazo[indexCartaAnterior]!==enJuego.mazo[index]){

                //se les da la vuelta y se les quita la clase
                setTimeout(()=>{
                    taparCarta(carta);
                    taparCarta(cartaAnterior);
                },500);

                //se eliminan de cartasGiradas
                enJuego.cartasGiradas.pop();
                enJuego.cartasGiradas.pop();

                enJuego.intento++;
                etqIntentos.innerText = enJuego.intento;

            } //si son iguales, se quedan destapadas


        }
    }

    //si estan todas giradas
    if (enJuego.cartasGiradas.length===12){
        etqIntentos.innerText="HAS GANAO";
    }








}

function generarBaraja(){
    let numero=["2","3","4","5","6","7","8","9","10","J","Q","K"];
    let letra=["C","D","H","S"];
    numero.forEach(n => {
        letra.forEach(l => {
            enJuego.mazo.push(n+l);
        });
    });
    enJuego.mazo=_.shuffle(enJuego.mazo);
    enJuego.mazo=enJuego.mazo.slice(0,6);
    enJuego.mazo=enJuego.mazo.concat(enJuego.mazo);
    enJuego.mazo=_.shuffle(enJuego.mazo);
}


function taparCarta(cartaClicada){
    cartaClicada.src="/pruebaParejas/pruebaParejas/src/assets/img/cartas/red_back.png";
    cartaClicada.classList.remove("girada");
}


function generarSrc(){


}

function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}