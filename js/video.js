// var video;
window.addEventListener("load", function() {
	console.log("Good job opening the window")
});

let playBtn = document.getElementById("play");
let pauseBtn = document.getElementById("pause");
let video = document.getElementById("player1"); 
let slowBtn = document.getElementById("slower");
let skipBtn = document.getElementById("skip");
let fastBtn = document.getElementById("faster");
let muteBtn = document.getElementById("mute");
let volumeDescription = document.getElementById("volume");
let volumeSlider = document.getElementById("slider"); 
let oldStyle = document.getElementById("vintage");
let orig = document.getElementById("orig");

playBtn.addEventListener("click", function() {
	 volumeDescription.innerText = volumeSlider.value + "%";
	 video.play();
	 console.log("Play Video");
});

pauseBtn.addEventListener("click", function() {
	video.pause();
	console.log("Pause Video");
});

slowBtn.addEventListener("click", function() {
	video.playbackRate = video.playbackRate - (video.playbackRate * 0.05);
	console.log(`New speed is ${video.playbackRate}`);
});

fastBtn.addEventListener("click", function() {
	video.playbackRate = video.playbackRate + (video.playbackRate * 0.05);
	console.log(`New speed is ${video.playbackRate}`);
});

skipBtn.addEventListener("click", function() {
	if (video.currentTime + 15 > video.seekable.end(0)) {
		video.currentTime = 0; 
	} else {
		video.currentTime += 15; 
	}

	console.log(`New location ${video.currentTime}`);
});

muteBtn.addEventListener("click", function() {
	if (video.muted) {
		video.muted = false;
		muteBtn.innerText = "Mute"; 
	} else {
		video.muted = true;
		muteBtn.innerText = "Unmute";
	}
});

volumeSlider.addEventListener("change", function(e) {
	volumeDescription.innerText = volumeSlider.value + "%"; 
	video.volume = volumeSlider.value / 100; 
	console.log(video.volume); 
}); 

oldStyle.addEventListener("click", function() {
	video.classList.remove("video");
	video.classList.add("oldSchool");
}); 

orig.addEventListener("click", function() {
	video.classList.remove("oldSchool");
	video.classList.add("video");
}); 

