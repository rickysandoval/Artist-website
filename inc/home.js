$(document).ready(function() {

	$('.white_cover').fadeIn(500);
	$('main').fadeIn(1500);
	$('#menu').fadeIn(1500, function() {
		$(this).css('z-index', 200);
	});

});