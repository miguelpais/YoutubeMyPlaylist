
var array = new Array();

function parseVideos() {
	
	var input = document.getElementById("input").value;
	
	var videos = input.split("\n");
	var vid;
	//~ for (vid in videos) {
		//~ if(videos[vid]!="")
			requestVideo(videos);
	//~ }
}

function requestVideo(search) {

	var functionBack = "show";
	var url = "";
	var i;
	
	for(i in search) {
		url = "http://gdata.youtube.com/feeds/api/videos?q="+search[i]+"&alt=json-in-script&format=5&callback="+functionBack;
		load(url);
	}
	
	document.getElementById("video").innerHTML=array.toString();
	
	$.post("playlist/create", array);
	
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
}
