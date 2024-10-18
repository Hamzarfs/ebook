<?php
// Sender and recipient
$from = 'adnankhan125@gmail.com';
$to = 'adnankhan125@gmail.com';

// Subject and message
$subject = 'Subject of your email';
$message = 'This is the message body of your email.';

// SMTP settings
$smtpHost = 'smtp.gmail.com';
$smtpPort = 587; // TCP port to connect to
$username = 'adnankhan125@gmail.com';
$password = 'Adn@n2020';

// Set headers
$headers = "From: $from\r\n";
$headers .= "Reply-To: $from\r\n";
$headers .= "Return-Path: $from\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Enable TLS encryption
$smtpConfig = [
    'ssl' => [
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
    ]
];

// Set up SMTP connection
$smtp = stream_socket_client("tls://$smtpHost:$smtpPort", $errno, $errstr, 30, STREAM_CLIENT_CONNECT, stream_context_create($smtpConfig));

if (!$smtp) {
    echo "Failed to connect to SMTP server: $errstr ($errno)";
} else {
    // SMTP handshake
    $response = fgets($smtp, 512);
    if (substr($response, 0, 3) !== '220') {
        echo "SMTP server error: $response";
    } else {
        // Authenticate
        fputs($smtp, "EHLO $smtpHost\r\n");
        $response = fgets($smtp, 512);
        if (substr($response, 0, 3) !== '250') {
            echo "SMTP authentication error: $response";
        } else {
            fputs($smtp, "AUTH LOGIN\r\n");
            $response = fgets($smtp, 512);
            if (substr($response, 0, 3) !== '334') {
                echo "SMTP authentication error: $response";
            } else {
                // Send username
                fputs($smtp, base64_encode("$username") . "\r\n");
                $response = fgets($smtp, 512);
                if (substr($response, 0, 3) !== '334') {
                    echo "SMTP authentication error: $response";
                } else {
                    // Send password
                    fputs($smtp, base64_encode("$password") . "\r\n");
                    $response = fgets($smtp, 512);
                    if (substr($response, 0, 3) !== '235') {
                        echo "SMTP authentication error: $response";
                    } else {
                        // Compose and send email
                        fputs($smtp, "MAIL FROM: <$from>\r\n");
                        $response = fgets($smtp, 512);
                        if (substr($response, 0, 3) !== '250') {
                            echo "SMTP error: $response";
                        } else {
                            fputs($smtp, "RCPT TO: <$to>\r\n");
                            $response = fgets($smtp, 512);
                            if (substr($response, 0, 3) !== '250') {
                                echo "SMTP error: $response";
                            } else {
                                fputs($smtp, "DATA\r\n");
                                $response = fgets($smtp, 512);
                                if (substr($response, 0, 3) !== '354') {
                                    echo "SMTP error: $response";
                                } else {
                                    // Send email headers and body
                                    fputs($smtp, "Subject: $subject\r\n");
                                    fputs($smtp, $headers);
                                    fputs($smtp, "\r\n");
                                    fputs($smtp, "$message\r\n.\r\n");
                                    $response = fgets($smtp, 512);
                                    if (substr($response, 0, 3) !== '250') {
                                        echo "SMTP error: $response";
                                    } else {
                                        echo "Email sent successfully.";
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    // Close SMTP connection
    fputs($smtp, "QUIT\r\n");
    fclose($smtp);
}
?>
