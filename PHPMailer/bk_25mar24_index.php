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
    
    
    $mail->setFrom('info@webdesignmania.co.uk', 'Web Mania');
    //$mail->addAddress('adnankhan125@gmail.com,sales@webdesignmania.co.uk,support@webdesignmania.co.uk,contact@webdesignmania.co.uk,nomanrfs@gmail.com,redfeathersolutions.rfs@gmail.com'); // Recipient email address
    $mail->addAddress('adnankhan125@gmail.com'); 
    $mail->addAddress('nomanrfs@gmail.com'); 
     
    
    $mail->isHTML(true);
    $mail->Subject = 'Contact Us - Inquiry -'.$order_fullname;
    $html="Hello Admin, ";
    $html.="<p>The following fields:</p>";
    $html.="<b>Name:</b> ". $order_fullname ;
    $html.="<br><b>Email:</b> ". $order_email ;
    $html.="<br><b>Phone:</b> ". $order_phone ;
    $html.="<br><b>Description:</b> ". $order_description ;

    $html.="<br>";
    $html.="<br>Warm regards,";
    $html.="<br>Web Design Mania";


    $mail->Body    = $html;
    $mail->send();
    return 1;
    echo 'Message has been sent';
} catch (Exception $e) {
  //  echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
?>
