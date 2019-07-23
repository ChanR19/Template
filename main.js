//Remember that the computer reads the code from top to bottom.

//FYI, the setup() and draw() functions are called in the p5.js file in the libraries folder.

//Please look at the Useful Links section of the GitHub before coding





//Button Parameters: x,y,width,height,text,text size
var button1 = new Button(320,150,100,30,"I'm a button",17); //Makes a button object

//TextBox parameters: x,y,width,height,text size
var textBox1 = new TextBox(250,20,150,30,17); //Makes a text box object

function setup(){
  //This function is the first thing that runs in the program
  createCanvas(500, 500);
}

function draw(){
  //This function runs 60 times per second
  background(200,200,200); //This sets the background to the RGB value of 200,200,200, or light gray

  button1.update(); //updates the button object
  textBox1.update(); //updates the text box object

  fill(0,128,128); //Sets all shapes after this to the RGB value of 0,128,128, or teal
  rect(50,100,75,50); //Draws a rectangle at x=50, y=100 with a width of 75 pixels and a height of 50 pixels

  fill(0,255,0); //Sets all shapes after this to the RGB value of 0,128,128, or green
  rect(200,150,100,30); //Draws a rectangle at x=200, y=150 with a width of 100 pixels and a height of 30 pixels

  textSize(15);
  text("this is a test",280,220);

  if(button1.clicked){
    textSize(30);
    text("Text from the textbox: "+textBox1.data,100,300);
  }
}
