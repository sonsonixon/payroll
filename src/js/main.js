$(function(){
	$(component.div.navbar).load(path.base + path.html.navbar, function(){
		$(component.div.sidebar).load(path.base + path.html.sidebar, function() {
			$(component.div.footer).load(path.base + path.html.footer);
		});
	});

	$(component.title).text('TITLE');
});

onReady(function() {
 	$(component.div.loader).fadeOut('fast');
});