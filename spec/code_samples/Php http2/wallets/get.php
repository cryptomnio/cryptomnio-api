<?php

$client = new http\Client;
$request = new http\Client\Request;

$request->setRequestUrl('http://ec2-3-222-208-106.compute-1.amazonaws.com:8086/wallets');
$request->setRequestMethod('GET');
$request->setQuery(new http\QueryString(array(
  'exchange' => 'SOME_STRING_VALUE',
  'keyId' => 'SOME_STRING_VALUE'
)));

$client->enqueue($request)->send();
$response = $client->getResponse();

echo $response->getBody();