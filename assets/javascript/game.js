$(document).ready(function() {

	//create target score and print to document
	var targetScore = Math.floor((Math.random() * 100) + 19);
	$("#target-score").html(targetScore);

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

	//new game function
	function newGame() {
		targetScore = Math.floor((Math.random() * 100) + 19);
		$("#target-score").html(targetScore);
		
		currentScore = 0;
		$("#current-score").html(currentScore);

		$("#gem-1").attr("gem-value", Math.floor((Math.random() * 12)+ 1));
		$("#gem-2").attr("gem-value", Math.floor((Math.random() * 12)+ 1));
		$("#gem-3").attr("gem-value", Math.floor((Math.random() * 12)+ 1));
		$("#gem-4").attr("gem-value", Math.floor((Math.random() * 12)+ 1));
	}

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

		//conditional statements to check for win or loss
		if (currentScore === targetScore) {
			winCounter ++;
			$("#win-counter").html(winCounter);
			var winSound = new Audio("assets/audio/Taric.joke10.ogx");
			winSound.play();
			newGame();
		}
		else if (currentScore >= targetScore) {
			lossCounter++;
			$("#loss-counter").html(lossCounter);
			var loseSound = new Audio("assets/audio/Taric.attack1.ogx");
			loseSound.play();
			newGame();
		}
	});
});