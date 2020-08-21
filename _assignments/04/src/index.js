// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const body = document.getElementsByTagName("body")[0];
const initialWidth = window.innerWidth;
const smallWidth = initialWidth - 150;
const bigWidth = initialWidth + 150;
const colors = ["#3498db", "#8e44ad", "#f1c40f"];

function handleResize(event) {
    const currentWidth = window.innerWidth;
    if (currentWidth <= smallWidth) body.style.backgroundColor = colors[0];
    else if (currentWidth >= bigWidth) body.style.backgroundColor = colors[2];
    else body.style.backgroundColor = colors[1];
}

function init() {
    const h2 = document.createElement("h2");
    h2.innerHTML = "Hello!";
    h2.style.color = "white";
    body.appendChild(h2);
    handleResize();
    window.addEventListener("resize", handleResize);
}

init();
