// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

/* const buttonElement = document.getElementById('button');

const printClick = () => {
  console.log('click');
};

buttonElement.addEventListener('click', printClick); */

/* const buttonElement = document.getElementById('button');

const printClick = event => {
  console.log(event);
};

buttonElement.addEventListener('click', printClick); */

/* const buttonElement = document.getElementById('button');

const printClick = event => {
  console.log(event);
};

const viewScroll = event => {
  console.log(event);
};

window.addEventListener('scroll', viewScroll); */

/* mousedown = hacer click con el botón izquierdo
mouseover = ponerse encima con el ratón
keydown = pulsar una tecla */

/* INPUT RANGE */

/* const range = document.getElementById('range');

range.addEventListener('change', event => {
  console.log(event.target.value);
}); */

/* en vez de change se puede poner input */

/* EJERCICIOS EVENTOS */

/* - Crea un botón en tu página HTML y añade un evento de click que muestre en la consola el texto del botón al hacer click. */

const buttonElement = document.getElementById('button');

const printClick = () => {
  console.log(buttonElement.textContent);
};

buttonElement.addEventListener('click', printClick);

/* - Crea un h1 con el texto "Soy un título ", al ponerte con el ratón encima del h1, deberá cambiar al texto a "Quita de encima!!!" y al quitarte, deberá volver a poner "Soy un título" */

const h1Element = document.getElementById('title');

const mouseOverH1 = () => {
  console.log('Quita de encima!!!');
};

h1Element.addEventListener('mouseover', mouseOverH1);

const mouseOutH1 = () => {
  console.log(h1Element.textContent);
};

h1Element.addEventListener('mouseout', mouseOutH1);

/* - Agrega un evento de cambio de tamaño de ventana y te muestre por consola el tamaño de la ventana. */

const windowSize = () => {
  console.log(`${window.visualViewport.width} width x ${window.visualViewport.height} height`);
};

window.addEventListener('resize', windowSize);

/* - Crea un p con el texto "esperando entrada de teclado" al pulsar cualquier tecla deberá poner qué tecla has pulsado. */

const pElement = document.getElementById('text');

const pressedKey = event => {
  pElement.textContent = event.key;
};

window.addEventListener('keydown', pressedKey);

/* - Crea un array con 5 palabras. Añade un h2 a tu HTML y ponle un id. Añade dos botones con el texto previous y next respectivamente. Haz que los botones cambien el texto del h2 con las palabras del array, cuando llegues a la última volverás a la primera si pulsas next y cuando estés en la primera podrás volver a la última dandole a previous. */

const words = ['hola', 'adiós', 'casa', 'ordenador', 'teclado'];

const buttonPreviousElement = document.getElementById('button-previous');

const printClickPrevious = () => {
  console.log(words[0]);
};

buttonPreviousElement.addEventListener('click', printClickPrevious);
