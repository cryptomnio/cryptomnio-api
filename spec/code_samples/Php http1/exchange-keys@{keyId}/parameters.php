<?php

HttpRequest::methodRegister('PARAMETERS');
$request = new HttpRequest();
$request->setUrl('http://ec2-3-222-208-106.compute-1.amazonaws.com:8086/exchange-keys/%7BkeyId%7D');
$request->setMethod(HttpRequest::HTTP_METH_PARAMETERS);

try {
  $response = $request->send();

  echo $response->getBody();
} catch (HttpException $ex) {
  echo $ex;
}