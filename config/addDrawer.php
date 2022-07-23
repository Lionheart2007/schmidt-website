<?php include 'database.php'?>

<?php 
    $title = $_POST['drawerName'];

    $query = $conn->prepare('INSERT INTO drawers (name) VALUES (?)');
    $query->bind_param('s',$title);
    $query->execute();

    header('Location: /admin.php');

?> 