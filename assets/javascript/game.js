var wins = 0;
var losses = 0;
var score = 0;
var randomNum = [];
var emeralds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var blueEmerald = '';
var greenEmerald = [];
var yellowEmerald = [];
var purpEmerald = [];

function gameStart() {
// ----------------------target number
randomNum = Math.floor(Math.random() * 102) + 19;
// ----------------------emeralds have random number
	blueEmerald = emeralds[Math.floor(Math.random() * emeralds.length)];
	greenEmerald = emeralds[Math.floor(Math.random() * emeralds.length)];
	yellowEmerald = emeralds[Math.floor(Math.random() * emeralds.length)];
	purpEmerald = emeralds[Math.floor(Math.random() * emeralds.length)]
}



gameStart()