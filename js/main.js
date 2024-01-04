"use strict";

// query selectors
const userNumberEl = document.querySelector(".js__usernumber");
const button = document.querySelector(".js__button");
let clueContainer = document.querySelector(".js__paragraph1");
let attemptsContainer = document.querySelector(".js__paragraph2");

// variables
const maxNumber = 100;

const minNumber = 1;

const randomNumber = getRandomNumber(maxNumber);

let acc = 0;

// funciones
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function addClicks() {
  acc = acc + 1;
  attemptsContainer.innerHTML = `Número de intentos: ${acc}`;
}

function writeClue(text) {
  clueContainer.innerHTML = text;
}

function compareNumbers() {
  let userNumberValue = parseInt(userNumberEl.value);

  if (isNaN(userNumberValue)) {
    clueContainer.innerHTML = "Pista: Introduce un número válido.";
  } else {
    if (userNumberValue > maxNumber || userNumberValue < minNumber) {
      writeClue("Pista: El número debe estar entre 1 y 100.");
    } else if (randomNumber === userNumberValue) {
      writeClue("Has ganado campeona!!!");
    } else if (randomNumber > userNumberValue) {
      writeClue("Pista: Demasiado bajo.");
    } else if (randomNumber < userNumberValue) {
      writeClue("Pista: Demasiado alto.");
    }
  }
}

function handleClickButton(event) {
  event.preventDefault;
  addClicks();
  compareNumbers();
}

// eventos
button.addEventListener("click", handleClickButton);

window.addEventListener("load", () => {
  console.log(`Mi número aleatorio es ${randomNumber}`);
  writeClue(`Pista: Escribe el número y dale a Prueba.`);
  attemptsContainer.innerHTML = `Número de intentos: ${acc}`;
});

// código que se ejecuta al cargar la página
