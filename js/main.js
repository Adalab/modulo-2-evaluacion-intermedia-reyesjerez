'use strict'

// query selectors
const number = document.querySelector('.js__number');
const button = document.querySelector('.js__button');
const result1 = document.querySelector('.js__paragraph1');
const result2 = document.querySelector('.js__paragraph2');


// variables



// funciones

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}


// eventos



// código que se ejecuta al cargar la página

const randomNumber = getRandomNumber(100);

console.log (`Mi número aleatorio es ${randomNumber}`)