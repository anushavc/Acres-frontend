
/*For rent properties*/ 
$.ajax({
    type: "GET",
    url: "http://localhost:5000/api/properties?rent=false&sort=-price",
    crossdomain:true,
    dataType: "json",
    success: function (data) {
      console.log(data)
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
      $("#model41").append(options);
      $(".buttonid").click(function(e) {
        var product_id=e.target.id;
        console.log(product_id);
        $.ajax({
            type: "GET",
            url: "http://localhost:5000/api/properties/"+product_id,
            crossdomain: true,
            dataType: "json",
            success: function(data) {
              console.log("hello");
              console.log(data);
              localStorage.setItem("product_name1",data.data.name);
              localStorage.setItem("product_address1",data.data.address);
              localStorage.setItem("product_price1",data.data.price);
              localStorage.setItem("product_id1",data.data._id);
              localStorage.setItem("product_rooms",data.data.noOfRooms);
              localStorage.setItem("product_baths",data.data.noOfBathrooms);
              localStorage.setItem("product_area",data.data.totalArea);
              localStorage.setItem("product_balcony",data.data.balcony);
              localStorage.setItem("product_date1",data.data.totalArea);
                localStorage.setItem("product_description1",data.data.longdescription);
                localStorage.setItem("product_date1",data.data.createdAt);
                localStorage.setItem("product_seller1",data.data.email);
                localStorage.setItem("product_sellerp",data.data.phone);
               
                   location.href = "productview.html";
              }
            
    })
    console.log("product_id1")
    });
      // $("#model").change();
    }
 
}
);





console.log("hi")

  $("#backproduct1").click(function() {
    console.log("hello")
  location.href = "products.html";
  localStorage.setItem("product_cat1",null);
  localStorage.setItem("product_date1",null);
  localStorage.setItem("product_description1",null);
  localStorage.setItem("product_title1",null);
  localStorage.setItem("product_img1",null);
  localStorage.setItem("product_price1",null);
  localStorage.setItem("product_id1",null);
    
});

