// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

//
//
//

/* TEORÍA EVENTOS */

/* const buttonElement = document.getElementById('button');

const printClick = () => {
  console.log('click');
};

buttonElement.addEventListener('click', printClick); */

//
//
//

/* const buttonElement = document.getElementById('button');

const printClick = event => {
  console.log(event);
};

buttonElement.addEventListener('click', printClick); */

//
//
//

/* const buttonElement = document.getElementById('button');

const printClick = event => {
  console.log(event);
};

const viewScroll = event => {
  console.log(event);
};

window.addEventListener('scroll', viewScroll); */

//
//
//

/* mousedown = hacer click con el botón izquierdo
mouseover = ponerse encima con el ratón
keydown = pulsar una tecla */

//
//
//

/* INPUT RANGE */

/* const range = document.getElementById('range');

range.addEventListener('change', event => {
  console.log(event.target.value);
}); */

/* en vez de 'change' se puede poner 'input' */

//
//
//

/* EJERCICIOS EVENTOS */

/* - Crea un botón en tu página HTML y añade un evento de click que muestre en la consola el texto del botón al hacer click. */

const buttonElement = document.getElementById('button');

const printClick = () => {
  console.log(buttonElement.textContent);
};

buttonElement.addEventListener('click', printClick);

//
//
//

/* - Crea un h1 con el texto "Soy un título ", al ponerte con el ratón encima del h1, deberá cambiar al texto a "Quita de encima!!!" y al quitarte, deberá volver a poner "Soy un título" */

const h1Element = document.getElementById('title');

const mouseOverH1 = () => {
  h1Element.textContent = 'Quita de encima!!!';
};

h1Element.addEventListener('mouseover', mouseOverH1);

const mouseOutH1 = () => {
  h1Element.textContent = 'Soy un título';
};

h1Element.addEventListener('mouseout', mouseOutH1);

//
//
//

/* - Agrega un evento de cambio de tamaño de ventana y te muestre por consola el tamaño de la ventana. */

const windowSize = () => {
  console.log(`Width: ${window.visualViewport.width} px x height: ${window.visualViewport.height} px`);
};

window.addEventListener('resize', windowSize);

//
//
//

/* - Crea un p con el texto "esperando entrada de teclado" al pulsar cualquier tecla deberá poner qué tecla has pulsado. */

const pElement = document.getElementById('text');

const pressedKey = event => {
  pElement.textContent = `Has pulsado la tecla ${event.key}`;
};

window.addEventListener('keydown', pressedKey);

//
//
//

/* - Crea un array con 5 palabras. Añade un h2 a tu HTML y ponle un id. Añade dos botones con el texto previous y next respectivamente. Haz que los botones cambien el texto del h2 con las palabras del array, cuando llegues a la última volverás a la primera si pulsas next y cuando estés en la primera podrás volver a la última dándole a previous. */

const words = ['hola', 'adiós', 'casa', 'ordenador', 'teclado'];

let wordCounter = 0;

const h2Element = document.getElementById('subtitle');
const buttonPreviousElement = document.getElementById('button-previous');
const buttonNextElement = document.getElementById('button-next');

const h2Content = () => {
  h2Element.textContent = words[wordCounter];
};

const printClickPrevious = () => {
  wordCounter = h2Content.words[wordCounter]++;
};

buttonPreviousElement.addEventListener('click', printClickPrevious);

/* const h2Element = document.getElementById('subtitle');
const h2Content = h2Element.textContent;

const buttonPreviousElement = document.getElementById('button-previous');

const previousOrNextWord = words => {
  words.forEach(word => {
    
  });
}

for(let i = 0; i = words.length; i++) {

}

const printClickPrevious = () => {
  h2Content = words[0] - words.length;
};

buttonPreviousElement.addEventListener('click', printClickPrevious);

const buttonNextElement = document.getElementById('button-next');

const printClickNext = () => {
  h2Content = words[0] + 1;
};

buttonNextElement.addEventListener('click', printClickNext); */

//
//
//

/* - Repite el mismo ejercicio pero esta vez desactiva el botón previous si estás en el primer elemento y el botón next si estás en el último */

/* - Crea un input range con un label, al mover el input range deberá escribir en el label el valor del input range. */

const labelElement = document.getElementById('range-label');
const inputRangeElement = document.getElementById('slider');

const labelValue = () => {
  labelElement.textContent = `Valor: ${inputRangeElement.value}`;
};

inputRangeElement.addEventListener('input', labelValue);

//
//
//

/* - Crea una lista de 4 checkbox con el texto que quieras y un botón, al pulsar el botón deberá decirte cuantos checkbox están marcados y cuál es su texto. */

const checkboxButtonElement = document.getElementById('checkbox-button');

const checkboxChecked = () => {
  checkboxButtonElement.textContent = `Hay x checkbox marcados y son `;
};

checkboxButtonElement.addEventListener('click', checkboxChecked);
