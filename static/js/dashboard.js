/*getting the current id*/


$.ajax({
  type: "GET",
  url: "http://localhost:5000/api/auth/me",
  crossdomain:true,  headers: { 
    Authorization: `Bearer ${localStorage.getItem("token")}`, 
  },
  dataType: "json",
  success: function (data) {
    localStorage.setItem("user_id",data.data._id);
    console.log(localStorage.getItem("user_id"));
    }
  });

$.ajax({
    type: "GET",
    url: "http://localhost:5000/api/properties?user="+localStorage.getItem("user_id"),
    crossdomain:true,
    dataType: "json",
    success: function (data) {
      var options = "";
      var count=0;

      $.each(data.data, function( key, value ) {
        product_id=value._id;
        options += 
        `<div class="row-row-cols-1 row-cols-md-3 border-primary shadow-lg p-3 mb-5 bg-white rounded" style="margin:100px">
        <div class = "col mb-4">
          <div class = "card">
            <img class="card-img-top" style="display: block;max-width: 100%; max-height: 100%;padding:20px;" src="https://i.ibb.co/vsdTLHZ/house3.jpg" alt="Card image cap">
            <div class="card-body">
              <h3 class="card-title text-custom" style="text-align:left;font-family: 'Montserrat', sans-serif; color:"#FFAC12 !important;">${value.name}</h3>
              <p class="card-text" style="text-align:left;font-family: 'Montserrat', sans-serif;">Price: Rs ${value.price}</p>
              <p class="card-text" style="text-align:left;font-family: 'Montserrat', sans-serif;">Address: ${value.address}</p>
            </div>
            <button style="text-align:center;border:none;background-color:black;color:white;align-items:center;padding:10px" class="buttonid" id=${value._id} type="button">View More </button>
          </div>
        </div>
      </div>
    `;
      count++;
    }
    );
     
      $("#model5").append(options);
      // $("#model").change();

      $(".buttonid").click(function(e) {
       
        var product_id=e.target.id;
        $.ajax({
            type: "GET",
            url: "http://localhost:5000/api/properties/" + product_id,
            crossdomain: true,
            dataType: "json",
            success: function(data) {
              console.log(data);
              localStorage.setItem("update_name1",data.data.name);
              localStorage.setItem("update_address1",data.data.address);
              localStorage.setItem("update_price1",data.data.price);
              localStorage.setItem("update_id1",data.data._id);
              localStorage.setItem("update_rooms",data.data.noOfRooms);
              localStorage.setItem("update_baths",data.data.noOfBathrooms);
              localStorage.setItem("update_area",data.data.totalArea);
              localStorage.setItem("update_balcony",data.data.balcony);
              localStorage.setItem("update_date1",data.data.totalArea);
                localStorage.setItem("update_description1",data.data.longdescription);
                localStorage.setItem("update_date1",data.data.createdAt);
                localStorage.setItem("_id",data.data._id);  
                console.log(localStorage.getItem("_id"));
                console.log(localStorage.getItem("product_id"));
               location.href = "personalproductview.html";
            }
    })
    });
 


}});




$("#logout").click(function() {
    location.href = "index.html";
    localStorage.setItem("name","null");
    localStorage.setItem("email","null");
    localStorage.setItem("token","null");
    localStorage.setItem("_id","null");   
    localStorage.setItem("Verified","null");   
});

$("#create").click(function() {
    location.href = "createproperty.html";

});

$("#startshopping").click(function() {
    location.href = "products.html";

});

