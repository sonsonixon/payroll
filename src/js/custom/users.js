$(function(){

	$(component.button.users.add).on('click', function(){
		var data = new FormData($(component.formdata.users.add)[0]);

		$.ajax({
			url: path.base + path.php.users.add,	
			method: 'POST',
			dataType: 'json',
			data: data,
			contentType : false,
			cache       : false,
			processData : false,
			beforeSend: function(){
				$(component.button.users.add).html('<i class="fa fa-fw fa-spin fa-spinner"></i>');
			},
			success:function(res){
				$(component.button.users.add).html('Submit');

				console.log(res);

				if(res.code === 'success'){
					/*swal({
						title: res.title,
						text: res.message,
						icon: "success",
						buttons: {
						    cancel: "Add Another User",
						    catch: {
						      	text: "Go to Employee List",
						      	value: "redirect",
					    	}
					  	}
					})
					.then((value) => {
					  	switch (value) {
						    case "redirect":
						    
						      	break;
						    default:
						    	$('#formdata')[0].reset(); // Formdata reset
					  	}
					});*/
				}
				else if(res.code === 'error'){
					/*error_messages = '<p> System has detected the following errors;<br><br>';

					$.each(res.errors, function(index, value){
						$('#'+value['id']).parent('div').removeClass('has-success').addClass('has-danger');
						error_messages += value['message'] + '<br>';
					});

					error_messages += '</p>';

					$.notifyClose();

					$.notify({
				        icon: 'fa fa-fw fa-info-circle fa-4x',
				        title: '<h5><strong>'+res.title+'</strong></h5>',
				        message: error_messages
			      	},{
				        newest_on_top: true,
				        showProgressbar: false,
				        type: 'danger',
				        animate: {
				          enter: 'animated fadeInDown',
				          exit: 'animated fadeOutUp'
				        }
			      	});*/
				}
			},
			error: function(xhr, status, error){
				console.log(xhr.responseText);
			}
		})
	})

})