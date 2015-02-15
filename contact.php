<!doctype html>
<html>
<head>

<meta charset="utf-8">

<meta name="viewport" content="width=device-width; initial-scale=1.0">
<meta name="description" content="Charoal Portait Drawings By Ricky Sandoval">
<meta name="keywords" content="Drawing,Art,Charcoal,Portaits,Artist,Ricky,Sandoval">
<meta name="author" content="Ricky Sandoval">

<title>Ricky Sanoval Drawing - Contact</title>

<link rel="stylesheet" href="assets/styles/reset.css">
<link rel="stylesheet" href="assets/styles/main2.css">
<link rel="stylesheet" href="assets/styles/responsive.css">
<script src="assets/js/jquery.js"></script>

<!--[if lt IE 9]>
<script src="assets/js/html5shiv.min.js"></script>
<![endif]-->

<script>
$(document).ready(function(){
		$('body').css('display', 'none');
        $('body').fadeIn(500);
 });
</script>

</head>

<body id="contact_page">

<?php include 'inc/_header.php' ?>

<div role="main">
	<header>
		<h1>Contact</h1>
	</header>
<?php

$form = '<form name="contact" action="contact.php" method="post">
	Name<br><input type="text" name="name" required></input><br>
	Subject<br><input type="text" name="subject"></input><br>
	Message<br><textarea rows="10" name="message" required></textarea><br>
	Email<br><input type="email" name="email" required></input><br>
	<input id="submit" type="submit" name="submit" value="Submit"></input>
</form>';

if (isset($_POST['submit'])) {
	$name = $_POST['name'];
	$subject = $_POST['subject'];
	$body = $_POST['message'];
	$email = $_POST['email'];

	$to = 'ras482@cornell.edu';

	if (mail($to, $subject, $body . "\n\n" . $name . ": " . $email)){
		echo '<p class="email">Your message was sent successfully.</p>';
	} else {
		echo'<p class="email">Oops, something went wrong. Try that again.</p>';
		echo $form;
	}

} else {
	echo $form;
}

?>
</div>
<?php include 'inc/_footer.php' ?>
</body>
</html>

