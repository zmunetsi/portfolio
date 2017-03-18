//create upvote counter

var upvote = 0;
var voteUp = document.getElementById("upvotebtn");
//get display button
 //display upcount
 //update innerHtml
var voteUpDisplay = document.getElementById("rateup")
//comments button
var commentbtn = document.getElementById("commentbtn");
// submitbtn
var submitbtn = document.getElementById("submitbtn")

voteUp.addEventListener("click",function (){
	upvote++
	voteUpDisplay.innerHTML = upvote;
	
})

//create downvote counter

var downvote= 0;
var voteDown = document.getElementById("downvotebtn");
//get display button
 //display upcount
 //update innerHtml
var voteDownDisplay = document.getElementById("ratedown")

voteDown.addEventListener("click",function (){
	downvote++;
	voteDownDisplay.innerHTML = downvote;

})
//changing number of comments
var comments = 0;
submitbtn.addEventListener("click", function(){
	comments++;
	commentbtn.innerHTML = comments;

})

// updating backgroundColor every 10s
//get theseconds from the date object.
var colorList = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];

var setTimerUp = setInterval(function(){
	var selectColor = Math.floor(Math.random()*colorList.length);
	voteUpDisplay.style.backgroundColor = colorList[selectColor];
	
},10000)

var setTimerDown = setInterval(function(){
	var selectColor = Math.floor(Math.random()*colorList.length);
	voteDownDisplay.style.backgroundColor = colorList[selectColor];
	
},10000)
