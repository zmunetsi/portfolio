
	



var rands = document.getElementById("rands")
var dollars = document.getElementById("dollars");
var euros = document.getElementById("euros");
var pounds = document.getElementById("pounds");
var calculate = document.getElementById("calculate");

// select the rand value
// select the rand input
function convertRands(){
	dollars.value = parseFloat(rands.value)*0.076;
	euros.value = parseFloat(rands.value)*0.072;
	pounds.value = parseFloat(rands.value)*0.061;
}

//convert dollars
function convertDollars(){
	rands.value = parseFloat(dollars.value)*13.15;
	euros.value = parseFloat(dollars.value)*0.95;
	pounds.value = parseFloat(dollars.value)*0.81;
}

//convert euros
function convertEuros(){
	rands.value = parseFloat(euros.value)*13.88;
	dollars.value = parseFloat(euros.value)*1.05;
	pounds.value = parseFloat(euros.value)*0.85;
}
//convert pounds
function convertPounds(){
	rands.value = parseFloat(pounds.value)*16.34;
	dollars.value = parseFloat(pounds.value)*1.24;
	euros.value = parseFloat(pounds.value)*1.18;
}