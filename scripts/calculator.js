//select buttons

var btnzero = document.getElementById("zero");
var btnone = document.getElementById("one");
var btntwo = document.getElementById("two");
var btnthree = document.getElementById("three");
var btnfour = document.getElementById("four");
var btnfive = document.getElementById("five");
var btnsix = document.getElementById("six");
var btnseven = document.getElementById("seven");
var btneight = document.getElementById("eight");
var btnnine = document.getElementById("nine");
//select operators
var btnplus = document.getElementById("plus");
var btnminus = document.getElementById("minus");
var btnmultiply = document.getElementById("multiply");
var btndivide = document.getElementById("divide");

//select equals
var btnequals = document.getElementById("equals");
// select input
var display = document.getElementById("display");
//selct clear
var clear = document.getElementById("clear");

//select display buttons
var showcalculator = document.getElementById("showcalculator");
var container = document.getElementById("container");


showcalculator.addEventListener("click", function(){
	container.style.visibility = "visible"
	showcalculator.style.display = "none"
})

btnzero.addEventListener("click",function(){
	if(display.value==="0" || display.value ===""){
	display.value = btnzero.value;
	}else{
	display.value += btnzero.value;	
	}
	
})

btnone.addEventListener("click",function(){
	if(display.value==="0" || display.value ===""){
	display.value = btnone.value;
	}else{
	display.value += btnone.value;
  	
	}

})

btntwo.addEventListener("click",function(){
	if(display.value==="0" || display.value ===""){
	display.value = (btntwo.value);
	}else{
	display.value += btntwo.value;	
	}
	
})
btnthree.addEventListener("click",function(){
	if(display.value==="0" || display.value ===""){
	display.value = btnthree.value;
	}else{
	display.value += btnthree.value;	
	}
})

btnfour.addEventListener("click",function(){
	if(display.value==="0" || display.value ===""){
	display.value = btnfour.value;
	}else{
	display.value += btnfour.value;	
	}
})

btnfive.addEventListener("click",function(){
	if(display.value==="0" || display.value ===""){
	display.value = btnfive.value;
	}else{
	display.value += btnfive.value;	
	}
})

btnsix.addEventListener("click",function(){
	if(display.value==="0" || display.value ===""){
	display.value = btnsix.value;
	}else{
	display.value += btnsix.value;	
	}
})

btnseven.addEventListener("click",function(){
	if(display.value==="0" || display.value ===""){
	display.value = btnseven.value;
	}else{
	display.value += btnseven.value;	
	}
})

btneight.addEventListener("click",function(){
	if(display.value==="0" || display.value ===""){
	display.value = btneight.value;
	}else{
	display.value += btneight.value;	
	}
})

btnnine.addEventListener("click",function(){
	if(display.value==="0" || display.value ===""){
	display.value = btnnine.value;
	}else{
	display.value += btnnine.value;	
	}
})

clear.addEventListener("click",function(){
	if(display.value!=="0" || display.value !==""){
	display.value = "0";
	}
})

btnplus.addEventListener("click",function (){
	display.value += btnplus.value;
})

btnminus.addEventListener("click",function (){
	display.value += btnminus.value;
})

btnmultiply.addEventListener("click",function (){
	display.value += btnmultiply.value;
})
btndivide.addEventListener("click",function (){
	display.value += btndivide.value;
})

btnequals.addEventListener("click",function (){
	display.value = eval(display.value);
})
