<?php

	if(isset($_POST['c_name']) && isset($_POST['c_email']) && isset($_POST['c_message']) && isset($_POST['c_subject'])){

		$toEmail = "muliastudios@gmail.com";
		$fromEmail = "muliastudios@gmail.com";
		$emailBody = "Email : ".$_POST['c_email']."<br /><br />Name : ".$_POST['c_name']."<br />Subject:".$_POST['c_subject']."<br /><br />Messege : ".$_POST['c_message'];
		$title = "Roimulia website : Messege from ".$_POST['c_name'];
		
		
		
require 'gmail/PHPMailerAutoload.php';

//Create a new PHPMailer instance
$mail = new PHPMailer;
//Set who the message is to be sent from
$mail->setFrom($fromEmail, $_POST['c_name']);
//Set who the message is to be sent to
$mail->addAddress($toEmail, 'Roi Mulia');
//Set the subject line
$mail->Subject = $title;
//Read an HTML message body from an external file, convert referenced images to embedded,
//convert HTML into a basic plain-text alternative body
$mail->msgHTML($emailBody, dirname(__FILE__));

//send the message, check for errors
if (!$mail->send()) {
	echo "false";	
    //echo "Mailer Error: " . $mail->ErrorInfo;
} else {
    echo "true";
}	}else{
		echo "false";	
	}

?>