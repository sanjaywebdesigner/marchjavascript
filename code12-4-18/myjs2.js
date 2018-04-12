// JavaScript Document
window.addEventListener("load",init);
function init()
{
document.querySelector("#a3").addEventListener("click",sanjay);
}
function sanjay(){
	a=document.querySelector("#a1").value;
	b=document.querySelector("#a2").value;
	document.querySelector("p").innerHTML=a+" "+b;
}