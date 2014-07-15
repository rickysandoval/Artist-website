<?php



$con = mysqli_connect('localhost', 'rickysan_admin', 'Ras484559', 'rickysan_gallery');



$result = mysqli_query($con, "SELECT * FROM gallery");



$picData = array();







while ($row = mysqli_fetch_array($result)) {

	$pic = array( "URL" => $row['URL'],

				  "Title" => $row['Title'],

				  "Description" => $row['Description'],

				  "Order" => $row['Order']

						);

	$picData[] = $pic;

}



echo json_encode($picData);



mysqli_close($con);

?>