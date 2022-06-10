const btn = document.querySelector('#btn');
const inputRange = document.querySelector('#range');
const inputText = document.querySelector('#text');
const square = document.querySelector('#square');
const cirle = document.querySelector('#circle');
const e_btn = document.querySelector('#e_btn');

btn.addEventListener('click', function() {
    square.style.backgroundColor = `${inputText.value}`;
});

const visionEBtn = function() {
    e_btn.style.display = 'none';
};

inputRange.addEventListener('input', function() {
    cirle.style.height = `${inputRange.value}%`;
    cirle.style.width = `${inputRange.value}%`;

    document.querySelector('#range-span').textContent = `${inputRange.value}%`
});

visionEBtn();