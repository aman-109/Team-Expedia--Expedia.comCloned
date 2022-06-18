
let data = [
    {
        url:"https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/7000000/6180000/6172800/6172750/178d405d_b.jpg",
        name:"JW Marriott Hotel New Delhi Aerocity",
        location:"Aerocity",
        services:["pool","Hot tub"],
        special:"Comfiest Beds, Delicious Breakfast",
        description:"Stay at unbeatable rates with complimentary breakfast and wi-fi. Free stay for kids below 12 years of age.",
        refund:"Fully refundable Reserve now, pay later",
        reviews:{rating: "4.5/5", comment: "Wonderful",reviews:642},
        seats: " We have 5 left at",
        price: 11250 ,
        total_price: "Rs 13,275 total"
    },
    {
        url:"https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/1000000/540000/531700/531648/db6e3fdf_b.jpg",
        name:"Le Meridien New Delhi",
        location:" New Delhi",
        services:["pool"],
        special:"",
        description:"",
        refund:"Fully refundable Reserve now, pay later",
        reviews:{rating: "4.3/5", comment: "Excellent",reviews:524},
        seats: "We have 5 left at",
        price:8650,
        total_price: "Rs 10,207 total"
    },
    {
        url:"https://images.trvl-media.com/hotels/7000000/6450000/6441400/6441374/e255e840.jpg?impolicy=resizecrop&rw=455&ra=fit",
        name:"The Roseate New Delhi",
        location:"New Delhi",
        services:["pool"],
        special:"",
        description:"",
        refund:"Fully refundable Reserve now, pay later",
        reviews:{rating: "4.2/5", comment: "Very good",reviews:164},
        seats: "35% off",
        price:11049,
        total_price: "Rs 13,038 total"
    },
    {
        url:"https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/4000000/3860000/3851700/3851663/958ad657_b.jpg",
        name:"The Leela Palace New Delhi",
        location:" New Delhi",
        services:["pool","Hot tub"],
        special:" The Capital's Only Modern Palace Hotel",
        description:"Discover rich diversity of cuisines, historic landmarks. International airport : 15 km, 10 mins drive from India Gate",
        refund:"Fully refundable Reserve now, pay later",
        reviews:{rating: "4.8/5", comment: "Exceptional",reviews:997},
        seats: " ",
        price:15000,
        total_price: "Rs 17,700 total"
    },
    {
        url:"https://images.trvl-media.com/hotels/1000000/470000/465100/465005/13a4747e.jpg?impolicy=resizecrop&rw=455&ra=fit",
        name:"Shangri-La Eros, New Delhi",
        location:" New Delhi",
        services:["pool"],
        special:"",
        description:"",
        refund:"",
        reviews:{rating: "4.5/5", comment: "Wonderful",reviews:996},
        seats: " ",
        price:10800,
        total_price: "Rs 12,744 total"
    },
    {
        url:"https://images.trvl-media.com/hotels/2000000/1310000/1304400/1304393/370d2f58.jpg?impolicy=resizecrop&rw=455&ra=fit",
        name:"Taj Palace, New Delhi",
        location:" New Delhi",
        services:["pool","Hot tub"],
        special:"",
        description:"",
        refund:"Fully refundable",
        reviews:{rating: "4.5/5", comment: "Wonderful",reviews:1000},
        seats: " ",
        price:8075,
        total_price: "Rs 9,529 total"
    },
       {
        url:"https://images.trvl-media.com/hotels/21000000/20170000/20160800/20160759/e31ef8a9.jpg?impolicy=resizecrop&rw=455&ra=fit",
        name:"The Oberoi, New Delhi",
        location:" New Delhi",
        services:["pool"],
        special:"",
        description:"",
        refund:"",
        reviews:{rating: "4.9/5", comment: "Exceptional",reviews:154},
        seats: " ",
        price:14175,
        total_price: "Rs 16,727 total"
    },
    {
        url:"https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/1000000/800000/790500/790474/acc5ae1c_b.jpg",
        name:"Sheraton New Delhi Hotel",
        location:"Saket",
        services:["pool"],
        special:"",
        description:"",
        refund:"Fully refundable",
        reviews:{rating: "4.2/5", comment: "Very good",reviews:356},
        seats: "We have 5 left at",
        price:7200,
        total_price: "Rs 8,064 total"
    },
    {
        url:"https://images.trvl-media.com/hotels/79000000/78700000/78692500/78692460/w1600h1230x0y2-3e9cee95.jpg?impolicy=resizecrop&rw=455&ra=fit",
        name:"HOTEL ASHOKA CONTINENTAL",
        location:"Paharganj",
        services:[],
        special:"",
        description:"",
        refund:"Fully refundable Reserve now, pay later",
        reviews:{rating: "4.2/5", comment: "Very good",reviews:400},
        seats: "",
        price:749,
        total_price: "Rs 749 total"
    },
    {
        url:"https://images.trvl-media.com/hotels/1000000/80000/75800/75755/5626de23.jpg?impolicy=resizecrop&rw=455&ra=fit",
        name:"The Imperial New Delhi",
        location:"Connaught Place",
        services:["pool"],
        special:"",
        description:"",
        refund:"Fully refundable Reserve now, pay later",
        reviews:{rating: "4.7/5", comment: "Exceptional",reviews:457},
        seats: "",
        price:16110,
        total_price: "Rs 19,010 total"
    },
    {
        url:"https://images.trvl-media.com/hotels/7000000/6450000/6441400/6441374/e255e840.jpg?impolicy=resizecrop&rw=455&ra=fit",
        name:"The Roseate New Delhi",
        location:"New Delhi",
        services:["pool"],
        special:"",
        description:"",
        refund:"Fully refundable Reserve now, pay later",
        reviews:{rating: "4.2/5", comment: "Very good",reviews:164},
        seats: "35% off",
        price:11049,
        total_price: "Rs 13,038 total"
    },
    {
        url:"https://images.trvl-media.com/hotels/77000000/76950000/76945300/76945266/1355ab01.jpg?impolicy=resizecrop&rw=455&ra=fit",
        name:"Hotel Stanley by Lord Grand",
        location:"Mahipalpur",
        services:[],
        special:"",
        description:"",
        refund:"Fully refundable Reserve now, pay later",
        reviews:{rating: "3.5/5", comment: "Good",reviews:2},
        seats: "",
        price:2560,
        total_price: "Rs 2,867 total"
    },
    {
        url:"https://images.trvl-media.com/hotels/1000000/530000/526400/526368/2239d2d7.jpg?impolicy=resizecrop&rw=455&ra=fit",
        name:"Ambassador, New Delhi - IHCL SeleQtions",
        location:"New Delhi",
        services:["pool"],
        special:"",
        description:"",
        refund:"Fully refundable Reserve now, pay later",
        reviews:{rating: "4.2/5", comment: "Very good",reviews:308},
        seats: "",
        price:8200,
        total_price: "Rs 9,676 total"
    },
    {
        url:"https://images.trvl-media.com/hotels/2000000/1530000/1528800/1528788/e1cfe61e.jpg?impolicy=resizecrop&rw=455&ra=fit",
        name:"Radisson Blu Plaza Delhi Airport",
        location:"Mahipalpur",
        services:["pool","Hot tub"],
        special:"",
        description:"",
        refund:"Fully refundable Reserve now, pay later",
        reviews:{rating: "4.1/5", comment: "Very good",reviews:1000},
        seats: "",
        price:6399,
        total_price: "Rs 7,487 total"
    },
    {
        url:"https://images.trvl-media.com/hotels/39000000/38680000/38678300/38678265/1e0e9fc7.jpg?impolicy=resizecrop&rw=455&ra=fit",
        name:"Kelvish Hotel",
        location:"New Delhi",
        services:[],
        special:"",
        description:"",
        refund:"Fully refundable Reserve now, pay later",
        reviews:{rating: "4.0/5", comment: "Very good",reviews:263},
        seats: "",
        price:2900,
        total_price: "Rs 3,248 total"
    },

];


