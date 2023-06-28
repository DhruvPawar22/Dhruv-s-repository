<?php
    $server="localhost";
    $username="root";
    $password="";
    $database="bank1";
    $con=mysqli_connect($server,$username,$password,$database);
    if(!$con)
    {
        die("connection to this database failed due to" .mysqli_connect_error());
    }

    $fname=$_POST['fname'];
    $lname=$_POST['lname'];
    $accno=$_POST['accno'];
    $dep=$_POST['dep'];
    $sql="INSERT INTO bank3 VALUES ('$fname','$lname','$accno','$dep')";
    if($con->query($sql)==true)
    {
        echo "succesful";
    }
    else{
        echo "error";
    }
    
?>