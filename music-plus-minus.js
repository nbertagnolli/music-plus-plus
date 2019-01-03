// document.addEventListener("DOMContentLoaded", () => sleepyTime())

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}



async function sleepyTime() {
    console.log("I am becoming sleepy");
    var videos = document.getElementsByTagName("video");

    var playbackRate;
    while (videos[0]) {
        var n = Math.random();
        n = (n * 1.5) + 0.25;
        console.log(n);
        videos[0].playbackRate = n;
        await sleep((Math.random() + 0.5) * 5000);
        videos = document.getElementsByTagName("video");
    }
}

sleepyTime();
