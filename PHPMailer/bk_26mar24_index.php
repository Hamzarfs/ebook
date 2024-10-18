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

    $page_title=$_REQUEST['page_title'];

    $order_fullname=$_REQUEST['order_fullname'];
    $order_email=$_REQUEST['order_email'];
    $order_phone=$_REQUEST['order_phone'];
    $order_description=$_REQUEST['order_description'];
    // Validate form fields
    if (empty($order_fullname) || empty($order_email) || empty($order_phone) || empty($order_description)) {
      throw new Exception('All fields are required.');
    }


    $mail->setFrom('info@webdesignmania.co.uk', 'Web Mania');
    $mail->addAddress('adnankhan125@gmail.com'); // Recipient email address
    $mail->addAddress('nomanrfs@gmail.com'); 
    $mail->addAddress('webdesignmania5@gmail.com'); 
         $mail->isHTML(true);
    $mail->Subject = 'Contact Us - Inquiry -'.$order_fullname;
    if($page_title<>'Get Free Consultation'){
      $mail->Subject = 'Lead -'.$order_fullname .' - '. $page_title;
    }

    $html="Hello Admin, ";
    $html.="<p>The following fields:</p>";
    if($page_title<>'Get Free Consultation'){
          $html.="<b>Package Details:</b> ". $page_title ;
    }
    $html.="<b>Name:</b> ". $order_fullname ;
    $html.="<br><b>Email:</b> ". $order_email ;
    $html.="<br><b>Phone:</b> ". $order_phone ;
    $html.="<br><b>Description:</b> ". $order_description ;

    $html.="<br>";
    $html.="<br>Warm regards,";
    $html.="<br>Web Design Mania";


    $mail->Body    = $html;
    $mail->send();


    //*********** customer email  */

    //
    $mail->clearAddresses(); // Clear previous recipients

    $mail->setFrom('info@webdesignmania.co.uk', 'Web Mania');
    $mail->addAddress($order_email); // Recipient email address
    $mail->Subject = 'Confirmation of Form Submission: Webdesignmania'; 
    $htmlCustomer="Dear ".$order_fullname.",";
    $htmlCustomer.="<p> We hope this email finds you well. We want to confirm that your form has been successfully received and one of our representatives will contact you soon.Once again, thank you for choosing Webdesignmania. We appreciate your engagement and eagerly anticipate the opportunity to create something special for you.For any inquiries or assistance,</p> <p>please feel free to contact us at 0204 511 2009.</p> Warm regards,<br> Webdesignmania<br>info@webdesignmania.co.uk</p>";
    $mail->Body    = $htmlCustomer;
    $mail->send();

    
    return 1;
    echo 'Message has been sent';
} catch (Exception $e) {
  //  echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
?>
