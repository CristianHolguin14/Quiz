function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var question7 = document.quiz.question7.value;
	var question8 = document.quiz.question8.value;
	var correct = 0;


	if (question1 == "precisely") {
		correct++;
}
	if (question2 == "Moment") {
		correct++;
}	
	if (question3 == "he explained") {
		correct++;
	}
	if (question4 == "beatiful") {
		correct++;
	}
	if (question5 == "insisted") {
		correct++;
	}	
	if (question6 == "harmonious") {
		correct++;
	}	
	if (question7 == "several") {
		correct++;
	}
	if (question8 == "was") {
		correct++;
	}	
	
	
	var pictures = ["img/win.gif", "img/meh.jpeg", "img/lose.gif"];
	var messages = ["Great job!", "That's just okay", "You really need to do better"];
	var score;

	if (correct == 0) {
		score = 2;
	}

	if (correct > 0 && correct < 3) {
		score = 1;
	}

	if (correct == 3) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[score];
	}
	