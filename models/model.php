<?php
$dbconn = pg_connect('host=localhost dbname=kelc');

class Item {
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

class Content {
  static function delete($id) {
    $query = "DELETE FROM content WHERE id = $1";
    $query_params = array($id);
    pg_query_params($query, $query_params);

    return self::all();
  }
  static function update($updated_item) {
    $query = "UPDATE content SET name = $1, image = $2, description = $3 WHERE id = $4";
    $query_params = array($updated_item->name, $updated_item->image, $updated_item->description, $updated_item->id);
    pg_query_params($query, $query_params);

    return self::all();
  }
  static function create($item) {
    $query = "INSERT INTO content (name, image, description) VALUES ($1, $2, $3)";
    $query_params = array($item->name, $item->image, $item->description);
    pg_query_params($query, $query_params);

    return self::all();
  }
  static function all() {
    $content = array();

    $results = pg_query("SELECT * FROM content");

    $row_object = pg_fetch_object($results);
    while($row_object !== false) {

      $new_item = new Item(
        intval($row_object->id),
        $row_object->name,
        $row_object->image,
        $row_object->description
      );

      // kelc[] = $new_item;

      $row_object = pg_fetch_object($results);

    }

    return $kelc;

  }

}


 ?>
