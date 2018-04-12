// JavaScript Document
document.querySelector("button").addEventListener("click",sanjay);
function sanjay(){
	a1=document.querySelectorAll("input");
	a=a1[0].value;
	b=a1[1].value;
	document.querySelector("p").innerHTML=a+" "+b;
}