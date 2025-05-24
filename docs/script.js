const body = document.getElementById("body");
const div = document.getElementById("sample");

body.addEventListener("click", () => {
    const newColor = randomColor();
    document.body.style.backgroundColor = newColor;
});

div.addEventListener("click", () => {
    const newColor = randomColor();
    div.style.backgroundColor = newColor;
});

let newColor;

const randomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    newColor = `rgb(${r}, ${g}, ${b})`;
    return newColor;
};
