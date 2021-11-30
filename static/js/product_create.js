let b64;
document.querySelector('#inp').addEventListener("change",function(){

  const reader=new FileReader();
  
 
  reader.addEventListener("load",()=>{
     localStorage.setItem("recent-image", reader.result);
   
  })
    console.log("afdad");
    b64 = (localStorage.getItem("recent-image"));
       
 
  console.log(b64);
})



$("#productpost").click(function() {
    var title = document.getElementById('pro_title').value;
    var desc = document.getElementById('pro_desc').value;
    var price = document.getElementById('pro_price').value;
    var address= document.getElementById('pro_address').value;
    var rent;
    /*rent or buy*/
    var e = document.getElementById("rentorbuy");
var rentorbuy = e.value;
if(rentorbuy=="rent"){
rent=true;
}
else{
    rent=false;
}
var be = document.getElementById("modelproperty");
var modelprop = [be.value];
var numberbaths=document.getElementById("no_of_bathrooms").value;
var numberooms=document.getElementById("no_of_rooms").value;
var tarea=document.getElementById("totalarea");
var balcony = document.getElementById("balcony");
var balconybool=balcony.value;
 
  var seller_phone=document.getElementById("sellerphone").value;
  var seller_email=document.getElementById("selleremail").value;
    /*var img64=document.getElementById("b64").innerHTML;*/
   
    console.log(localStorage.getItem("token"));
    if(title=="",desc=="",price=="")
    {
      location.href="fail.html";
    }
    else
    {
      $.ajax({
  
        type: "POST",
        url: "http://localhost:5000/api/properties",
        headers: { 
          Authorization: `Bearer ${localStorage.getItem("token")}`, 
        },
        crossdomain:true,
        data:JSON.stringify({
            "name": title,
            "email":seller_email,
            "phone":seller_phone,
            "longdescription":desc,
            "price":price,
            "noOfBathrooms":numberbaths,
            "noOfRooms":numberooms,
            "totalArea":tarea,
            "balcony":balconybool,
            "address":address,
            "rent":rent,
        }),
        dataType:"json",
        contentType:"application/json",
        success: function (data) {

   console.log(data.data.image);
        }
    }
    );
   
    }
  }
  );
  
  