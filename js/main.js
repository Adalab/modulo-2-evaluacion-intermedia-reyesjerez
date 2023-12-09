'use strict'

// query selectors
const number = document.querySelector('.js__number');
const button = document.querySelector('.js__button');
let result1 = document.querySelector('.js__paragraph1');
let result2 = document.querySelector('.js__paragraph2');


// variables
const randomNumber = getRandomNumber(100);

const numberValue = parseFloat(number.value);

console.log(number.value);

// funciones
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

function handleClickButton(event) {
    event.preventDefault;
    if (randomNumber === numberValue) {
        console.log(`El número es igual`);
    }
    else if (randomNumber > numberValue) {
        console.log(`El número es mayor`);
    }
    else if (randomNumber < numberValue) {
        console.log(`El número es menor`); 
    }
}

// eventos
button.addEventListener('click', handleClickButton);


// código que se ejecuta al cargar la página
console.log (`Mi número aleatorio es ${randomNumber}`)
result1.innerHTML = `Pista: Escribe el número y dale a Prueba.`
result2.innerHTML = `Número de intentos: `