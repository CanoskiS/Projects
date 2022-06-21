<?php
session_start();
$con = mysqli_connect("localhost","root","","project01");

if(isset($_POST['save']))
{
    $name = $_POST['name'];
    $company_name = mysqli_real_escape_string($con, $_POST["company"]);
    $email = $_POST['email'];
    $phone_number = $_POST['phone'];
    $tip_student = $_POST['tipstudent'];

    $query = "INSERT INTO employment (full_name,company_name,email,number,type) VALUES ('$name','$company_name','$email','$phone_number','$tip_student')";
    $query_run = mysqli_query($con, $query);


    if($query_run)
    {

        echo ' <script type="text/javascript"> alert("Data Saved");
        location.href="./index.html"</script> ';
        
    }
    else
    {
        echo ' <script type="text/javascript"> alert("Data Not Saved");
        location.href="./index.html"</script> ';        
    }
   
}

    else
    {
        header("location:./index.html");
    }
?>