myGallery = (function() {

	// Initial variables

	var drawings;

	var picIndex = 0;

	var maxIndex;

	var mainRequest = true;

	var location = "photos/gallery/big/";

	var infoShown = false;



	var resizeTimer = null;



	$(window).resize(function() {	



        clearTimeout(resizeTimer);



        resizeTimer = setTimeout(function() {

        	$('figure').width($('figure img').width());



        	checkVisible();



        }, 25);



	});



	function checkVisible() {



		if (infoShown && ($('main').width()-$('#gall_clicks').width()) < 500 ){

        	$('aside').fadeOut(500, function() { infoShown = false; });

        } 

        else if(!infoShown && ($('main').width()-$('#gall_clicks').width()) > 500) {

        	$('aside').fadeIn(500, function(){ infoShown = true; });

        }

	}



	function initialize(array) {

		drawings = array;

		maxIndex = drawings.length - 1;



		var newImage = $('<img src="'+location+drawings[0].URL+'">');

		newImage.hide();



		



		$('aside').fadeOut(0, function() {

			$('aside h1').text(drawings[0].Title);

			$('aside p').html(linkify(drawings[0].Description));

		});

		



		newImage.bind("load", function() {



			$('figure').append(this);

			$('figure').animate({ width: newImage.width()}, function() {

					newImage.fadeIn(100, function() { mainRequest = false;});

					checkVisible();

				});

		});







	}



	function next(event) {

		event.preventDefault();

		if (!mainRequest  && picIndex < maxIndex) {

			mainRequest = true;

			infoShown = false;

			var oldImage = $('figure img');

			var newImage = $('<img src="'+location+drawings[picIndex+1].URL+'">');

			newImage.hide();



			$('aside').fadeOut(500, function() {



				$('aside h1').text(drawings[picIndex+1].Title);

				$('aside p').html(linkify(drawings[picIndex+1].Description));



			});

			



			newImage.bind("load", function() {



				$('figure').append(this);			

				$('figure').animate({ width: newImage.width() }, 500, function() { checkVisible(); });

				$('figure').width('initial');



				oldImage.fadeOut(500, function() {



					$(this).remove();



					newImage.fadeIn(500, function(){ picIndex++; mainRequest = false; });

					

				});



			});



			

		}

	}



	function prev(event) {

		event.preventDefault();

		if (!mainRequest  && (picIndex > 0)) {

			mainRequest = true;

			infoShown = false;

			var oldImage = $('figure img');

			var newImage = $('<img src="'+location+drawings[picIndex-1].URL+'">');

			newImage.hide();

			$('aside').fadeOut( 500, function() {



				$('aside h1').text(drawings[picIndex-1].Title);

				$('aside p').html(linkify(drawings[picIndex-1].Description));



			});



			newImage.bind("load", function() {



				$('figure').append(this);

				$('figure').animate({ width: newImage.width() }, 500, function() { checkVisible(); });

				$('figure').width('initial');

	

				

				oldImage.fadeOut(500, function() {



					$(this).remove();

					newImage.fadeIn(500, function(){ picIndex--; mainRequest = false; });

					

				});

			});

			

		}

	}



	function smallNext(){

		event.preventDefault();

		if (!mainRequest  && picIndex < maxIndex) {

			mainRequest = true;



			var oldImage = $('figure img');

			var newImage = $('<img src="'+location+drawings[picIndex+1].URL+'">');

			newImage.hide();



			$('aside').fadeOut(500, function() {

				$('aside h1').text(drawings[picIndex+1].Title);

				$('aside p').html(linkify(drawings[picIndex+1].Description));

				//$('aside').fadeIn(500);

			});

			



			newImage.bind("load", function() {



				$('figure').append(this);			



				oldImage.fadeOut(500, function() {



					$(this).remove();



					newImage.fadeIn(500, function(){ picIndex++; mainRequest = false; });

					

				});

			});

		}

	}



	function smallPrev(){

		event.preventDefault();

		if (!mainRequest  && picIndex > 0) {

			mainRequest = true;



			var oldImage = $('figure img');

			var newImage = $('<img src="'+location+drawings[picIndex-1].URL+'">');

			newImage.hide();



			$('aside').fadeOut(500, function() {

				$('aside h1').text(drawings[picIndex-1].Title);

				$('aside p').html(linkify(drawings[picIndex-1].Description));

				//$('aside').fadeIn(500);

			});

			



			newImage.bind("load", function() {



				$('figure').append(this);			



				oldImage.fadeOut(500, function() {



					$(this).remove();



					newImage.fadeIn(500, function(){ picIndex--; mainRequest = false; });

					

				});

			});

		}

	}





	return {



		// Public call to initialize

		init: function(array) {



			initialize(array);



			// Set clicke
		



			if ($(window).width()<900){



				$('.click_next').click(function(e) { smallNext(e); });

				$('.click_prev').click(function(e) { smallPrev(e); });



				$(document).keydown(function(e){

        			if (e.keyCode == 37) { smallPrev(e); }

        			if (e.keyCode == 39) { smallNext(e); }

				});

			} else {

				$('.click_next').click(function(e) { next(e); });

				$('.click_prev').click(function(e) { prev(e); });



				$(document).keydown(function(e){

        			if (e.keyCode == 37) { prev(e); }

        			if (e.keyCode == 39) { next(e); }

				});

			}
		

		}



	}

})();



// Function to add links to descriptions

// Weak function. Only works on urls with no leading http://www.

function linkify(inputText) {

	var replacedText, replacePattern;



   	replacePattern = /(\s|\A)([\S]+)(.com)/;

   	replacedText = inputText.replace(replacePattern, '<a href="http://www.$2$3" target="_blank">$2$3</a>');



   	return replacedText;

}



$(document).ready(function(){





	$.getJSON('inc/getGallery.php', 'gallery-main', function(data) {



		var gallData = [];



		$.each(data, function(idx, picture) {



			gallData[idx] = picture;



		});



		gallData.sort(function(a,b) {



			return a.Order - b.Order;



		});

		myGallery.init(gallData);

	});



});

