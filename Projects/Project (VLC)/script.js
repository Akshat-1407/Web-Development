const Open = document.querySelector("#open");
const openFile = document.querySelector("#openFile");
const vidPlayer = document.querySelector("#main");
const speedUp = document.querySelector("#speedUp");
const speedDown = document.querySelector("#speedDown");
const volumeUp = document.querySelector("#volumeUp");
const volumeDown = document.querySelector("#volumeDown");
const toast = document.querySelector("#toast");

const toastHandler = (text) => {
    toast.style.display = "block";
    toast.innerHTML = text; 
    setTimeout(() => {
        toast.style.display = "none";
    }, 1000);  
}

const openFileHandler = (event) => {

    console.log("Video is selected");

    const link = URL.createObjectURL(event.target.files[0])
    const video = document.createElement("video");
    video.setAttribute("id", "video");
    vidPlayer.appendChild(video);
    video.src = link;
    video.controls = true;
    video.classList.add("video");
    video.play();
}

const speedUpHandler = () => {
    const video = document.querySelector("#video");
    if (video.playbackRate >= 4) {
        toastHandler(video.playbackRate+"x");
        return;
    }
    video.playbackRate += 0.25;
    console.log("Playback Rate:", video.playbackRate);

    // displaying toast
    toastHandler(video.playbackRate+"x");  
}

const speedDownHandler = () => {
    const video = document.querySelector("#video");
    if (video.playbackRate <= 0.25) {
        toastHandler(video.playbackRate+"x");
        return;
    }
    video.playbackRate -= 0.25;
    console.log("Playback Rate:", video.playbackRate);

    //displaying toast
    toastHandler(video.playbackRate+"x");
}

const volumeUpHandler = () => {
    const video = document.querySelector("#video");
    if (video.volume >= 0.95) {
        console.log("Maximum Volume");
        video.volume = 1;
        toastHandler(Math.floor(video.volume*100)+"%");
        return;
    }
    video.volume += 0.1;
    console.log("Volume:", video.volume);

    toastHandler(Math.floor(video.volume*100)+"%");
}

const volumeDownHandler = () => {
    const video = document.querySelector("#video");
    if (video.volume <= 0.1) {
        console.log("Muted");
        video.volume = 0;
        toastHandler(Math.floor(video.volume*100)+"%");
        return;
    }
    video.volume -= 0.1;
    console.log("Volume:", video.volume);

    // displaying toast
    toastHandler(Math.floor(video.volume*100)+"%");
}

Open.addEventListener("click", () => {openFile.click();});

openFile.addEventListener("change", openFileHandler);

speedUp.addEventListener("click", speedUpHandler);

speedDown.addEventListener("click", speedDownHandler);

volumeUp.addEventListener("click", volumeUpHandler);

volumeDown.addEventListener("click", volumeDownHandler);
