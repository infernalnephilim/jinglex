<?php

	$email = $_POST['emailV'] ;
	$subject = $_POST['nameV'] ;
	$message = $_POST['textV'] ;
	mail("kontakt@jinglex.pl", "E-Mail od: " .$subject. " (" .$email.") z formularza jinglex.pl",
	$message, "From:" . $email);
  
  ?>