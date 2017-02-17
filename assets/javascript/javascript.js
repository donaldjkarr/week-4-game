var wins = 0;

var losses = 0;

var counter = 0;

var randCrystal = [9, 10, 11, 12];

var targetNumber = 50;
$("#number").text(targetNumber);

	
// var crystalValue = randCrystal[Math.floor(Math.random() * randCrystal.length)];
// 	console.log(crystalValue);

// function randComp(min, max) {
//     return Math.floor(Math.random() * (120 - 19 + 1)) + 19;
//     console.log(randComp);
// }


for (var i = 0; i < randCrystal.length; i++) {

	var crystalOne = $("<img>");

		crystalOne.attr("data-crystalValue", randCrystal[i]);

		$("#crystal1").append(crystalOne);

	var crystalTwo = $("<img>");

		crystalTwo.attr("data-crystalValue", randCrystal[i]);

		$("#crystal2").append(crystalTwo);

	var crystalThree = $("<img>");

		crystalThree.attr("data-crystalValue", randCrystal[i]);

		$("#crystal3").append(crystalThree);

	var crystalFour = $("<img>");

		crystalFour.attr("data-crystalValue", randCrystal[i]);

		$("#crystal4").append(crystalFour);
}


  $(".crystal").on("click", function() {
    
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

    counter += crystalValue;

    alert("New score: " + counter);

    if (counter === targetNumber) {
      alert("You win!");
    }

    else if (counter >= targetNumber) {
      alert("You lose!!");
    }

});




