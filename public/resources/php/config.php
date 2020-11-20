<?php

//start session on web page
session_start();

//config.php

//Include Google Client Library for PHP autoload file
require_once '../../vendor/autoload.php';

//Make object of Google API Client for call Google API
$google_client = new Google_Client();

//Set the OAuth 2.0 Client ID
$google_client->setClientId('154007111987-uvotnhf3kgf19sijfd2fgqs2s9k503e1.apps.googleusercontent.com');

//Set the OAuth 2.0 Client Secret key
$google_client->setClientSecret('rzi8jASlQUnm_U5R_2TBZMVG');

//Set the OAuth 2.0 Redirect URI
$google_client->setRedirectUri('http://localhost/TrashMate/resources/php/index.php');

// to get the email and profile 
$google_client->addScope('email');

$google_client->addScope('profile');

?>

