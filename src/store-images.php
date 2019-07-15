<?php

    include("mysql-conn.php");

    $imagesArray = $_POST['imagesArray'];

    if ($con) {
        foreach ($imagesArray as $index => $imageUrl){
            $sql = "INSERT INTO `instagram` (`id`, `url`, `reviewed`, `approved`, `category`) VALUES ('".$index."', '".$imageUrl."', NULL, NULL, NULL)";
            $con->query($sql);
        }
        echo "success";
    } else {
        echo "Error updating record: " . $con->error;
    }
?>