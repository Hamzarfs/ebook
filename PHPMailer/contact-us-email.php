<?php
// Allow requests from any origin (for testing) or specific domain
header("Access-Control-Allow-Origin: http://localhost:3000"); // Replace with your front-end domain
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");


error_reporting(0);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'vendor/autoload.php';

// Set headers to allow JSON response
header("Content-Type: application/json");

try {
    // Check if the request method is POST
    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        throw new Exception('Invalid request method.');
    }

    // Read the incoming JSON data
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    // Ensure data is an array and contains the required fields
    if (!is_array($data) || !isset($data['firstName'], $data['lastName'], $data['email'], $data['phone'], $data['subject'], $data['message'])) {
        throw new Exception('Invalid or missing form data.');
    }

    // Sanitize and extract form fields
    $name       = htmlspecialchars(($data['firstName'] . $data['lastName']) ?? ''); // Handle if 'page_title' is not present
    $email   = htmlspecialchars($data['email']);
    $phone   = htmlspecialchars($data['phone']);
    $message      = filter_var($data['message'], FILTER_SANITIZE_EMAIL);
    $subject      = htmlspecialchars($data['subject']);
    // Validate form fields

    if (empty($name) || empty($email) ||   empty($subject) ||   empty($message) ||   empty($phone)) {
        throw new Exception('All fields are required.');
    }

    // Validate email format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        throw new Exception('Invalid email format.');
    }

    // Initialize PHPMailer
    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host       = 'smtp.hostinger.com';           // SMTP server
    $mail->SMTPAuth   = true;                           // Enable SMTP authentication
    $mail->Username   = 'dev@amzbookpublishing.net'; // Your Gmail email address
    $mail->Password   = 'Amazonebook@123';        // Your Gmail password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // Encryption method
    $mail->Port       = 587;                            // TCP port to connect to

    // Send email to admin
    $mail->setFrom('dev@amzbookpublishing.net', 'AMZ Book Publishing');
    // $mail->addAddress('nomanrfs@gmail.com');
    // $mail->addAddress('redfeathersolutions.rfs@gmail.com');
    // $mail->addAddress('info@rfslogodesign.com');
    // $mail->addAddress('adnankhan125@gmail.com');
    $mail->addAddress('suraqa.rftech@gmail.com');

    // Prepare admin email content
    $mail->isHTML(true);
    $mail->Subject = "Lead - {$name} - {$subject}";

    $html = "
        Hello Admin,
        <p>The following fields were submitted:</p>
        <b>Name:</b> {$name}<br>
        <b>Email:</b> {$email}<br>
        <b>Subject:</b> {$subject}<br>
        <b>Message:</b> {$message}<br>
        <br>Warm regards,<br>
        AMZ Book Publishing<br>
        dev@amzbookpublishing.net";

    $mail->Body = $html;

    // Send admin email
    if (!$mail->send()) {
        throw new Exception('Failed to send admin email.');
    }

    // Clear previous recipients before sending the customer confirmation email
    $mail->clearAddresses();

    // Send confirmation email to customer
    $mail->addAddress($email);
    $mail->addAddress('suraqa.rftech@gmail.com');
    $mail->Subject = 'Confirmation of Form Submission: AMZ Book Publishing';

    $htmlCustomer = "
        Dear {$name},<br>
        <p>We have successfully received your form submission. One of our representatives will contact you soon.</p>
        <p>For any inquiries or assistance, feel free to contact us at +15516665255</p>
        <br>Warm regards,<br>
        AMZ Book Publishing<br>
       dev@amzbookpublishing.net";
    $mail->Body = $htmlCustomer;

    // Send customer confirmation email
    if ($mail->send()) {
        // Respond with a success message in JSON format
        echo json_encode(['success' => true, 'message' => 'Emails sent successfully']);
    } else {
        throw new Exception('Failed to send confirmation email.');
    }
} catch (Exception $e) {
    // Log error and respond with a JSON error message
    error_log("Mailer Error: {$e->getMessage()}");
    echo json_encode(['success' => false, 'message' => $e->getMessage()]);
}
