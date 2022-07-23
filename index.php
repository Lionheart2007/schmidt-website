<?php include 'inc/header.php'; ?>
<?php include 'config/database.php'; ?>

<?php 
    
    $query = 'SELECT * FROM DRAWERS';
    $result = mysqli_query($conn,$query);
    $drawers = mysqli_fetch_all($result, MYSQLI_NUM);
    $drawers = array_map(function($drawer){return $drawer[0];}, $drawers);


    $images = [];
    foreach($drawers as $drawer){
        try{
            $query = 'SELECT * FROM DRAWER'.$drawer;
            $result = mysqli_query($conn, $query);
            array_push($images,mysqli_fetch_all($result,MYSQLI_NUM));
        }catch(Exception $e){
            //Nothing
        }
    }

    
?>

    <script>
    let ids = <?php echo json_encode($drawers)?>;
    let info = <?php echo json_encode($images)?>;
    </script>
    
    <script src="js/index.js"></script>
    <div id="drawerSelect">
        <img src="img/symbols/arrowBack.svg" alt="Back" id="arrowBackward" class = 'arrow'>
        <h1 id="drawerTitle">Drawer 1</h1>
        <img src="img/symbols/arrowForward.svg" alt="Next" id="arrowForward" class = 'arrow'>
    </div>

    <div id ="drawer">
        
    </div>
    
<?php include 'inc/footer.php'; ?>