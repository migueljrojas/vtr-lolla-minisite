<?php

    include("mysql-conn.php");

    if ($con) {
        $sql = mysqli_query($con, "SELECT url FROM instagram WHERE approved = 1 ORDER BY id DESC");
        $rows = mysqli_fetch_all($sql);
        
        echo json_encode($rows);
    } else {
        echo "Error with database: " . $con->error;
    }
?>