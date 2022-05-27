console.log("Welcome to Spotify");

// Initialize the variables
let songIndex = 0;
let audioElement = new Audio("./Spotify/songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
  {
    songName: "Let me love you",
    filePath: "./Spotify/songs/1.mp3",
    coverPath: "./Spotify/covers/1.jpg",
  },
  {
    songName: "On my way",
    filePath: "./Spotify/songs/2.mp3",
    coverPath: "./Spotify/covers/2.jpg",
  },
  {
    songName: "Sia - Unstoppable",
    filePath: "./Spotify/songs/3.mp3",
    coverPath: "./Spotify/covers/3.jpg",
  },
  {
    songName: "Let me down slowly",
    filePath: "./Spotify/songs/4.mp3",
    coverPath: "./Spotify/covers/4.jpg",
  },
  {
    songName: "Rockabye Baby",
    filePath: "./Spotify/songs/5.mp3",
    coverPath: "./Spotify/covers/5.jpg",
  },
  {
    songName: "Astronomia",
    filePath: "./Spotify/songs/6.mp3",
    coverPath: "./Spotify/covers/6.jpg",
  },
  {
    songName: "Sia - Cheap Thrills",
    filePath: "./Spotify/songs/7.mp3",
    coverPath: "./Spotify/covers/7.jpg",
  },
  {
    songName: "We don't talk anymore",
    filePath: "./Spotify/songs/8.mp3",
    coverPath: "./Spotify/covers/8.jpg",
  },
];

songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

function play() {
  let displayplay = document.getElementById("masterPlay");
  if (displayplay.src.match("./play.png")) {
    displayplay.src = "./pause.png";
  } else {
    displayplay.src = "./play.png";
  }
}

// handle play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    gif.style.opacity = 0;
  }
});

// listen to events
audioElement.addEventListener("timeupdate", () => {
  // Update seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 7) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `./Spotify/songs/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
});

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `./Spotify/songs/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
});
