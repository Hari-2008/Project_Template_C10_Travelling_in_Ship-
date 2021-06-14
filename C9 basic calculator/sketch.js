var n1,n2;
var b1,b2,b3,b4;
var sum = 0;
var difference=0;
var num1, num2;

function setup() {
  
  createCanvas(400, 400);
  
  n1 = 10;
  n2 = 5;

  num1 = createInput();
  num1.position(5,60);

  num2 = createInput();
  num2.position(200,60);

  b1 = createButton("ADD");
  b1.position(10,200)
  b1.mousePressed(add) //add is the name of the function

  b2 = createButton("MULTIPLY");
  b2.position(100,200)
  b2.mousePressed(multiply)

  b3 = createButton("SUB");
  b3.position(10,100)
  b3.mousePressed(difference)

  b4 = createButton("DIVIDE");
  b4.position(300,300)
  b4.mousePressed(quotient)


  
 // sum = n1 + n2;
 // difference = n1-n2;
 // product = n1 * n2;
 // quotient = n1/n2;
  
  
  textAlign(CENTER);
  textSize(15);
}

function draw() {
  background("skyblue")

  n1 = parseInt(num1.value()) //convert the value from the input box to an INTEGER/number, otherwise value considered as a string
  n2 = parseInt(num2.value())

  text("Number 1",70,50)
  text("Number 2",270,50)
  

}

function add(){
  sum = n1 + n2
  console.log("sum: "+sum)
}



function multiply(){
  product = n1*n2
 console.log("product: "+product)
}


function difference(){
  difference = n1-n2
 console.log("difference: "+differenence)
}


function quotient(){
  quotient = n1/n2
 console.log("quotient: "+quotient)
}



