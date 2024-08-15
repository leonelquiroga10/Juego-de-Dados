
//seleccion de elementos

const jugador0 = document.querySelector('.player--0')
const jugador1 = document.querySelector('.player--1')
const puntos0 = document.querySelector('#score--0');
const puntos1 = document.getElementById('score--1');
const puntosActuales0 = document.getElementById('current--0')
const puntosActuales1 = document.getElementById('current--1')
const dado = document.querySelector('.dice');
const btnNuevo = document.querySelector('.btn--new');
const btnGirar = document.querySelector('.btn--roll');
const btnApretar = document.querySelector('.btn--hold');

//condiciones
var puntajesFinales, puntajeActual, jugadorActivo, jugando;

const iniciarJuego = function () {
    puntajesFinales = [0, 0]
    puntajeActual = 0;
    jugadorActivo = 0;
    jugando = true;
    puntos0.textContent = 0;
    puntos1.textContent = 0;
    puntosActuales0.textContent = 0;
    puntosActuales1.textContent = 0;

    dado.classList.add('hidden');
    jugador0.classList.remove('player--winner')
    jugador1.classList.remove('player--winner')
    jugador0.classList.add('player--active')
    jugador1.classList.remove('player--active')
};

iniciarJuego();

const cambiarReproductores = function () {
    document.getElementById(`current--${jugadorActivo}`).textContent = 0
    puntajeActual = 0;
    jugadorActivo = jugadorActivo === 0 ? 1 : 0;
    jugador0.classList.toggle('player--active');
    jugador1.classList.toggle('player--active');

}
//funcionalidad rodar dados
btnGirar.addEventListener('click', function () {
    //crear numero aleatorio
    if (jugando) {


        const dadoR = Math.trunc(Math.random() * 6) + 1;
        console.log(dadoR);

        //mostrar dado
        dado.classList.remove('hidden');
        dado.src = `dice-${dadoR}.png`;
        // si gira en 1 es verdadero 
        if (dadoR !== 1) {
            //agregar puntos a las puntuacion actual
            puntajeActual += dadoR;
            document.getElementById(`current--${jugadorActivo}`).textContent = puntajeActual



        } else {//cambiar jugador
            cambiarReproductores();
        }

    }
})
btnApretar.addEventListener('click', function () {
    if (jugando) {


        puntajesFinales[jugadorActivo] += puntajeActual;
        console.log(puntajesFinales[jugadorActivo]);
        document.getElementById(`score--${jugadorActivo}`).textContent = puntajesFinales[jugadorActivo];
        if (puntajesFinales[jugadorActivo] >= 100) {
            jugando = false;
            dado.classList.add('hidden');
            document.querySelector(`.player--${jugadorActivo}`).classList.add('player--winner');
            document.querySelector(`.player--${jugadorActivo}`).classList.remove('player--active');


        } else {
            cambiarReproductores();
        }

    }
})

btnNuevo.addEventListener('click', iniciarJuego)