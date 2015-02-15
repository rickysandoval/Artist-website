;(function($){
	/*
	**  Gallery plugin that works on a list of images set in html.
	**  	List items should include an image tag and a div containing
	**      information to be displayed.
	**
	**	Parameters:
	**  options - object literal to extend or override base settings
	**  info - element to display photo information in
	*/
	$.fn.myGallery = function(options, info){

		// Set up variables
		var settings = {},
			album = $(this),
			pictures = album.children(),
			currentPic = 0,
			infoBox = info,
			request = false;

		var init = function(){
			// Set up settings
			settings = $.extend({}, $.fn.myGallery.defaults, options);

			// Initial Classes
			album.addClass('gallery-list');
			pictures.addClass('gallery-picture');

			// Show first picture
			$(pictures[0]).addClass('shown').find('img').fadeIn(settings.animationDuration);
			$(infoBox).html($(pictures[0]).find('div').html());

			// If keyboard control true, set left and right functions
			if(settings.keyboardControl){
				$(document).keydown(function(e){
					if(e.keyCode == 37){ prev(e); }
					if(e.keyCode == 39){ next(e); }
				});
			}

			// Show API for controls to add to elements
			return {
				nextPic: next,
				prevPic: prev
			}
		}

		// Define next function
		var next = function(event){
			event.preventDefault();

			// Make sure there is only one call at a time
			if(request){ return; }

			currentPic++;
			if (currentPic >= pictures.length){

				// Rollover determines behavior at end of list
				if(!settings.rollover){ currentPic--; return; }
				currentPic = currentPic%pictures.length;
			}

			// Oficially start next request
			request = true;

			// Fade out and swap photo info
			$(infoBox).fadeOut(settings.animationDuration, function(){
				$(this).html($(pictures[currentPic]).find('div').html())
				.fadeIn(settings.animationDuration);
			});
			// Fade out and swap photo
			$(album).find('.shown img').fadeOut(settings.animationDuration, function(){
				pictures.removeClass('shown');
				$(pictures[currentPic]).addClass('shown').find('img').fadeIn(settings.animationDuration, function(){
					request = false;
				});
			});
		}

		// Define previous function
		var prev = function(event){
			event.preventDefault();

			// Make sure there is only one call at a time
			if(request){ return; }

			currentPic--;
			if(currentPic <0 ){

				// Rollover determines behavior at beginning of list
				if(!settings.rollover){ currentPic++; return; }
				currentPic = (currentPic+pictures.length)%pictures.length;
			}

			// Oficially start prev request
			request = true;

			// Fade out and swap photo info
			$(infoBox).fadeOut(settings.animationDuration, function(){
				$(this).html($(pictures[currentPic]).find('div').html())
				.fadeIn(settings.animationDuration);
			});
			// Fade out and swap photo
			$(album).find('.shown img').fadeOut(settings.animationDuration, function(){
				pictures.removeClass('shown');
				$(pictures[currentPic]).addClass('shown').find('img').fadeIn(settings.animationDuration, function(){
					request = false;
				});
			});
		}

		// Call constructor
		return init();
	}

	// Define gallery defaults
	$.fn.myGallery.defaults = {
		animationDuration: 500,
		keyboardControl: true,
		rollover: false

	}


}(jQuery));