<?php
session_start();
session_destroy();
echo "<script>window.open('../include/index.php','_self')</script>";

?>