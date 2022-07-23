<?php include 'database.php' ?> 

<?php 
    echo "is called";
    if(isset($_POST["drawerToDelete"])){
        $query=  $conn->prepare("DELETE FROM drawers WHERE id=?");
        $query->bind_param('i',$_POST["drawerToDelete"]);
        $query->execute();
    }


?> 