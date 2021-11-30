$.ajax({
    type: "GET",
    headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
    url: "http://localhost:5000/api/auth/me",
    crossdomain:true,
    dataType: "json",
    success: function (data) {
        document.getElementById("username").innerHTML = data.data.name;
        document.getElementById("useremail").innerHTML = data.data.email;
    }
 
}
);


console.log(localStorage.getItem("token"));
$("#deleteprofile").click(function() {
    $.ajax({
        type: "DELETE",
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
        url: "http://localhost:5000/api/auth/deleteuser",
        crossdomain:true,
        success: function (data) {
            location.href="index.html";
        }
})
      
  });