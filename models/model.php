<?php
$dbconn = null;
  if(getenv('DATABASE_URL')) {
    $connectionConfig = parse_url(getenv('DATABASE_URL'));
    $host = $connectionConfig['host'];
    $user = $connectionConfig['user'];
    $password = $connectionConfig['pass'];
    $port = $connectionConfig['port'];
    $dbname = trim($connectionConfig['path'],'/');
    $dbconn = pg_connect(
    "host=".$host." ".
    "user=".$user." ".
    "password=".$password." ".
    "port=".$port." ".
    "dbname=".$dbname
    );
  } else {
    $dbconn = pg_connect('host=localhost dbname=kelc');
  }

class Style {
  public $id;
  public $name;
  public $image;
  public $description;

  public function __construct($id, $name, $image, $description) {
    $this->id = $id;
    $this->name = $name;
    $this->image = $image;
    $this->description = $description;
  }
}

class Styles {
  static function all() {
    $styles = array();

    $results = pg_query("SELECT * FROM styles");

    $row_object = pg_fetch_object($results);
    while($row_object !== false) {

      $new_style = new Style(
        intval($row_object->id),
        $row_object->name,
        $row_object->image,
        $row_object->description
      );

      $styles[] = $new_style;
      $row_object = pg_fetch_object($results);

    }
    return $styles;
  }

  static function create($style) {
    $query = "INSERT INTO styles(name, image, description) VALUES ($1, $2, $3)";
    $query_params = array($style->name, $style->image, $style->description);
    pg_query_params($query, $query_params);
    return self::all();
  }

  static function update($updated_style) {
    $query = "UPDATE styles SET name = $1, image = $2, description = $3 WHERE id = $4";
    $query_params = array($updated_style->name, $updated_style->image, $updated_style->description, $updated_style->id);
    pg_query_params($query, $query_params);
    return self::all();
  }

  static function delete($id) {
    $query = "DELETE FROM styles WHERE id = $1";
    $query_params = array($id);
    $result = pg_query_params($query, $query_params);
    return self::all();
  }
}


 ?>
