function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const boxes = document.querySelector('#boxes');
const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');

function createBoxes(amount) {
    if (amount > 100 || amount < 1) return false;

    let size = 30;
    let stepSize = 10;
    let markup = '';

    for (let i = 0; i < amount; i++) {
        let color = getRandomHexColor();
        markup += `<div style="width:${size}px;height:${size}px;background-color:${color};"></div>`;
        size += stepSize;
    }

    boxes.innerHTML = markup;
    input.value = '';
}

const destroyElements = () => {
    boxes.innerHTML = '';
};

createBtn.addEventListener('click', () => {
    createBoxes(input.value);
});

destroyBtn.addEventListener('click', destroyElements);
