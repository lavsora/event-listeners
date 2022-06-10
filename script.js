'use strict'

const btn = document.querySelector('#btn');
const inputRange = document.querySelector('#range');
const inputText = document.querySelector('#text');
const square = document.querySelector('#square');
const cirle = document.querySelector('#circle');
const e_btn = document.querySelector('#e_btn');

const visionEBtn = function() {
    e_btn.style.display = 'none';
};

const visionInputRange = function() {
    document.querySelector('#range-span').textContent = '50%';
}

const visionCircle = function() {
    cirle.style.height = '50%';
    cirle.style.width = '50%';
}

visionEBtn();
visionInputRange();
visionCircle();

btn.addEventListener('click', function() {
    square.style.backgroundColor = `${inputText.value}`;
});

inputRange.addEventListener('input', function() {
    cirle.style.height = `${inputRange.value}%`;
    cirle.style.width = `${inputRange.value}%`;

    document.querySelector('#range-span').textContent = `${inputRange.value}%`
});