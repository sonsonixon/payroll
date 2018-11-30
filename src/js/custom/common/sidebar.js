$(function(){

	// SET LINKS
	$(component.href.dashboard).attr('href', path.base);
	$(component.href.users).attr('href', path.html.users);

});


$(document).ready(function(){

	var page = getCurrentPage();

	if(page == 'payroll'){
		$('a[href="' + path.base + '"]').parents('li').addClass('active');
	}
	else{
		$('a[href="' + page + '"]').parents('li').addClass('active');
	}
	
})