<?php

$client = new http\Client;
$request = new http\Client\Request;

$request->setRequestUrl('http://ec2-3-222-208-106.compute-1.amazonaws.com:8086/exchange-keys/%7BkeyId%7D');
$request->setRequestMethod('DELETE');
$client->enqueue($request)->send();
$response = $client->getResponse();

echo $response->getBody();