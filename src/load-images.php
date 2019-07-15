<?php

    include("mysql-conn.php");

    if ($con) {
        $sql = mysqli_query($con, "SELECT url, id FROM instagram WHERE reviewed IS NULL OR reviewed = 0 ORDER BY id DESC");
        $rows = mysqli_fetch_all($sql);
        
        echo json_encode($rows);
    } else {
        echo "Error with database: " . $con->error;
    }
?>