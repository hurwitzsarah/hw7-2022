var video = document.querySelector("#player1");
// turn off autoplay and loop

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1")
	video.autoplay = false
	video.loop = false
	video.load()
	console.log("Auto play is set to " +video.autoplay)
	console.log("Loop is set to " +video.loop)
});
// play video and adjust volume value
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	document.querySelector("#volume").innerHTML = video.volume *100 + "%";
	console.log("Adjust Volume")
	video.play();
});
// pause video
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

// slow the video
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Video");
	video.playbackRate *= .9;
	console.log("Speed is", video.playbackRate)
});

// speed up the video
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up")
	video.playbackRate *=1.1;
	console.log("Speed is", video.playbackRate)
});

// skip ahead
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip ahead")
	if (video.currentTime < video.duration){
        video.currentTime += 10;
		console.log("Location is", video.currentTime)
    }
    else{
        video.currentTime = 0;
		console.log("Location is", video.currentTime)
    }
	
});

// mute button
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted){
		video.muted = false
		console.log("Unmute")
		document.querySelector('#mute').innerHTML = 'Mute'
	}
	else{
		video.muted = true
		console.log("Mute")
		document.querySelector('#mute').innerHTML = 'Unmute'
	}
});

// volume slider
document.querySelector("#slider").addEventListener("click", function() {
	slider.min = 0;
	slider.max = 100;
	video.volume = slider.value / 100;
	console.log('Volume is' + video.volume);
	document.querySelector('#volume').innerHTML = video.volume * 100 + "%";
});

// old school
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
	console.log("Apply old school view");
});

// original
document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
	console.log("Removed old school view");
});