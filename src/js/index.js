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

// También se puede escribir así. Se suele escribir de esta forma cuando no se tiene acceso directo al elemento
/* const mouseOverH1 = event => {
  event.target.textcontent = 'Quita de encima!!!';
}; */

//
//
//

/* - Agrega un evento de cambio de tamaño de ventana y te muestre por consola el tamaño de la ventana. */

const windowSize = () => {
  console.log(`Width: ${window.visualViewport.width} px x height: ${window.visualViewport.height} px`);
};

window.addEventListener('resize', windowSize);

// También se puede escribir así:
/* console.log(
  `El ancho de la ventana es de ${event.target.innerWidth} px y el alto es de ${event.target.innerHeight} px`
); */

//
//
//

/* - Crea un p con el texto "esperando entrada de teclado" al pulsar cualquier tecla deberá poner qué tecla has pulsado. */

const pElement = document.getElementById('text');

const pressedKey = event => {
  pElement.textContent = `Has pulsado la tecla ${event.key}`;
};

window.addEventListener('keydown', pressedKey);

// esto es para que al levantar el dedo de la tecla vuelva a poner 'esperando entrada de teclado'

const waitingText = () => {
  pElement.textContent = `Esperando entrada de teclado`;
};

window.addEventListener('keyup', waitingText);

//
//
//

/* - Crea un array con 5 palabras. Añade un h2 a tu HTML y ponle un id. Añade dos botones con el texto previous y next respectivamente. Haz que los botones cambien el texto del h2 con las palabras del array, cuando llegues a la última volverás a la primera si pulsas next y cuando estés en la primera podrás volver a la última dándole a previous. */

/* const words = ['hola', 'adiós', 'casa', 'ordenador', 'teclado'];

const h2Element = document.getElementById('subtitle');
const buttonPreviousElement = document.getElementById('button-previous');
const buttonNextElement = document.getElementById('button-next');

let wordCounter = 0;

const printClickPrevious = () => {
  if (wordCounter <= 0) {
    wordCounter = words.length - 1;
  } else {
    wordCounter--;
  }

  h2Element.textContent = words[wordCounter];
};

buttonPreviousElement.addEventListener('click', printClickPrevious);

const printClickNext = () => {
  if (wordCounter >= words.length - 1) {
    wordCounter = 0;
  } else {
    wordCounter++;
  }

  h2Element.textContent = words[wordCounter];
};

// Esto sirve para que empiece en 0
h2Element.textContent = words[0];

buttonNextElement.addEventListener('click', printClickNext); */

// Resolución simplificada usando un ternario

/* const words = ['hola', 'adiós', 'casa', 'ordenador', 'teclado'];

const h2Element = document.getElementById('subtitle');
const buttonPreviousElement = document.getElementById('button-previous');
const buttonNextElement = document.getElementById('button-next');

let wordCounter = 0;

const changeText = () => {
  h2Element.textContent = words[wordCounter];
};

const printClickPrevious = () => {
  wordCounter <= 0 ? (wordCounter = words.length - 1) : wordCounter--;
  changeText();
};

const printClickNext = () => {
  wordCounter >= words.length - 1 ? (wordCounter = 0) : wordCounter++;
  changeText();
};

// Esto sirve para que empiece en 0
h2Element.textContent = words[0];

buttonPreviousElement.addEventListener('click', printClickPrevious);
buttonNextElement.addEventListener('click', printClickNext); */

//
//
//

/* - Repite el mismo ejercicio pero esta vez desactiva el botón previous si estás en el primer elemento y el botón next si estás en el último */

const words = ['hola', 'adiós', 'casa', 'ordenador', 'teclado'];

const h2Element = document.getElementById('subtitle');
const buttonPreviousElement = document.getElementById('button-previous');
const buttonNextElement = document.getElementById('button-next');

let wordCounter = 0;

const changeText = () => {
  h2Element.textContent = words[wordCounter];
};

const printClickPrevious = () => {
  wordCounter--;
  buttonNextElement.disabled = false;

  if (wordCounter === 0) buttonPreviousElement.disabled = true;

  changeText();
};

const printClickNext = () => {
  wordCounter++;
  buttonPreviousElement.disabled = false;

  if (wordCounter === words.length - 1) buttonNextElement.disabled = true;

  changeText();
};

h2Element.textContent = words[0];

buttonPreviousElement.addEventListener('click', printClickPrevious);
buttonNextElement.addEventListener('click', printClickNext);

//
//
//

/* - Crea un input range con un label, al mover el input range deberá escribir en el label el valor del input range. */

const labelElement = document.getElementById('range-label');
const inputRangeElement = document.getElementById('slider');

const labelValue = () => {
  labelElement.textContent = `Valor: ${inputRangeElement.value}`;
};

inputRangeElement.addEventListener('input', labelValue);

// Se puede utilizar change en vez de input. Change enseña el valor cuando se suelta el tirador.

//
//
//

/* - Crea una lista de 4 checkbox con el texto que quieras y un botón, al pulsar el botón deberá decirte cuantos checkbox están marcados y cuál es su texto. */

// RESOLUCIÓN LARGA

// "input[type='checkbox']" -> para seleccionar solo todos los inputs que sean tipo checkbox

/* const inputsElements = document.querySelectorAll("input[type='checkbox']");
const checkboxButtonElement = document.getElementById('checkbox-button');
const checkboxInfoElement = document.getElementById('checkbox-info');

// input.checked -> para saber qué checkbox están marcados. El resultado es true o false

const checkboxChecked = () => {
  let checkCounter = 0;
  inputsElements.forEach(input => {
    if (input.checked) {
      // esto muestra cuáles son los checkbox marcados
      console.log(input.value);
      // para sumar cada vez que encuentra un checkbox marcado
      checkCounter++;
    }
  });

  console.log(`Hay ${checkCounter} checkbox marcados`);
};

checkboxButtonElement.addEventListener('click', checkboxChecked); */

// RESOLUCIÓN CORTA

// document.querySelectorAll(input:checked) -> para seleccionar todos los inputs que estén marcados

const checkboxButtonElement = document.getElementById('checkbox-button');
const checkboxInfoElement = document.getElementById('checkbox-info');

const checkboxChecked = () => {
  // esta constante hay que declararla dentro de la función para que funcione cuando se presiona el botón
  const inputsElements = document.querySelectorAll('input[type="checkbox"]:checked');
  let resultText = `Hay ${inputsElements.length} checkbox marcados: `;

  inputsElements.forEach(input => {
    resultText += input.value + ' ';
  });

  checkboxInfoElement.textContent = resultText;
};

checkboxButtonElement.addEventListener('click', checkboxChecked);
