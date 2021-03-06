<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_PORT => "8086",
  CURLOPT_URL => "http://ec2-3-222-208-106.compute-1.amazonaws.com:8086/wallets/{walletId}",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "GET",
));

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  echo $response;
}