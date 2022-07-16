<?php include 'inc/header.php'; ?>
<?php include 'config/database.php'; ?>

<?php 
    
    $query = 'SELECT * FROM DRAWER';
    $result = mysqli_query($conn,$query);
    $images = mysqli_fetch_all($result, MYSQLI_ASSOC);

    $even = false; 
    
?>


    <div id="drawerSelect">
        <img src="img/symbols/arrowBack.svg" alt="Back" id="arrowBackward" class = 'arrow'>
        <h1 id="drawerTitle">Drawer 1</h1>
        <img src="img/symbols/arrowForward.svg" alt="Next" id="arrowForward" class = 'arrow'>
    </div>

    <div id ="drawer">

        <?php foreach($images as $image): ?>

        <div 
        <?php 
            
            if($even){
                echo "class ='artworkShowcase even'";
                $even = false;
            }else{
                echo "class ='artworkShowcase'";
                $even = true;
            }

            
        ?>
        >
            <img 
            <?php
                echo 'src = "img/art/0/'.$image['id'].'.jpg"';

            ?>
            class="art <">
            <div class="artText">
                <p class="artTitle"><?php echo $image['title'];?></p>
                <p class="artDescription"><?php echo $image['technique'];?></p>
                <p class="artPrice">
                    <?php
                    if($image['price'] == -1){
                        echo 'Price on Application';
                    }else{
                        echo "EURO " . $image['price'] . ",--";
                    }
                    ?></p>
            </div>
        </div>
        
        <?php endforeach ?>
    

    </div>
    
<?php include 'inc/footer.php'; ?>