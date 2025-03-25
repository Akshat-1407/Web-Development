/* <-------------------- Callback --------------------> */
// When we pass a function as a function argument then it is called callback.

/* <-------------------- Callback Hell --------------------> */

function getData(data, nextData) {
    setTimeout(() => {
        console.log(`Data is: ${data}`);
        if (nextData) {
            nextData();
        }
    }, 2000);
}


console.log("Getting data 1.....");
getData(1, () => {
    console.log("Getting data 2.....");
    getData(2, () => {
        console.log("Getting data 3.....");
        getData(3);
    })
})

/* <-------------------- Promises --------------------> */

function getData(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Data is: ${data}`);
            resolve("Data is Fetched Sucessfully.")
        }, 2000);
    })
}

getData(1) 
  .then((res) => {          // .then method only executes when the promise becomes sucessful.
    console.log(res);
    getData(2)
      .then((res) => {
        console.log(res);
        getData(3)
            .then((res) => {
                console.log(res);
            })
        })
  })
  .catch((err) => {
      console.log("Some error occured...");
  })

/* Promise chaining */

getData(1)
  .then((res) => {      // res -> result
    console.log(res);
    return getData(2);
  })
  .then((res) => {
    console.log(res);
    return getData(3);
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {   // err -> error
    console.log("Some error occured...")
  })   


/* <-------------------- Async/Await--------------------> */

function getData(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Data is: ${data}`);
            resolve("Data is Fetched Sucessfully. ")
        }, 2000);
    })  
};

async function getAllData() {
    console.log("Getting Data 1.....");
    await getData(1);
    console.log("Getting Data 2.....");
    await getData(2);
    console.log("Getting Data 3.....");
    await getData(3);
}
getAllData();