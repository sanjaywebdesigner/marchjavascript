// JavaScript Document
document.querySelector("button").addEventListener("click",sanjay);
function sanjay(){
	a1=document.querySelectorAll("input");
	p1=document.querySelector("p");
	for(i=0;i<a1.length;i++)
	{
		a=a1[i].value;
		p1.innerHTML+=a+" ";
	}
}