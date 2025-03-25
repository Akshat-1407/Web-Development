/* <-------------------- Callback Hell --------------------> */

let h1 = document.querySelector("h1");

function changeColor(color, delay, nextColor) {
    setTimeout(function() {
        h1.style.color = color;
        if (nextColor) nextColor();
    }, delay);
}

changeColor("violet", 1000, () => {
    changeColor("indigo", 1000, () => {
        changeColor("blue", 1000, () => {
            changeColor("green", 1000, () => {
                changeColor("yellow", 1000, () => {
                    changeColor("orange", 1000, () => {
                        changeColor("red", 1000);
                    });
                });
            });
        });
    });
});



/* <-------------------- Setting up for Promises --------------------> */


function savetoDb(data, sucess, failure) {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
        sucess();
    }
    else {
        failure();
    }
}

savetoDb("Project", () => {
    console.log("Sucess_1: your data was saved.");
    savetoDb("Files", () => {
        console.log("Sucess_2: your data was saved.");
        savetoDb("Code", () => {
            console.log("Sucess_3: your data was saved.");
        }, () => {
            console.log("Failure: weat connection.")
        })
    }, () => {
        console.log("Failure: weak connection.");
    })
}, () => {
    console.log("Failure: weak connection");
});


/* <-------------------- Promises method chaining --------------------> */


function savetoDb(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4) {
            resolve("Success: data was saved");  // Prosise result
        }
        else { 
            reject("Failure: weak connection");  // Promise result or error
        }
    });
}

savetoDb("Project")
    .then((result) => {
        console.log("Data_1 Saved");
        console.log("Result of Promise: ", result);
        return savetoDb("File");
    })
    .then((result) => {
        console.log("Data_2 Saved");
        console.log("Result of Promise: ", result);
        return savetoDb("Code");
    })
    .then((result) => {
        console.log("Data_3 Saved");
        console.log("Result of Promise: ", result);
    })
    .catch((error) => {
        console.log("Promise rejected"); 
        console.log("Result of Promise: ", error)
    });


/* <-------------------- Solution for callback hell --------------------> */


h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("Color changed");
        }, delay);
        
    })
}

changeColor("violet", 1000)
    .then((result) => {
        h1.style.color = "violet";
        console.log("Result of Promise: ", result)
        return changeColor("indigo", 1000);
    })
    .then((result) => {
        h1.style.color = "indigo";
        console.log("Result of Promise: ", result)
        return changeColor("blue", 1000);
    })
    .then((result) => {
        h1.style.color = "blue";
        console.log("Result of Promise: ", result)
        return changeColor("green", 1000);
    })
    .then((result) => {
        h1.style.color = "green";
        console.log("Result of Promise: ", result)
        return changeColor("yellow", 1000);
    })
    .then((result) => {
        h1.style.color = "yellow";
        console.log("Result of Promise: ", result)
        return changeColor("orange", 1000);
    })
    .then((result) => {
        h1.style.color = "orange";
        console.log("Result of Promise: ", result)
        return changeColor("red", 1000);
    })
    .then((result) => {
        console.log("Result of Promise: ", result)
        h1.style.color = "red";
    })
    .catch((error) => {
        console.log("Promise Rejected")
        console.log("Result of Promise: ", error);
    })