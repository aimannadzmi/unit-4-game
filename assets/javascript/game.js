// generate a random number
//var number = ["0","1","2","3","4","5","6","7","8","9"];
$(document).ready(function() {

var randomNumber = Math.floor((Math.random() * 100) + 1);


$("#random").html(randomNumber);

var sum = 0;



//generate random number for crystals
var randomCrystalNumber1 = Math.floor((Math.random() * 10) + 1);
$(".1").on("click", function(){
	sum+= randomCrystalNumber1;
	$(".numbers").html(sum);
	
	if(sum === randomNumber) {
		alert("you have won the game!");
	}else if(sum > randomNumber) {
		alert("you have lost the game!");
}
}) 

var randomCrystalNumber2 = Math.floor((Math.random() * 10) + 1);
// $(".2").html(randomCrystalNumber2);
$(".2").on("click", function(){
	sum+= randomCrystalNumber2;
	$(".numbers").html(sum);

	if(sum === randomNumber) {
		alert("you have won the game!");
	}else if(sum > randomNumber) {
		alert("you have lost the game!");
}
}) 



var randomCrystalNumber3 = Math.floor((Math.random() * 10) + 1);
//$(".3").html(randomCrystalNumber3);
$(".3").on("click", function(){
	sum+= randomCrystalNumber3;
	$(".numbers").html(sum);
	if(sum === randomNumber) {
		alert("you have won the game!");
	}else if(sum > randomNumber) {
		alert("you have lost the game!");
}
}) 


var randomCrystalNumber4 = Math.floor((Math.random() * 10) + 1);
$(".4").on("click", function(){
	sum+= randomCrystalNumber4;
	$(".numbers").html(sum);
	if(sum === randomNumber) {
		alert("you have won the game!");
	}else if(sum > randomNumber) {
		alert("you have lost the game!");
}
}) 

//$(".4").html(randomCrystalNumber4);



});