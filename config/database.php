<?php
    define('DB_HOST','localhost');
    define('DB_USER','leo');
    define('DB_PASS','thomasSchmidt');
    define('DB_NAME', 'schmidt');

    $conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

    if($conn->connect_error){
        die('Connection Failed '. $conn -> connect_error);
    }else{
        echo "Connected :)";
    }
    
    
?>
