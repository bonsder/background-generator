const input1 = document.querySelector('.js-color-picker1');
const input2 = document.querySelector('.js-color-picker2');
const body = document.querySelector('body');

function changeColor () {
    body.style.background = `linear-gradient( to right, ${input1.value}, ${input2.value}`;
};

changeColor();



input1.addEventListener('input', changeColor);
input2.addEventListener('input', changeColor);



