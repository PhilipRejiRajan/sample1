
const body = document.getElementById("body");

body.addEventListener("click", () => {
    const newColor = randomColor();
    document.body.style.backgroundColor = newColor;
});

let newColor;

const randomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    newColor = `rgb(${r}, ${g}, ${b})`;
    return newColor;
};
