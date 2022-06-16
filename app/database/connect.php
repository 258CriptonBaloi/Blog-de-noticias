>?php

 $host ='localhost';
 $user = 'root';
 $pass = '';
 $db_name = 'techpedia';

 $conn = new MySQLi($host, $user, $pass, $db_name);

 if($conn->connect_error){
     die('Database conection error: '.$conn->connect_error);

 }
