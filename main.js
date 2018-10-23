var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var modeBtn = document.querySelectorAll(".mode");

init();

function init() {
  //difficulty select, mode buttons
  setupModeBtns();
  //square listeners
  setupSquares();
  //reset everything
  reset();
}
//mode btn listeners
function setupModeBtns() {
  for (var i = 0; i < modeBtn.length; i++) {
    modeBtn[i].addEventListener("click", function() {
      modeBtn[0].classList.remove("selected");
      modeBtn[1].classList.remove("selected");
      this.classList.add("selected");

      this.textContent === "Easy" ? (numSquares = 3) : (numSquares = 6);

      reset();
    });
  }
}

//square listeners
function setupSquares() {
  for (var i = 0; i < squares.length; i++) {
    //add click listeners to squares
    squares[i].addEventListener("click", function() {
      //grab color of clicked square
      var clickedColor = this.style.backgroundColor;
      //compare color to pickedColor
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        resetBtn.textContent = "Play Again?";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
  }
}

//pick colors, change content, etc
function reset() {
  //generate all new colors
  colors = generateRandomColors(numSquares);
  //pick new random colors
  pickedColor = pickColor();
  //change color display to match picked color
  colorDisplay.textContent = pickedColor;
  resetBtn.textContent = "New Colors";
  messageDisplay.textContent = "";
  //change colors of quare
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
}

// easyBtn.addEventListener('click', function(){
//     hardBtn.classList.remove('selected');
//     easyBtn.classList.add('selected');
//     numSquares = 3
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i = 0; i < squares.length; i++){
//         if(colors[i]){
//             squares[i].style.backgroundColor = colors[i];
//         } else {
//             squares[i].style.display = 'none';
//         }
//     };
// });

// hardBtn.addEventListener('click', function(){
//     hardBtn.classList.add('selected');
//     easyBtn.classList.remove('selected');
//     numSquares = 6
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i = 0; i < squares.length; i++){
//         squares[i].style.backgroundColor = colors[i];
//        squares[i].style.display = 'block';
//     };
// });

resetBtn.addEventListener("click", function() {
  reset();
});

function changeColors(color) {
  //loop through all the squares
  for (var i = 0; i < squares.length; i++) {
    //change each color to match given color
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  //make an array
  var arr = [];
  //repeat num times
  for (var i = 0; i < num; i++) {
    //get random color and push into arr
    arr.push(randomColor());
  }
  //return that array
  return arr;
}

function randomColor() {
  //pick a red from 0 to 255
  var r = Math.floor(Math.random() * 256);
  //pick a green from 0 to 255
  var g = Math.floor(Math.random() * 256);
  //pick a blue from 0 to 255
  var b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}
