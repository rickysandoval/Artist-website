<!DOCTYPE html>
<html>
<head>

<meta charset="utf-8">
<link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>

<meta name="viewport" content="width=device-width; initial-scale=1.0">
<meta name="description" content="Charoal Portait Drawings By Ricky Sandoval">
<meta name="keywords" content="Drawing,Art,Charcoal,Portaits,Artist,Ricky,Sandoval">
<meta name="author" content="Ricky Sandoval">

<title>Ricky Sanoval Drawing - Gallery</title>

<link rel="stylesheet" href="assets/styles/reset.css">
<link rel="stylesheet" href="assets/styles/main2.css">
<link rel="stylesheet" href="assets/styles/responsive.css">
<link rel="stylesheet" href="assets/styles/myGallery.css">
<script src="assets/js/jquery.js"></script>
<script src="assets/js/myGallery.js"></script>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-64191814-2', 'auto');
  ga('send', 'pageview');

</script>

<!--[if lt IE 9]>
<script src="assets/js/html5shiv.min.js"></script>
<![endif]-->

<script>
	$(document).ready(function(){
		// Fade in from black to ease into color change from the rest of the site
		$('html').css('background', 'black');
		$('body').css('display', 'none');
		$('body').fadeIn(200);

		// Call gallery plugin
		var gall = $('#photo_container ul').myGallery({rollover: true}, $('#info_container > div'));

		var header = 'big';
		var cc = $('#cc');

		if($(window).width() <= 810){
			$('header h1').text('RS Drawing');
			header = 'med';
		}
		if($(window).width() <= 400){
			$('header h1').text('RSD').wrap('<a href="index"></a>');
			header = 'small';
			$('#cc').remove();
		}
		$(window).resize(function(){
			if($(window).width() <= 810 && $(window).width() > 400 && header != 'med'){
				$('header h1').text('RS Drawing');
				header = 'med';
				$('footer').prepend(cc);
			}
			if($(window).width() > 810 && header != 'big'){
				$('header h1').text('Ricky Sandoval Drawing');
				header = 'big';
				$('#info_container').show();
				$('footer').prepend(cc);
			}
			if($(window).width() <= 400 && header != 'small'){
				$('header h1').text('RSD').wrap('<a href="index"></a>');
				header = 'small'
				$('#cc').remove();
			}
		});

		// Create and insert the control elements for the gallery
		var controls = '<img class="arrow left" src="photos/general/left.png" alt="prev">';
		controls = controls + '<img id="more_info" src="photos/general/info.png" alt="show_info">';
		controls = controls + '<img class="arrow right" src="photos/general/right.png" alt="next">';
		$('footer').append('<div id="controls"></div>');
		$('#controls').html(controls);

		// Wrap a hyperlink tag around each control image
		$('#controls img').wrap(function(){
			return "<a href='#' id='" + $(this).attr('alt') + "'></a>";
		});

		// Set the right and left functions and show info 
		$('#controls #prev').on('click', function(e){
			gall.prevPic(e);
		});
		$('#controls #next').on('click', function(e){
			gall.nextPic(e);
		});
		$('#controls #show_info').attr('data-value', 0);

		// Function to show and hide picture info when in mobile mode
		$('#controls #show_info').on('click', function(){
			if($(this).data('value') == 0 && $(window).width()<810){
				$('#info_container').slideDown();
				$('html,body').animate({ scrollTop: $(document).height() }, 'slow');
				$(this).data('value', 1);
				return false;
			} else if( $(window).width()<810){
				$('#info_container').slideUp();
				$(this).data('value', 0);
				return false;
			}
		});

		
	});
</script>

</head>

<body id="gallery">

	<?php include 'inc/_header.php' ?>

	<main>
		<div id="photo_container">
			<div class="spacer"></div>
			<ul>
				<li>
					<img src="photos/gallery/big/brooke.JPG">
					<div>
						<h1>Brooke</h1>
						<p>22 x 17<br> 
							Black and white charcoal on grey drawing paper.<br><br> 
							Credit for the photo goes to photographer Nick Sorenson, 
							check out his work at<br>
							<a href="http://www.thisisnick.com" target="_blank">thisisnick.com</a>
						</p>
					</div>
				</li>
				<li>
					<img src="photos/gallery/big/mree.JPG">
					<div>
						<h1>Mree</h1>
						<p>14 x 20 <br> Black and white charcoal on blue pastel paper.<br><br>
							Mree is a wonderful musician who was kind enough to let me use her 
							picture. Check out her music on YouTube and at <br>
							<a href="http://www.mreemusic.com" target="_blank">mreemusic.com</a>
						</p>
					</div>
				</li>
				<li>
					<img src="photos/gallery/big/kayla.JPG">
					<div>
						<h1>Kayla</h1>
						<p>14.5 x 19 <br> Black and white charcoal on beige pastel paper.</p>
					</div>
				</li>
				<li>
					<img src="photos/gallery/big/singing.JPG">
					<div>
						<h1>Voice</h1>
						<p>16 x 14 <br> Black and white charcoal on grey light grit pastel paper.</p>
					</div>
				</li>
				<li>
					<img src="photos/gallery/big/airguitar.JPG">
					<div>
						<h1>Air Guitar</h1>
						<p>11 x 17 <br> Charcoal on white light grit drawing paper.</p>
					</div>
				</li>
				<li>
					<img src="photos/gallery/big/feelingit.JPG">
					<div>
						<h1>Feeling It</h1>
						<p>13 x 18 <br> Charcoal on white drawing paper.</p>
					</div>
				</li>
				<li>
					<img src="photos/gallery/big/hands.JPG">
					<div>
						<h1>Hands</h1>
						<p>12 x 11 <br> Graphite on white drawing paper.</p>
					</div>
				</li>
			</ul>
		</div>
		<div id="info_container">
			<div></div>
		</div>
	</main>

	<?php include 'inc/_footer.php' ?>

</body>

</html>