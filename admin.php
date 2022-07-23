<?php include 'config/database.php';?>

<?php
    $query = 'SELECT * FROM DRAWERS';
    $result = mysqli_query($conn, $query);
    $drawers = mysqli_fetch_all($result, MYSQLI_NUM);


    $images = [];
    foreach($drawers as $drawer){
        try{
            $query = 'SELECT * FROM DRAWER'.$drawer[0];
            $result = mysqli_query($conn, $query);
            array_push($images,mysqli_fetch_all($result,MYSQLI_NUM));
        }catch(Exception $e){
            //Nothing
        }
    }


?>
<!DOCTYPE html>
<script>
    let drawers = <?php echo json_encode($drawers)?>;
    let images = <?php echo json_encode($images)?>;
</script>

<script src= 'js/admin.js'></script> 
<html>
<head>
        <title>Thomas Didymos Schmidt</title>
        <link rel="stylesheet" href="style/admin.css">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>

            <div class='largeContainer'>
                <h1>Drawers</h1>
                <!-- Drawer Overview --> 
                <div id='drawerList'>
                    <h3>Drawer Overview</h3>
                </div>

                <!-- Add Drawer --> 
                <div>
                    <h3>Add Drawer</h3>
                    <form action="config/addDrawer.php" method="post">
                        <input type="text" name="drawerName">
                        <input type="submit">
                    </form>
                </div>
            </div>
            

            <div class='largeContainer'>
                <h1>Images</h1>
                <!-- Images Overview--> 
                <div>
                    <h3>Images Overview</h3>
                    <div id='listGoesHere'>
                        <p>Select a drawer by clicking on it!</p>
                    </div>
                </div>

                <div>
                    <h3>Add Image</h3>
                    <form action="">
                        <label for="title">Title</label>
                        <input type="text" name="title">
                        <label for="technique">Description</label>
                        <input type="text" name="technique">
                        <label for="price">Price</label>
                        <input type="text" name="price">
                        <input type="file" name="image">
                        <input type="submit">
                    </form>
                </div>
            </div>
            

            
            
    </body>
    
    
</html> 