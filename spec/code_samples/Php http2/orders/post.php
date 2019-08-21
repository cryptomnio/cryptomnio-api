<?php

$client = new http\Client;
$request = new http\Client\Request;

$body = new http\Message\Body;
$body->append('{"exchange":"kraken","keyId":"string","price":0,"volume":0,"side":"buy","pair":"btc_usd"}');

$request->setRequestUrl('http://ec2-3-222-208-106.compute-1.amazonaws.com:8086/orders');
$request->setRequestMethod('POST');
$request->setBody($body);

$request->setHeaders(array(
  'content-type' => 'application/json'
));

$client->enqueue($request)->send();
$response = $client->getResponse();

echo $response->getBody();