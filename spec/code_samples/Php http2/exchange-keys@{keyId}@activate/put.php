<?php

$client = new http\Client;
$request = new http\Client\Request;

$body = new http\Message\Body;
$body->append('{"allocation":"TIER4"}');

$request->setRequestUrl('http://ec2-3-222-208-106.compute-1.amazonaws.com:8086/exchange-keys/%7BkeyId%7D/activate');
$request->setRequestMethod('PUT');
$request->setBody($body);

$request->setHeaders(array(
  'content-type' => 'application/json'
));

$client->enqueue($request)->send();
$response = $client->getResponse();

echo $response->getBody();