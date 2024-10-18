<?php
 //die("AAAAAAAAAAAA");
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

$mail = new PHPMailer(true);

try {
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;
    $mail->isSMTP();
    $mail->Host       = 'smtp.hostinger.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'info@webdesignmania.co.uk'; // Your Gmail email address
    $mail->Password   = 'Webmania@123';        // Your Gmail password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;
    
    $order_fullname=$_REQUEST['order_fullname'];
    $order_email=$_REQUEST['order_email'];
    $order_phone=$_REQUEST['order_phone'];
    $order_description=$_REQUEST['order_description'];
    

    
    
    $mail->setFrom('info@webdesignmania.co.uk', 'Web Design Mania');
    $mail->addAddress('adnankhan125@gmail.com'); // Recipient email address
    $mail->isHTML(true);
    $mail->Subject = 'Contact Us - Inquiry';
    $html="Hello, <br>";
    $html.="<p>The following fields:</p>";
    $html.="<br><b>Name:</b> ". $order_fullname ;
    $html.="<br><b>Email:</b> ". $order_email ;
    $html.="<br><b>Phone:</b> ". $order_phone ;
    $html.="<br><b>Description:</b> ". $order_description ;

    $html.="<br>";
    $html.="<br>Warm regards,";
    $html.="Web Design Mania";


    $mail->Body    = $html;
    //$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
  //  echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
?>
