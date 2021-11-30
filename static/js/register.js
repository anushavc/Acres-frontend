
$("#submit_register").click(function() {
    var name=document.getElementById("register_name").value;
    var email = document.getElementById("register_email").value;
  var password = document.getElementById("register_password").value;
 
    $.ajax({
      type: "POST",
      url: "http://localhost:5000/api/auth/register",
      crossdomain:true,
      data:JSON.stringify({
            "name":name,
            "email":email,
            "password":password
  
      }),
      dataType:"json",
      contentType: "application/json",
      success: function (data) {
          console.log("done");
          location.href="login.html";
          

      }
  }
  );
  
      
  });
