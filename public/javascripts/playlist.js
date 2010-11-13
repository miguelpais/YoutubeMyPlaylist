// For more API Calls see http://code.google.com/intl/pt-PT/apis/youtube/js_api_reference.html#loadVideoById
// ugly global variable
var current_video = 0;
var playing = true;

function loadNewVideo(playerId)
{
	ytplayer = document.getElementById(playerId);
	ytplayer.addEventListener("onStateChange", "onytplayerStateChange");
	ytplayer.loadVideoByUrl('http://www.youtube.com/v/' + getVideoURL(playerId), 0);
	ytplayer.setVolume(100);
}

function toogleVideo() {
	ytplayer = document.getElementById("player" + current_video);
	controller = document.getElementById("toogle");
	if (playing === true) {
		ytplayer.pauseVideo();
		playing = false;
		controller.src = "/images/play.png";
	}
	else {
		ytplayer.playVideo();
		playing = true;
		controller.src = "/images/pause.png";
	}
}


function onytplayerStateChange(newState) {
	if (newState === 0) {
		current_video += 1;
		$("#player" + (current_video - 1) + "_box").hide("slide", {direction: "left"}, 2000, function(){  $("#player" + current_video + "_box").show("slide", {direction: "right"}, 2000, function(){loadNewVideo("player" + current_video);}); });		
	}
}

function getVideoURL(playerId) {
	url = document.getElementById(playerId + "_link").value;
	return url;
}

function onYouTubePlayerReady(playerId) {
	
	// playerId passado pelo parametro playerapiid do URL do embed.
	// Estou a passar pelo playerId o ID HTML do elemento do player.
	
	if (playerId === "player0") {
		// if first video then start playing it right away
		loadNewVideo(playerId);
	}
}

function skipVideo() {
	// Recebe sempre como parametros o id html do elemento
	ytplayer = document.getElementById("player" + current_video);
	ytplayer.seekTo(ytplayer.getDuration(), false);
}