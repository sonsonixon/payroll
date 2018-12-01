$(function(){

	var page = getCurrentPage();

	if(page === '#'){ page = 'dashboard'; }

	$(component.href.brand).text(page).addClass('text-capitalize');

});

$(document).ready(function(){

	$(document).on('click', component.href.logout, function(){
		swal('Are you sure you want to logout?', {
			closeOnClickOutside: false,
			closeOnEsc: false,
			icon: 'warning',
		  	buttons: {
			    cancel: "Cancel",
			    catch: {
			      	text: "Yes, Log me out",
			      	value: "logout",
		    	},
		  },
		})
		.then((value) => {
		  	switch (value) {
			    case "logout":
			      	window.location.href = path.base;
			      	break;
			 
			    default:
		  	}
		});
	})

})