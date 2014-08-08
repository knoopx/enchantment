var hostname = location.hostname.replace(/^www\./, '');

var appendScript = function(name){
	var xhr = new XMLHttpRequest();
	xhr.onload = function(){ eval(this.responseText); }
	xhr.open('GET', chrome.extension.getURL("javascripts/" + name + ".js"));
	xhr.send();
};

var appendStyle = function(name){
	var style = document.createElement('link');
	style.rel = 'stylesheet';
	style.href = chrome.extension.getURL('stylesheets/' + name + '.css');
	document.head.appendChild(style);
};

appendStyle('default');
appendStyle(hostname);
appendScript('default');
appendScript(hostname);
