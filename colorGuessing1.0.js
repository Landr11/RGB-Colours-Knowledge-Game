var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
	//Change Header h1 background color 
	h1.style.backgroundColor = "steelblue";
    //Change numSquare from 6 to 3 for Easy mode
    numSquares = 3;
	//Toggle background color of GameMode button
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	//Set the number of Squares
	colors = generateRandomColors(numSquares);
	//choose new picked color
	pickedColor = pickColor();
	//Display new pickedcolor on the board
	colorDisplay.textContent = pickedColor;
	//Remove the message display
	messageDisplay.textContent = "";
	//Loop through the squars turn on and off
	for(var i = 0; i< squares.length; i++) {
		if(colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		}  else {
			squares[i].style.display = "none";
		}
	}
})


hardBtn.addEventListener("click", function(){
	//Change Header h1 background color 
	h1.style.backgroundColor = "steelblue";
	//Change numSquare from 6 to 3 for Easy mode
    numSquares = 6;
	//Toggle background color of GameMode button
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	//Set the number of Squares
	colors = generateRandomColors(numSquares);
	//choose new picked color
	pickedColor = pickColor();
	//Display new pickedcolor on the board
	colorDisplay.textContent = pickedColor;
	//Remove the message display
	messageDisplay.textContent = "";
	//Loop through the squares display them
	for(var i = 0; i< squares.length; i++) {
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		};
})


resetButton.addEventListener("click", function() {
	//Change reset button message
	this.textContent ="New Colors";
	//change messageDisplay
	messageDisplay.textContent = "";
	//generate new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from the colors array
	pickedColor = pickColor();
	//change colorDisplay to match pickedColor
	colorDisplay.textContent = pickedColor;
	//change header h1 background color
	h1.style.backgroundColor = "steelblue";
	//change colors of sqaures
   for(var i = 0; i < squares.length; i++) {
	//add initial colors to each square
	squares[i].style.backgroundColor = colors[i]; 
        };

});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++) {
	//add initial colors to each square
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to squares
    squares[i].addEventListener("click", function(){
    //grab color of the clicked square	
    var clickedColor = this.style.backgroundColor;

    //compare pickedcolor and clicked color

    if (clickedColor === pickedColor) {
    	messageDisplay.textContent = "Correct!";
    	changeColors(clickedColor);
    	h1.style.backgroundColor = clickedColor;
    	resetButton.textContent = "Play Again?";
    	alert("You Won");

    } else {

    	this.style.backgroundColor = "#232323";
    	messageDisplay.textContent = "Try Again";
    }

     });

};


function changeColors(color){
 
 //loop through all squares
 for( var i = 0; i < squares.length; i++) {
 //cnange all sqaures colors to match winning color
 squares[i].style.backgroundColor = color;
 }
}


function pickColor(){
	//make a random number to pick the color
   var random = Math.floor(Math.random() * colors.length);

   //return the picked color
   return colors[random];
}


function generateRandomColors(num) {
 //create an array
 var arr = [];
 //repeat num times
 for(var i = 0; i < num; i++) {
  //get random color and push in into arr
  arr.push(randomColor());
   }

 //return the array
 return arr;
}

function randomColor(){
	//pick an rgb red from 0 to 255
	var r = Math.floor(Math.random() * 256);
	//pick an rgb green from 0 to 255
	var g = Math.floor(Math.random() * 256);
	//pick an rgb blue from 0 to 255
	var b = Math.floor(Math.random() * 256);
    
    //return rgb
    return "rgb(" + r + ", " + g + ", " + b + ")";

}

