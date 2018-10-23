var numSquares = 6;
var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll('.square');
var colorDisplay = document.getElementById('colorDisplay');

var pickedColor = pickColor();
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetBtn = document.querySelector('#reset');
var easyBtn = document.querySelector('#easyBtn');
var hardBtn = document.querySelector('#hardBtn');


//difficulty select
easyBtn.addEventListener('click', function(){
    hardBtn.classList.remove('selected');
    easyBtn.classList.add('selected');
    numSquares = 3
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = 'none';
        }
    };
});

hardBtn.addEventListener('click', function(){
    hardBtn.classList.add('selected');
    easyBtn.classList.remove('selected');
    numSquares = 6
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
       squares[i].style.display = 'block';
    };
});

colorDisplay.textContent = pickedColor;

resetBtn.addEventListener('click', function(){
    
    //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick new random colors
    pickedColor = pickColor();
    //change color display to match picked color
    colorDisplay.tectContent = pickedColor;
    this.textContent = 'New Colors';
    messageDisplay.textContent = '';
    //change colors of quare
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = 'steelblue';
});

for(var i = 0; i < squares.length; i++){
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add click listeners to squares
    squares[i].addEventListener('click', function(){
        //grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        //compare color to pickedColor 
        if(clickedColor === pickedColor){
            messageDisplay.textContent = 'Correct!';
            resetBtn.textContent = 'Play Again?';
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        } else {
            this.style.backgroundColor = '#232323';
            messageDisplay.textContent = 'Try Again';
        }
    });
}

function changeColors(color){
    //loop through all the squares
    for(var i = 0; i < squares.length; i++){
    //change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
   var random = Math.floor(Math.random() * colors.length);
   return colors[random];
}

function generateRandomColors(num){
    //make an array
    var arr = [];
    //repeat num times
    for(var i = 0; i < num; i++){
       //get random color and push into arr 
       arr.push(randomColor());  
    }
    //return that array
    return arr;
}

function randomColor(){
    //pick a red from 0 to 255
   var r = Math.floor(Math.random() * 256);
    //pick a green from 0 to 255
   var g = Math.floor(Math.random() * 256);
    //pick a blue from 0 to 255
   var b = Math.floor(Math.random() * 256);
   
   return `rgb(${r}, ${g}, ${b})`;
}