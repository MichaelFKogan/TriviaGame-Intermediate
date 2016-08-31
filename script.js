$(document).ready(function(){
	
	// WHEN DOCUMENT STARTS, HIDE JUMBOTRON3.
	

	// WHEN PLAYER HITS START BUTTON, MAKE SURE J3 IS REVEALED.

var timer = "00:00";
var number = 21;
var x=0;
var countdown="";


var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered= 0;





// IF X=0, START BUTTON CLICK = START TIMER...
$('#start').on('click', function() {startTimer(); });

$('#Next').on('click', function()
			{number = 21; clearInterval(counter); startTimer(); });


	// START TIMER
	function startTimer(){
		counter = setInterval(decrement, 1000);


	};

	function decrement(){
		number--;
		
		$('#jumbotron1').html('<div class="timer text-center"><h2> Time Remaining: '+ number +' </h2></div>');

		if(number==20){newScreen();}

		if(number== 0)
			{number = 21; clearInterval(counter); startTimer(); newScreen();} 
	};



// WHEN START IS PRESSED
function newScreen(){
	
	if(x==0){screen1()}
	else if(x==1){screen2()}
	else if(x==2){screen3()}
	else if(x==3){screen4()}
	else if(x==4){gameOver()}
	x=x+1;

};

	function screen1(){
		$('#jumbotron0').hide();
		$('#jumbotron2').hide();
		$('#directions').hide();

		$('#jumbotron1').removeClass('hidden');
		$('#jumbotron3').removeClass('hidden');
		$('#next').removeClass('hidden');
	};

	function screen2(){
		$('#jumbotron3').hide();
		$('#jumbotronQuestion2').removeClass('hidden');
	};

	function screen3(){
		
		$('#jumbotronQuestion2').hide();
		$('#jumbotronQuestion3').removeClass('hidden');
	};

	function screen4(){
		
		$('#jumbotronQuestion3').hide();
		$('#jumbotronQuestion4').removeClass('hidden');
	};

		


		//THE GAME OVER FUNCTION: IF THE PLAYER'S ANSWER IS CORRECT, INCORRECT, OR THEY DIDN'T SELECT AN ANSWER, THEN DISPLAY THOSE ANSWERS ON THE NEXT PAGE.

	function gameOver(){

	$('#jumbotronQuestion4').hide();		

		if($('input[name=question1]:checked').val() == "1A" || $('input[name=question1]:checked').val() == "1B" || $('input[name=question1]:checked').val() == "1C")
			{correctAnswers = correctAnswers + 1}
		else if($('input[name=question1]:checked').val() == undefined){unanswered = unanswered + 1;}
		else{incorrectAnswers=incorrectAnswers+1} 
			
		if($('input[name=question2]:checked').val() == "2C"){correctAnswers = correctAnswers + 1}
		else if($('input[name=question2]:checked').val() == undefined){unanswered = unanswered + 1;}
		else{incorrectAnswers=incorrectAnswers+1}  
			
		if($('input[name=question3]:checked').val() == "3B"){correctAnswers = correctAnswers + 1}
		else if($('input[name=question3]:checked').val() == undefined){unanswered = unanswered + 1;}
		else{incorrectAnswers=incorrectAnswers+1}  
			
		if($('input[name=question4]:checked').val() == "4D"){correctAnswers = correctAnswers + 1}
		else if($('input[name=question4]:checked').val() == undefined){unanswered = unanswered + 1;}
		else{incorrectAnswers=incorrectAnswers+1}  
		
		$('#jumbotron3').addClass('hidden');
		$('#jumbotron4').removeClass('hidden');
		$('#jumbotron1').hide();
		$('#jumbotron5').removeClass('hidden');
		$('#next').addClass('hidden');


		$('#jumbotron4').html('<div><h2>Game Over</h2></div><br><hr><br><h3> Correct: '+ correctAnswers +'<br> Incorrect: ' + incorrectAnswers + '<br> Unanswered: ' + unanswered + '</h3></div>');

		
	//console.log($('input[name=question1]:checked').val());
		
	// ALSO, NEED NEW SCREEN

	 // gets particular group of radio buttons
		
	// ALSO, NEED NEW SCREEN
	};






















// END DOCUMENT READY
});