jQuery(document).ready(function() {

	$('.form input[type="text"], .form textarea').on('focus', function() {
		$('.form input[type="text"], .form textarea').removeClass('input-error');
	});

	$('.form').submit(function(e) {
		e.preventDefault();
	    $('.form input[type="text"], .form textarea').removeClass('input-error');
	    var postdata = $('.form').serialize();
	    $.ajax({
	        type: 'POST',
	        url: 'contactform/contact.php',
	        data: postdata,
	        dataType: 'json',
	        success: function(json) {
	            if(json.emailMessage != '') {
	                $('.contact-form form .contact-email').addClass('input-error');
	            }
	            if(json.subjectMessage != '') {
	                $('.contact-form form .contact-subject').addClass('input-error');
	            }
	            if(json.messageMessage != '') {
	                $('.contact-form form textarea').addClass('input-error');
	            }
	            if(json.antispamMessage != '') {
	                $('.contact-form form .contact-antispam').addClass('input-error');
	            }
	            if(json.emailMessage == '' && json.subjectMessage == '' && json.messageMessage == '' && json.antispamMessage == '') {
	                $('.contact-form form').fadeOut('fast', function() {
	                    $('.contact-form').append('<p>Thanks for contacting us! We will get back to you very soon.</p>');
	                    // reload background
	    				$.backstretch("resize");
	                });
	            }
	        }
	    });
	});
});