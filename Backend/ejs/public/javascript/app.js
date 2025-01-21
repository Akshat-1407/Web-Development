let buttons = document.querySelectorAll("button");

for (btn of buttons) {
    btn.addEventListener("click", () => {
        console.log("You clicked the button.");
    });
}
