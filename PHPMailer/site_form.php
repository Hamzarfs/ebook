<?php
error_reporting(E_ERROR | E_PARSE);


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

$mail = new PHPMailer(true);

try {
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;
    $mail->isSMTP();
    $mail->SMTPDebug = 0;

    $mail->Host       = 'smtp.hostinger.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'support@creativelogodesign.co.uk'; // Your Gmail email address
    $mail->Password   = 'Creativelogo@123';        // Your Gmail password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

       $order_fullname=$_REQUEST['botName'];
    $order_email=$_REQUEST['botEmail'];
    $order_phone=$_REQUEST['botNumber'];
    $order_description=$_REQUEST['botMessage'];
    
   
    // Validate form fields
    
    if (empty($order_fullname) || empty($order_email) || empty($order_phone) || empty($order_description)) {
      throw new Exception('All fields are required.');
    }

    $mail->setFrom('support@creativelogodesign.co.uk', 'CreativeLogoDesign');
    $mail->addAddress('nomanrfs@gmail.com'); 
    $mail->addAddress('redfeathersolutions.rfs@gmail.com'); 
    $mail->addAddress('info@rfslogodesign.com'); 
    $mail->addAddress('adnankhan125@gmail.com'); 
   
         $mail->isHTML(true);
    $mail->Subject = 'Contact Us - Inquiry -'.$order_fullname;
     

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
    $html.="<br> RFS Logo Design";


    $mail->Body    = $html;
    $mail->send();


    //*********** customer email  */

    //
    $mail->clearAddresses(); // Clear previous recipients

    $mail->setFrom('support@creativelogodesign.co.uk', 'CreativeLogoDesign');
        $mail->addAddress($order_email); // Recipient email address
    $mail->Subject = 'Confirmation of Form Submission: CreativeLogoDesign'; 
    $htmlCustomer="Dear ".$order_fullname.",";
    $htmlCustomer.="<p> We hope this email finds you well. We want to confirm that your form has been successfully received and one of our representatives will contact you soon.Once again, thank you for choosing CreativeLogoDesign. We appreciate your engagement and eagerly anticipate the opportunity to create something special for you.For any inquiries or assistance,</p> <p>please feel free to contact us at +15516665255.</p> Warm regards,<br> CreativeLogoDesign<br>support@creativelogodesign.co.uk</p>";
    $mail->Body    = $htmlCustomer;
    $mail->send();
    ?>
    <script>
      window.location.href = '../thanks.php';
    </script>
    <?php     


    // return 1;
    // echo 'Message has been sent';
} catch (Exception $e) {
  //  echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
?>
