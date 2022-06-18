



import navBar from "./navbar_import.js"

let nav = document.getElementById("navbar");
nav.innerHTML=navBar;

document.getElementById("more_travel").addEventListener("click",showpopup);
document.getElementById("navbar").addEventListener("dblclick",closepopup);

function showpopup(){
let shoepopup = document.getElementById("pop");
shoepopup.classList.add("popup-show");
console.log("sjbg");
}

function closepopup(){
let shoepopup = document.getElementById("pop");
shoepopup.classList.remove("popup-show");
}