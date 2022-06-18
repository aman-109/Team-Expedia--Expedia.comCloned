// https://www.iconspng.com/images/credit-card-back/credit-card-back.jpg



document.getElementById("code").addEventListener("click",runprogram);
var cvv = document.getElementById("cvv");
function runprogram(){
cvv.style.display = "block";
    
    // var cvv = document.getElementById("cvv");
    cvv.innerHTML = null
    var div_card = document.createElement("div");
    var img_code  = document.createElement("img");

img_code.src = "https://cdn-icons.flaticon.com/png/512/5086/premium/5086190.png?token=exp=1655456643~hmac=4a1b2d58df8f42640cca92d2701393ab";
var p2 = document.createElement("p");
p2.innerText = "Please enter a valid card security code."
img_code.setAttribute("id","img_code")
p2.setAttribute("id","p2")

div_card.append(p2,img_code)
cvv.append(div_card);

}

document.getElementById("bank_details").addEventListener("keydown",remove);
function remove(){

cvv.style.display = "none";

}



document.getElementById("netbanking").addEventListener("click",block);

function block(){


    var one = document.getElementById("logo_bank");
    one.style.display = "none";
    var two = document.getElementById("name_card");
    two.style.display = "none";
    var three = document.getElementById("card_num");
    three.style.display = "none";
    var four = document.getElementById("month");
    four.style.display = "none";
    var five  = document.getElementById("year");
    five.style.display = "none";
    var six = document.getElementById("code_c");
    six.style.display = "none";
    var seven = document.getElementById("cvv");
    seven.style.display = "none";
    var eigth = document.getElementById("terr");
    eigth.style.display ="none";
    var nine = document.getElementById("pan");
    nine.style.display = "none";
    var box = document.getElementById("bank_details");
    box.style.height = "8vw"
var box_1 = document.getElementById("append_detail");
// box_1.setAttribute("id","box_1");



  jump()

}


function jump(){

    var net =   document.getElementById("net");
    net.style.display = "block";
      net.innerHTML = null;
      
      var box = document.getElementById("second_div");
box.style.paddingRight = "18vw";
box.style.boxShadow="rgb(0 0 0 / 2%) 0px 1px 3px 0px, rgb(27 31 35 / 15%) 0px 0px 0px 1px;"
// box.setAttribute("id","append_img")


  var max = document.createElement("p")
    max.innerText = "Important: You will be redirected to your bank's website to securely complete your payment. You will have 30 minutes to pay for your booking.";
    net.append(max);
    max.setAttribute("id","para11")
    console.log(1)
}


document.getElementById("debit").addEventListener("click",visible);

function visible(){
    console.log(1);
    var net =   document.getElementById("net");
net.style.display = "none";

var box = document.getElementById("bank_details");
box.style.height = "auto";




    var one = document.getElementById("logo_bank");
    one.style.display = "block";
    var two = document.getElementById("name_card");
    two.style.display = "block";
    var three = document.getElementById("card_num");
    three.style.display = "block";
    var four = document.getElementById("month");
    four.style.display = "block";
    var five  = document.getElementById("year");
    five.style.display = "inline";
    var six = document.getElementById("code_c");
    six.style.display = "block";
    var seven = document.getElementById("cvv");
    seven.style.display = "block";
    var eigth = document.getElementById("terr");
    eigth.style.display ="block";
    var nine = document.getElementById("pan");
    nine.style.display = "block";
    var box = document.getElementById("bank_details");
    // box.style.height = "8vw"
var box_1 = document.getElementById("append_detail");
// box_1.setAttribute("id","box_1");


}







// json page


// var arr= {
//     url:"https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/1000000/540000/531700/531648/db6e3fdf_b.jpg",
//     name:"Le Meridien New Delhi",
//     location:" New Delhi",
//     services:["pool"],
//     special:"",
//     description:"",
//     refund:"Fully refundable Reserve now, pay later",
//     reviews:{rating: "4.3/5", comment: "Excellent",reviews:"(524 reviews)"},
//     seats: "We have 5 left at",
//     price:" Rs 8,650",
//     total_price: "Rs 10,207 total"
// }


var arr = JSON.parse(localStorage.getItem("Booked")) ;

function append_Info(arr){
    var box = document.getElementById("append_detail");
    // box.innerHTML = null
    var main_div_box = document.createElement("div")
    var img = document.createElement("img");
    img.src = arr.url;
    var name = document.createElement("p");
    name.setAttribute("id","name")
    name.innerText ="Name :"+" "+ arr.name;

    var location = document.createElement("p");
    location.setAttribute("id","location")
    location.innerText="Location :"+" "+ arr.location;
    var total_price = document.createElement("p");
    total_price.setAttribute("id","total_price")
    total_price.innerText ="Price :"+" "+ arr.price;
    console.log("hellow")


    main_div_box.append(img,name,location,total_price)
    box.append(main_div_box);

}


append_Info(arr);




document.getElementById("booking").addEventListener("click",pops)
function pops(){


}

document.getElementById("header_head").addEventListener("click",sigin);

function sigin(){
    window.location.href = "/Team-Expedia/signup/signup.html";

}