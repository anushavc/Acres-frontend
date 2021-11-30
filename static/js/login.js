

$("#login1").click(function() {
  console.log("hi")
  var email = document.getElementById('exampleInputEmail1').value;
var password = document.getElementById('exampleInputPassword1').value;

$.ajax({
  type: "POST",
  url: "http://localhost:5000/api/auth/login",
  crossdomain:true,
  data:JSON.stringify({
      "email": email,
      "password": password
  }),
  dataType:"json",
  contentType: "application/json",
  success: function (data) {
    console.log(data)
    localStorage.setItem("token",data.token);
    console.log(localStorage.getItem("token"));
    location.href="dashboard.html";
  }

}
)
});
