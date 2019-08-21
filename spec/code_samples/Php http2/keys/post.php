<?php

$client = new http\Client;
$request = new http\Client\Request;

$body = new http\Message\Body;
$body->append('{"exchange":"kraken","key":"1aa5695d-4b8d-4aeb-8312-8a97d2119764","secret":"1aa5695d-4b8d-4aeb-8312-8a97d2119764","passphrase":"SECRET PHRASE","activated":true,"allocation":"TIER4"}');

$request->setRequestUrl('http://ec2-3-222-208-106.compute-1.amazonaws.com:8086/keys');
$request->setRequestMethod('POST');
$request->setBody($body);

$request->setHeaders(array(
  'content-type' => 'application/json'
));

$client->enqueue($request)->send();
$response = $client->getResponse();

echo $response->getBody();