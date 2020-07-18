<?php
header('Content-Type: application/json');
include_once __DIR__ . '/../models/model.php';

  if($_REQUEST['action'] === 'index') {
    $all_styles = Styles::all();
    // echo "Index route.";
    echo json_encode($all_styles);
  } elseif ($_REQUEST['action'] === 'post') {
    $request_body = file_get_contents('php://input');
    $body_object = json_decode($request_body);

    $new_style = new Style(null, $body_object->name, $body_object->image, $body_object->description);
    $all_styles = Styles::create($new_style);

    echo json_encode($all_styles);
  } else if ($_REQUEST['action'] === 'update'){
    $request_body = file_get_contents('php://input');
    $body_object = json_decode($request_body);

    $updated_style = new Style($_REQUEST['id'], $body_object->name, $body_object->image, $body_object->description);
    $all_styles = Styles::update($updated_style);

    echo json_encode($all_styles);
  } else if ($_REQUEST['action'] === 'delete') {
    $all_styles = Styles::delete($_REQUEST['id']);

    echo json_encode($all_styles);
  }

 ?>
