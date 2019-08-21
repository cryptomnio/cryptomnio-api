<?php

$request = new HttpRequest();
$request->setUrl('http://ec2-3-222-208-106.compute-1.amazonaws.com:8086/wallets');
$request->setMethod(HTTP_METH_GET);

$request->setQueryData(array(
  'exchange' => 'SOME_STRING_VALUE',
  'keyId' => 'SOME_STRING_VALUE'
));

try {
  $response = $request->send();

  echo $response->getBody();
} catch (HttpException $ex) {
  echo $ex;
}