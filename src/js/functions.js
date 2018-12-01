function getCurrentPage(){
	var url = window.location.href;

	if(url == path.base){
		page = 'dashboard';
	}
	else{
		url = url.replace(/\/$/, "");
		url = decodeURIComponent(url);

		page = url.split('/').pop().replace(/[^a-zA-Z ]/g, '');
	}

	return  page;
}

function onReady(callback) {
  var intervalId = window.setInterval(function() {
    if (document.getElementsByTagName('body')[0] !== undefined) {
      window.clearInterval(intervalId);
      callback.call(this);
    }
  }, 1000);
}