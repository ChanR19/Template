//Remember that the computer reads the code from top to bottom.

//FYI, the setup() and draw() functions are called in the p5.js file in the libraries folder.

//Please look at the Useful Links section of the GitHub before coding

function setup(){
  //This function is the first thing that runs in the program
  createCanvas(500, 500);
}

function draw(){
  //This function runs 60 times per second

  background(200,200,200); //This sets the background to the RGB value of 200,200,200, or light gray

  fill(0,128,128); //Sets all shapes after this to the RGB value of 0,128,128, or teal
  rect(50,100,75,50); //Draws a rectangle at x=50, y=100 with a width of 75 pixels and a height of 50 pixels
  rect(100,100,75,50); //Draws a rectangle at x=50, y=100 with a width of 75 pixels and a height of 50 pixels
}