localStorage.setItem("delhiData",JSON.stringify(data))

let delhiData= JSON.parse(localStorage.getItem("delhiData"))
// console.log(delhiData)
let result_box =document.getElementById("H_append_container")
display(delhiData)


//Sort Functionality

function handleSort(){
    let selected= document.getElementById("H_sort").value
    if(selected=="LTH")
    {
        data.sort(function(a,b){
            return a.price-b.price
        })
        display(data)
    }
    if(selected=="HTL")
    {
        data.sort(function(a,b){
            return b.price-a.price
        })
        display(data)
    }
    if(selected=="REVIEW")
    {
        data.sort(function(a,b){
            return b.reviews.reviews - a.reviews.reviews
        })
        display(data)
    }
}


function display(data)
{
    result_box.innerHTML=null;

    data.forEach(ele=>{
        // console.log(ele)
        let card=document.createElement("div")
        card.setAttribute("class","H_result_child")

        // imgdiv
        let imgdiv=document.createElement("div")
        imgdiv.setAttribute("class","H_imgdiv")
        let img =document.createElement("img")
        img.src=ele.url
        img.setAttribute("class","H_hotel_img")

        imgdiv.append(img)

        //infodiv
        let infodiv=document.createElement("div")
        infodiv.setAttribute("class","H_infodiv")

        let namediv=document.createElement("div")
        namediv.setAttribute("class","H_namediv")

        let name=document.createElement("h2")
        name.innerText=ele.name

        let address=document.createElement("p")
        address.innerText=ele.location

        namediv.append(name,address)
        //pool and hot tub
        let servicediv=document.createElement("div")
        servicediv.setAttribute("class","H_servicediv")
       
        let pool;
        let bath;
        if(ele.services[0] == null && ele.services[1] == null){
    
            servicediv.innerHTML=""
        }
        else if(ele.services[0] !== null && ele.services[1] == null){
            pool=document.createElement("p")
            pool.innerHTML= `<span class="material-symbols-outlined">pool</span>  ${ele.services[0]}`

            servicediv.append(pool)
        }
         else
        {
            pool=document.createElement("p")
            pool.innerHTML= `<span class="material-symbols-outlined">pool</span>  ${ele.services[0]}`
            
            bath=document.createElement("p")
            bath.innerHTML= `<span class="material-symbols-outlined">hot_tub</span>  ${ele.services[1]}`
    
            servicediv.append(pool,bath)
        }
       

        //description
        let desc=document.createElement("div")
        desc.setAttribute("class","H_desc")

        let descdiv=document.createElement("div")
        descdiv.setAttribute("class","H_descdiv")
        let specDesc=document.createElement("p")
        specDesc.innerText=ele.special
        specDesc.setAttribute("class","H_specDesc")

        let description=document.createElement("p")
        description.innerText=ele.description
        description.setAttribute("class","H_description")

        descdiv.append(specDesc,description)

        let bookbtn=document.createElement("button")
        bookbtn.innerText="Book Now"
        bookbtn.setAttribute("id","H_Bookbtn")
        bookbtn.addEventListener("click",function(){
            clickedFun(ele)
        })

        desc.append(descdiv,bookbtn)

        //refund and price
        let customerThing=document.createElement("div")
        customerThing.setAttribute("class","H_customerThingdiv")

        //refund and reviews
        let refunddiv=document.createElement("div")
        refunddiv.setAttribute("class","H_refunddiv")

        let refundspecial=document.createElement("div")
        refundspecial.setAttribute("class","H_fullyrefund")
        let refund=document.createElement("p")
        refund.innerText=ele.refund
        refund.setAttribute("class","H_refund")

        refundspecial.append(refund)

        let reviews=document.createElement("p")
        reviews.innerText=`${ele.reviews.rating}⭐ ${ele.reviews.comment} (${ele.reviews.reviews} reviews)`
        reviews.setAttribute("class","H_reviews_child")
        refunddiv.append(refundspecial,reviews)

        //price
        let priceDiv=document.createElement("div")
        priceDiv.setAttribute("class","H_priceDiv")

        let seats=document.createElement("p")
        seats.innerText=ele.seats
        seats.style.color="green"
        


        let price=document.createElement("p")
        price.innerText=`Rs ${ele.price}`
        price.setAttribute("class","H_mainprice")


        let totalPrice=document.createElement("p")
        totalPrice.innerText=ele.total_price
        totalPrice.style.color="gray"
        totalPrice.style.fontSize="0.8rem"

       
        priceDiv.append(seats,price,totalPrice)
        

        customerThing.append(refunddiv,priceDiv)
        infodiv.append(namediv,servicediv,desc, customerThing)
        card.append(imgdiv,infodiv)
        result_box.append(card)

    })
}


//Book now clicked function

function clickedFun(any)
{
    localStorage.setItem("Booked",JSON.stringify(any))
    window.location.href="../Advance payment/payment.html"
    
}



//Map Functionality


const Api_key ="b16b9ebcfc465e6a163f0529d8cab123";
function getData(lat,lon){

let city =document.getElementById("H_mapImporting").innerText ;
console.log(city)
// by city
let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_key}`


fetch(url)

.then(function(res){
    return res.json()
})
.then(function(res){
   append(res)
console.log(res)
})

.catch(function(err){
    console.log(err)
})

}


function append(x){

    // console.log(x)
    let iframe =document.getElementById("gmap_canvas")
    iframe.src=`https://maps.google.com/maps?q=${x.name}&t=k&z=17&ie=UTF8&iwloc=&output=embed`


}


function getCurrentLocationWeather(){
    navigator.geolocation.getCurrentPosition(success);
    // console.log(success)
    function success(position){

        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        getData(latitude,longitude);

    }
}

getCurrentLocationWeather()
