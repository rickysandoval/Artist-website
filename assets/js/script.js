(function($){
$(document).ready(function() {

		// Image change for gallery images
		$('.btn-switch').click(function(){
			$(this).closest('.project-container').toggleClass('secondary');
			return false;
			
		});
		// Smooth scrolling
		$('a.smooth').click(function() {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				var pad = $(this).hasClass('nav') ? target.find('header').css('padding-top') : 0;
				var scroll = target.offset().top - parseInt(pad, 10);
	
				$('html,body').animate({
					scrollTop: scroll
				}, 1000);
				return false;
			}
		});
		$('.btn-switch').click(function(){
			$(this).toggleClass('on');
			var toggle = $(this).data('toggle') || 1;
			var pics = $('.project-display-inner img');
			$('.project-display-inner').addClass('loading');

			var newSrc1, newSrc2;
			var image1 = $(pics[0]);
			var image2 = $(pics[1]);

			switch (toggle){

				case 1:
					newSrc1 = $(pics[0]).attr('src').replace(/\.jpg/, '2.jpg');
					newSrc2 = $(pics[1]).attr('src').replace(/\.jpg/, '2.jpg');

					break;
				case 2:
					newSrc1 = $(pics[0]).attr('src').replace(/2\.jpg/, '.jpg');
					newSrc2 = $(pics[1]).attr('src').replace(/2\.jpg/, '.jpg');

					break;
			}
			image1.attr('src', newSrc1);
			image2.attr('src', newSrc2);

			image1.load(function(){
				$(this).closest('.loading').removeClass('loading');
				image1.show(400);
			});
			image2.load(function(){
				$(this).closest('.loading').removeClass('loading');
				image2.show(400);
			});
			toggle ++;
			if (toggle>2) {
				toggle = 1;
			}
			$(this).data('toggle', toggle);
		});

		// Article display
		var displayHidden = true;
		$('#project-list').on('click', 'article a', function(){
	
			if (displayHidden){
				$('#project-display').removeClass('hidden');
				displayHidden = false;
			}
			if($(this).parent().hasClass('active')){
				return;
			}
			$('.project-display-inner').addClass('loading');
			$('.btn-switch').removeClass('on').data('toggle', 1);

			$(this).parent().siblings().removeClass('active').end().addClass('active');
			var info = $(this).parent().find('.project-info').html();
			var imgLrg = $(this).parent().data('image-large');
			var imgMob = $(this).parent().data('image-mobile');
			var title = $(this).parent().data('title');
			var icons = $(this).parent().data('icons');

			var newImgLrg = new Image();
			var newImgMob = new Image();

			newImgLrg.src = imgLrg;
			newImgMob.src = imgMob;


			$('.project-display-info').fadeOut(function(){
				$(this).html(info).fadeIn();
			});
			$('.project-display-title h1').fadeOut(function(){
				$(this).text(title).fadeIn();
			});
			$('.project-display-mobile .project-display-inner img').fadeOut(function(){
				$(this).parent().append(newImgMob).removeClass('loading');
				$(this).remove();
			});
			$('.project-display-large .project-display-inner img').fadeOut(function(){
				$(this).parent().append(newImgLrg).removeClass('loading');
				$(this).remove();
			});

			$('.icons').removeClass().addClass('icons ' + icons);

			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				var pad = $(this).hasClass('nav') ? target.find('header').css('padding-top') : 0;
				var scroll = target.offset().top - parseInt(pad, 10);
	
				$('html,body').animate({
					scrollTop: scroll
				}, 1000);
				return false;
			}
		});
		
		$('.project-next').on('click',function(){
			var current = $('#project-list article.active');
			var next = current.next();
			if (next.length === 0){
				next = $('#project-list article:first-child');
			}
			next.find('a').trigger('click');
		});
		$('.project-prev').on('click',function(){
			var current = $('#project-list article.active');
			var prev = current.prev();
			if (prev.length === 0){
				prev = $('#project-list article:last');
			}
			prev.find('a').trigger('click');
		});

		// Sticky To Top Link
		var top = $('#toTop').offset().top + 100;
		var almostTop = $('#about').offset().top - 35;
		$(window).scroll(function() {
			$('#toTop').toggleClass('sticky', $(window).scrollTop() > top );
			$('#toTop').toggleClass('small', $(window).scrollTop() > almostTop);
		});


		$('#linkedin, #phone').click(function(){
			$(this).toggleClass('up');
		});
		$('#email img').click(function(){
			$('#email_form').slideToggle(function(){
				if($(this).css('display') === 'block'){
					var scroll = $(this).offset().top - 175;
					$('html,body').animate({
						scrollTop: scroll
					}, 1000);

				}
			});
		});

		$('#resume .toggle').click(function(){
			$('#resume main').slideToggle('slow', function(){
				$('#resume .toggle').toggleClass('header');
			});
			return false;
		});

});
})(jQuery);