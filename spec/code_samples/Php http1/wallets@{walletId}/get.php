<?php

$request = new HttpRequest();
$request->setUrl('http://ec2-3-222-208-106.compute-1.amazonaws.com:8086/wallets/%7BwalletId%7D');
$request->setMethod(HTTP_METH_GET);

try {
  $response = $request->send();

  echo $response->getBody();
} catch (HttpException $ex) {
  echo $ex;
}