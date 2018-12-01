<?php

error_reporting(E_ALL);
include('../../../include/class.user.php');
session_start();
$user = new User();

$error = [];

$username = $_POST['username'];
$password = $_POST['password'];



echo json_encode(array('code' => 'success', 'message' => 'User has been successfully added'));

