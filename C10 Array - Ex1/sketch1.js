//total 5 subject marks
var sum = 0;
var hari_marks = [99,98,99,99,100];
console.log(hari_marks.length)
//console.log(hari_marks[3]) //check the output

function setup() {
  createCanvas(400, 400);

  //call the function to calculate the average score
  score_average();
 
}

function draw() {
  background(100,200,50);
 
  drawSprites();
}

//to calculate the average score
function score_average(){
  for(var i = 0;i<hari_marks.length;i = i + 1){
    sum = sum + hari_marks[i] //sum = 99 + 98 + 99 + 99 + 100
  }
  var avg = sum/(hari_marks.length)
  console.log(avg)
}

