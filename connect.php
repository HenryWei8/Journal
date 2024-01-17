 <?php
 $first_name = $_POST['first_name'];
 $last_name = $_POST['last_name'];
 $email = $_POST['email'];
 $comment= $_POST['comment'];
 $pdfFile = $_POST['pdfFile'];

//db connection
 $conn = new mysqli('localhost', 'root', '', 'form');
 if($conn->connect_error){
    echo "$conn->connect_error";
    die("Connection Failed : ". $conn->connect_error);
} else {
    $stmt = $conn->prepare("insert into publish(first_name, last_name, email, comment, pdfFile) values(?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssb", $first_name, $last_name, $email, $comment, $pdfFile);
    $execval = $stmt->execute();
    echo $execval;
    echo "Success";
    $stmt->close();
    $conn->close();
}
 ?> 