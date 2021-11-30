
console.log(localStorage.getItem("token"));


$("#updateprofile").click(function() {

    var name = document.getElementById("update_name").value;
  $.ajax({
    type: "PUT",
    url: "http://localhost:5000/api/auth/updatedetails",
    headers: { 
      Authorization: `Bearer ${localStorage.getItem("token")}`, 
    },
    crossdomain:true,
    data:JSON.stringify({
        "name": name,
    }),dataType:"json",
    contentType:"application/json",
    success:function(data){
      console.log(data);
    }
   
    }
);

      
  });

