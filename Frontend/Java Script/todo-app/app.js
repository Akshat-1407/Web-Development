let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", function() {
    let task = document.createElement("li");
    task.innerText = inp.value + "          ";
    ul.appendChild(task);
    console.log("task added")
    inp.value = "";

    let delbtn = document.createElement("button");
    delbtn.classList.add("delete");
    delbtn.innerText = "delete"
    task.appendChild(delbtn);
});

ul.addEventListener("click", function(event) {
    if (event.target.nodeName == "BUTTON") {
        listItem = event.target.parentElement;
        listItem.remove();
        console.log("task deleted")
    }
        
})

// let delbtns = document.querySelectorAll(".delete");
// for (delbtn of delbtns) {
//     delbtn.addEventListener("click", function() {
//         console.log(this.parentElement);
//         this.parentElement.remove();
    
//     });
// }



