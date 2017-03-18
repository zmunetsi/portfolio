$(document).ready(function(){
	$("#port").hover(function(){
		$("#dropmenu").toggle().css({"background-color":"toggle"})
	.animate({fontSize: "18"},"3000");
		
	},function(){
		$("#dropmenu").toggle().animate({fontSize: "0"},"3000");;
	});
		
	
});