<?php

$client = new http\Client;
$request = new http\Client\Request;

$request->setRequestUrl('http://ec2-3-222-208-106.compute-1.amazonaws.com:8086/wallets/%7BwalletId%7D');
$request->setRequestMethod('GET');
$client->enqueue($request)->send();
$response = $client->getResponse();

echo $response->getBody();