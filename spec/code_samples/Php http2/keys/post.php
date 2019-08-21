<?php

$client = new http\Client;
$request = new http\Client\Request;

$body = new http\Message\Body;
$body->append('{"exchange":"kraken","key":"string","secret":"string","passphrase":"string","userID":"string"}');

$request->setRequestUrl('http://ec2-3-222-208-106.compute-1.amazonaws.com:8086/keys');
$request->setRequestMethod('POST');
$request->setBody($body);

$request->setHeaders(array(
  'content-type' => 'application/json'
));

$client->enqueue($request)->send();
$response = $client->getResponse();

echo $response->getBody();