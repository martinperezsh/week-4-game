var wins = 0;
var losses = 0;
var score = 0;
var randomNum = [];
var emeralds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var blueEmerald = [];
var greenEmerald = [];
var yellowEmerald = [];
var purpEmerald = [];
$('#totalScore').html(score);

function gameStart() {
// ----------------------target number-------------
randomNum = Math.floor(Math.random() * 102) + 19;
 document.getElementById('targetNumber').innerHTML = randomNum;
// ----------------------emeralds have random number
	blueEmerald = emeralds[Math.floor(Math.random() * emeralds.length)];
	greenEmerald = emeralds[Math.floor(Math.random() * emeralds.length)];
	yellowEmerald = emeralds[Math.floor(Math.random() * emeralds.length)];
	purpEmerald = emeralds[Math.floor(Math.random() * emeralds.length)];

	score = 0;
}



gameStart()
// -----------------InnerHTML-----------------
document.getElementById('targetNumber').innerHTML = randomNum;
document.getElementById('winCount').innerHTML = wins;
document.getElementById('lossCount').innerHTML = losses;
document.getElementById('totalScore').innerHTML = score;


// ---------------Click events------------------
$('#bluebtn').on('click', function () {
	score = score + blueEmerald;
	$('#totalScore').html(score);
  if (score === randomNum) {
  wins++;
  alert('You won!')
  score = 0;
  gameStart();
  $('#totalScore').html(score);
  $("#winCount").html(wins);  
  $("#lossCount").html(losses);
} else if (score > randomNum) {
  losses++;
  alert('You lose!')
  gameStart();
  $('#totalScore').html(score);
  $("#winCount").html(wins);
  $("#lossCount").html(losses);
}

});
$('#greenbtn').on('click', function () {
	score = score + greenEmerald;
	$('#totalScore').html(score);
  if (score === randomNum) {
  wins++;
  alert('You won!')
  score = 0;
  gameStart();
  $("#winCount").html(wins);  
  $("#lossCount").html(losses);
  $('#totalScore').html(score);
} else if (score > randomNum) {
  losses++;
  alert('You lose!')
  score = 0;
  gameStart();
  $("#winCount").html(wins);
  $("#lossCount").html(losses);
  $('#totalScore').html(score);
}
  
});
$('#yellowbtn').on('click', function () {
	score = score + yellowEmerald;
	$('#totalScore').html(score);
  if (score === randomNum) {
  wins++;
  alert('You won!')
  score = 0;
  gameStart();
  $("#winCount").html(wins);  
  $("#lossCount").html(losses);
  $('#totalScore').html(score);
} else if (score > randomNum) {
  losses++;
  alert('You lose!')
  score = 0;
  gameStart();
  $("#winCount").html(wins);
   $("#lossCount").html(losses);
  $('#totalScore').html(score);
}

});

$('#purpbtn').on('click', function () {
	score = score + purpEmerald;
	$('#totalScore').html(score);
  if (score === randomNum) {
  wins++;
  alert('You won!')
   score = 0;
  gameStart();
  $("#winCount").html(wins);  
  $("#lossCount").html(losses);
  $('#totalScore').html(score);
} else if (score > randomNum) {
  losses++;
  alert('You lose!')
  score = 0;
  gameStart();
  $("#winCount").html(wins);
   $("#lossCount").html(losses);
  $('#totalScore').html(score);
}
});

//------------------ Win/loss counter----------------
if (score === randomNum) {
  wins++;
  gameStart();
} else if (score > randomNum) {
  losses++;
  gameStart();
  $("#winCount").html(wins);
   $("#lossCount").html(losses);
}
