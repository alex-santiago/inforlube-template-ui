
var ajaxGet = function(url, onSuccess, onError){
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url);
	xhr.onload = function() {
		spinner.stop();
		
		if (xhr.status === 200) {
			var json = JSON.parse(xhr.responseText);
			onSuccess(json);
		}
		else {
			alert('Request failed.  Returned status of ' + xhr.status);
		}
	};
	
	spinner.spin(spinnerTarget);
	xhr.send();
}

var ajaxPost = function(url, json, onSuccess, onError){
	var xhr = new XMLHttpRequest();
	xhr.open('POST', url);
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.onload = function() {
		spinner.stop();

		if (xhr.status === 200) {
			var json={};

			if(xhr.responseText){
				json = JSON.parse(xhr.responseText);
			}
			
			onSuccess(json);
		}
		else{
			var json = JSON.parse(xhr.responseText);
			onError(json);
		}
	};

	spinner.spin(spinnerTarget);
	
	var jsonStr = '';
	
	if(json){
		jsonStr = JSON.stringify(json);
	}
	
	xhr.send(jsonStr);
}

var ajaxPut = function(url, json, onSuccess, onError){
	var xhr = new XMLHttpRequest();
	xhr.open('PUT', url);
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.onload = function() {
		spinner.stop();

		if (xhr.status === 200) {
			onSuccess();
		}
		else{
			var json = JSON.parse(xhr.responseText);
			onError(json);
		}
	};

	spinner.spin(spinnerTarget);
	xhr.send(JSON.stringify(json));
}

var ajaxDelete = function(url, onSuccess, onError){
	var xhr = new XMLHttpRequest();
	xhr.open('DELETE', url);
	xhr.onload = function() {
		spinner.stop();

		if (xhr.status === 200) {
			onSuccess();
		}
		else{
			var json = JSON.parse(xhr.responseText);
			onError(json);
		}
	};

	spinner.spin(spinnerTarget);
	xhr.send();
}