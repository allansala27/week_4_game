$(document).ready(function() {

	//create target score and print to document
	var targetScore = Math.floor((Math.random() * 100) + 19);
	$("#target-score").html(targetScore);

	//array of possible gem values
	// gemValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

	//create var to hold current score and initialize to 0
	var currentScore = 0;

	//give values to gems between 1 and 12
	$("#gem-1").attr("gem-value", Math.floor((Math.random() * 12)+ 1));
	$("#gem-2").attr("gem-value", Math.floor((Math.random() * 12)+ 1));
	$("#gem-3").attr("gem-value", Math.floor((Math.random() * 12)+ 1));
	$("#gem-4").attr("gem-value", Math.floor((Math.random() * 12)+ 1));

	//win and loss counters
	var winCounter = 0;
	var lossCounter = 0;

	//newGame function
	// function newGame () {
	// 	currentScore = 0;
	// 	targetScore = Math.floor((Math.random() * 100) + 19);
	// 	$("#gem-1").attr("gem-value", gemValues[Math.floor(Math.random() * 12)]);
	// 	$("#gem-2").attr("gem-value", gemValues[Math.floor(Math.random() * 12)]);
	// 	$("#gem-3").attr("gem-value", gemValues[Math.floor(Math.random() * 12)]);
	// 	$("#gem-4").attr("gem-value", gemValues[Math.floor(Math.random() * 12)]);
	// }


	//on click function
	$(".btn").on("click", function () {

		//var to hold value of gem
		var gemVal = ($(this).attr("gem-value"));

		//change string into int
		gemVal = parseInt(gemVal);
		console.log(gemVal);

		//update currentScore
		currentScore += gemVal;

		$("#current-score").html(currentScore);

		if (currentScore === targetScore) {
			alert("YOU WIN!");
			winCounter ++;
			// newGame();
		}
		else if (currentScore >= targetScore) {
			alert("YOU LOSE!");
			lossCounter++;
			// newGame();	
		}
	});
});