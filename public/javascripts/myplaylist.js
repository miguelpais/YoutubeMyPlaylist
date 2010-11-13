
var array = [];
var videos_to_load = 0;

function parseVideos() {	
	var input = document.getElementById("input").value;
	
	var videos = input.split("\n");
	var vid;
	requestVideo(videos);
	//~ }
}

function requestVideo(search) {

	var functionBack = "show";
	var url = "";
	var i;

	for(i in search) {
		if (search[i] != "") {
			videos_to_load += 1;
		}	
	}
	
	for(i in search) {
		if (search[i] != "") {
			url = "http://gdata.youtube.com/feeds/api/videos?q="+search[i]+"&alt=json-in-script&format=5&callback="+functionBack;
			load(url);
		}
	}
}

function load(src) {
	var scripts = document.getElementsByTagName('script');  
    
	// prevent from loading same script twice  
	var alreadyLoaded = false;  
	for (var i = 0, script; script = scripts[i]; i++) {  
		if (script.src == src) {  
			alreadyLoaded = true;  
			break;  
		}  
	}
    
	if (!alreadyLoaded) {  
		var scriptElement = document.createElement('script');
		scriptElement.setAttribute('type', 'text/javascript');  
		scriptElement.setAttribute('src', src);  
		document.documentElement.firstChild.appendChild(scriptElement);  
	}
}

function show(data) {
	url=data.feed.entry[0].id.$t;
	param = url.split("/");
	array.push(param[param.length-1]);
	videos_to_load -= 1;
	
	if (videos_to_load == 0) {
		$.post("/playlist/create", {tracks_obj: JSON.stringify(array)}, 
		function(data) {
			window.location = "/p/index/" + data;
		});
	}
}
