function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const body = document.querySelector('body');

const changeColor = () => {
    let color = getRandomHexColor();
    body.style.backgroundColor = color;
};

changeColorBtn.addEventListener('click', changeColor);
