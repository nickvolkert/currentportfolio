<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];
    $from = 'From: Your Website'; 
    $to = 'nick@nickvolkert.com'; 
    $subject = 'Hello';
    $capital = $_POST['Springfield'];
			
    $body = "From: $name\n E-Mail: $email\n Phone: $phone\n Message:\n $message";
				
    if ($_POST['submit'] && $capital == '4') {				 
        if (mail ($to, $subject, $body, $from)) { 
	    echo '<p>Your message has been sent!</p>';
	} else { 
	    echo '<p>Something went wrong, go back and try again!</p>'; 
	} 
    } else if ($_POST['submit'] && $capital != '4') {
	echo '<p>You answered the anti-spam question incorrectly!</p>';
    }
?>