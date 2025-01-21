// random color picker

h1 = document.querySelector("h1");
box = document.querySelector("div");
button = document.querySelector("button");

button.addEventListener("click", function() {
    let randomColor = getRandomColor();
    h1.innerText = randomColor;
    h1.style.color = randomColor;
    box.style.backgroundColor = randomColor;
    console.log("Random color is generated")
});

function getRandomColor() {
    let red = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);

    let color = `rgb(${red}, ${green}, ${blue})`;

    return color;
}