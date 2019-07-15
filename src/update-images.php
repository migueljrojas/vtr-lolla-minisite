<?php

    include("mysql-conn.php");

    $imagesArray = $_POST['imagesArray'];

    if ($con) {
        foreach ($imagesArray as $index => $imageUrl){
            $sql = "UPDATE instagram
                    SET
                        reviewed='".$imageUrl['reviewed']."',
                        approved='".$imageUrl['approved']."',
                        category='".$imageUrl['category']."'
                    WHERE id = '".$imageUrl['id']."'
                    ";
            
            $con->query($sql);
        }
        
        echo "success";
    } else {
        echo "Error with database: " . $con->error;
    }
?>