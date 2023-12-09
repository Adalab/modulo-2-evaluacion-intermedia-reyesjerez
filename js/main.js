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

console.log(number.value);

// funciones
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

function handleClickButton(event) {
    const numberValue = parseFloat(number.value);
    event.preventDefault;

    debugger
    if (numberValue > maxNumber) {
        result1.innerHTML = 'Pista: El número debe estar entre 1 y 100.'
    }
    else if (randomNumber === numberValue) {
        result1.innerHTML = 'Has ganado campeona!!!'
    }
    else if (randomNumber > numberValue && randomNumber <= 100) {
        result1.innerHTML = 'Pista: Demasiado bajo.'
    }
    else if (randomNumber < numberValue) {
        result1.innerHTML = 'Pista: Demasiado alto.'

    }
}

// eventos
button.addEventListener('click', handleClickButton);


// código que se ejecuta al cargar la página
console.log (`Mi número aleatorio es ${randomNumber}`)
result1.innerHTML = `Pista: Escribe el número y dale a Prueba.`
result2.innerHTML = `Número de intentos: `