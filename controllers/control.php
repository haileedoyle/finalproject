<?php
header('Content-Type: application/json');
include_once __DIR__ . '/../models/model.php';

  if($_REQUEST['action'] === 'index') {
    echo 'Index route.'
  }

 ?>
