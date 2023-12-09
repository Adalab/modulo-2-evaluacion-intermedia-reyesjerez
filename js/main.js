'use strict'

// query selectors
const number = document.querySelector('.js__number');
const button = document.querySelector('.js__button');
let result1 = document.querySelector('.js__paragraph1');
let result2 = document.querySelector('.js__paragraph2');


// variables
const maxNumber = 100

const randomNumber = getRandomNumber(maxNumber);

const numberValue = parseFloat(number.value);

let acc = 0;

// funciones
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

function addClicks() {
    acc = acc + 1;
    result2.innerHTML = `Número de intentos: ${acc}`
}

function compareNumbers (){
    const numberValue = parseInt(number.value);
    if (numberValue > maxNumber) {
        result1.innerHTML = 'Pista: El número debe estar entre 1 y 100.'
    }
    else if (randomNumber === numberValue) {
        result1.innerHTML = 'Has ganado campeona!!!'
    }
    else if (randomNumber > numberValue) {
        result1.innerHTML = 'Pista: Demasiado bajo.'
    }
    else if (randomNumber < numberValue) {
        result1.innerHTML = 'Pista: Demasiado alto.'
    }
}

function handleClickButton(event) {   
    event.preventDefault;
    addClicks();
    compareNumbers();
}


// eventos
button.addEventListener('click', handleClickButton);

window.addEventListener('load', () => {
    console.log (`Mi número aleatorio es ${randomNumber}`)
    result1.innerHTML = `Pista: Escribe el número y dale a Prueba.`
    result2.innerHTML = `Número de intentos: ${acc}`
});

// código que se ejecuta al cargar la página
