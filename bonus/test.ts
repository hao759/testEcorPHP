
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Log in by Google</title>
  <link rel="icon" href="https://res.cloudinary.com/dhzi2feeu/image/upload/v1657883669/google_kggum0.jpg">
  

</head>
<body>

  <div class="data">
    <p>ID</p>
    <p id="ID"></p>
    <p>Name</p>
    <p id="name"></p>
    <p>Image</p>
    <img style="border-radius: 50%" id="image" class="rounded-circle" width="100" height="100" />
    <p>Email</p>
    <p id="email"></p>
    <button id="g_id_signout">Sign Out</button>
</div>


   <!-- Ban login GG 2 Sign In With Google button ko cần-->
   <!-- <div id="buttonDiv"></div>  -->

   <!-- cái này mới qtrong -->
   <div id="g_id_onload"
   data-client_id="902204154871-d7c9js1v4q98ocmrln31ernj3oheb4e0.apps.googleusercontent.com"
   data-callback="handleCredentialResponse">
    </div>
<div style="margin-top: 7%;" class="g_id_signin" data-type="standard"></div>

    <script src="script.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://accounts.google.com/gsi/client" async defer></script>
    <script src="https://apis.google.com/js/api.js" async defer></script>

</div>
</div>
</body>
</html>






