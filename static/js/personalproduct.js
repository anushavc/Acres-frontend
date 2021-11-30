console.log("test");
console.log(localStorage.getItem("_id"));

$("#deleteproduct").click(function() {

  console.log("hello");
    $.ajax({
        type: "DELETE",
        headers: {
            "Authorization":`Bearer ${localStorage.getItem("token")}`,
            },
        url: "http://localhost:5000/api/properties/"+localStorage.getItem("_id"),
        crossdomain:true,
        contentType:"application/json",
        dataType: "json",
        success: function(data)
        {
          console.log(data);
        
          location.href="dashboard.html";
        }
})
      
  });


  $("#backproduct").click(function() {
      console.log("hello")
    location.href = "dashboard.html";
    localStorage.removeItem("product_cat");
    localStorage.removeItem("product_date");
    localStorage.removeItem("product_description");
    localStorage.removeItem("product_title");
    localStorage.removeItem("product_img");
    localStorage.removeItem("product_price");
    localStorage.removeItem("product_id");
      
  });