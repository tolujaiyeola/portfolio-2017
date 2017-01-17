

<?php

if(isset($_POST['email'])) {



    // EDIT THE 2 LINES BELOW AS REQUIRED

    $email_to = "tolujaiye@gmail.com";

    $email_subject = "Email from tolu-jaiyeola.com";


    function died($error) {

        // error code can go here
        echo "<a href=\"../../index.html\">Click to go back to website.</a>";
        echo "<div style=\"color:red;font-family:'Comic Sans MS', cursive, sans-serif;\">";
        echo "We are very sorry, but there were error(s) found with the form you submitted. ";

        echo "These errors appear below.<br /><br />";

        echo $error."<br /><br />";

        echo "Please go back and fix these errors.<br /><br />"."</div>";

        die();

    }



    // validation expected data exists

    if(!isset($_POST['name']) ||

        !isset($_POST['email']) ||

        !isset($_POST['phone_number']) ||

        !isset($_POST['message']) )

        died('We are sorry, but there appears to be a problem with the form you submitted.');



    }



    $user = $_POST['name']; // required

    $email = $_POST['email']; // required

    $phone_number = $_POST['phone_number']; // required

    $message= $_POST['message']; // not required

    $error_message = "";

    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';

  if(!preg_match($email_exp,$email)) {

    $error_message .= 'The Email Address you entered does not appear to be valid.<br />';

  }

    $string_exp = "/^[A-Za-z .'-]+$/";

  if(!preg_match($string_exp,$user)) {

    $error_message .= 'The Name you entered does not appear to be valid.<br />';

  }


  if(strlen($message) < 2) {

    $error_message .= 'The Message you entered does not appear to be valid.<br />';

  }

  if(strlen($error_message) > 0) {

    died($error_message);

  }

    $email_message = "Form details below.\n\n";



    function clean_string($string) {

      $bad = array("content-type","bcc:","to:","cc:","href");

      return str_replace($bad,"",$string);

    }



    $email_message .= "Name: ".clean_string($user)."\n";

    $email_message .= "Email: ".clean_string($email)."\n";

    $email_message .= "Telephone: ".clean_string($phone_number)."\n";

    $email_message .= "Message: ".clean_string($message)."\n";





// create email headers

$headers = 'From: '.$email."\r\n".

'Reply-To: '.$email."\r\n" .

'X-Mailer: PHP/' . phpversion();

// mail($email_to, $email_subject, $email_message, $headers);
mail($email_to, $email_subject, $email_message);



?>



<!-- include your own success html here -->


<div style="font-family:'Comic Sans MS', cursive, sans-serif;">

  Thank you for contacting me. I will be in touch very soon. Click to go <a href="../../index.html">back to the Home page.</a>
</div>
