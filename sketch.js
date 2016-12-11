// Defines point x and y variables
var x1,y1,x2,y2,x3,y3,mx1,my1,m1,mx2,my2,m2,mx3,my3,m3,slopeAB,slopeBC,slopeCA,cirx,ciry,cirrad;
// Records amount of clicks
var clicks=0;
// Finds average of two numbers
var avg = function(one,two){
  var sum = one + two;
  return sum / 2;
};

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  // Creates the points
  fill(0);
  ellipse(x1,y1,2,2);
  ellipse(x2,y2,2,2);
  ellipse(x3,y3,2,2);
  var A = vertex(x1,y1);
  var B = vertex(x2,y2);
  var C = vertex(x3,y3);
  // Draws the triangle
  noFill();
  stroke(0);
  var tri = triangle(x1,y1,x2,y2,x3,y3);
  // Triangle line preview
  stroke(0);
  if(clicks===1){
    line(x1,y1,mouseX,mouseY);
  } else if(clicks===2){
    line(x1,y1,mouseX,mouseY);
    line(x2,y2,mouseX,mouseY);
  }
  stroke(173,216,230);
  line(mx1-windowWidth,my1-slopeAB*windowWidth,mx1+windowWidth,my1+slopeAB*windowWidth);
  line(mx2-windowWidth,my2-slopeBC*windowWidth,mx2+windowWidth,my2+slopeBC*windowWidth);
  line(mx3-windowWidth,my3-slopeCA*windowWidth,mx3+windowWidth,my3+slopeCA*windowWidth);
}

function mouseClicked(){
  // User input to create triangle
  switch(clicks) {
    case 0:
      x1=mouseX;
      y1=mouseY;
      clicks++;
      break;
    case 1:
      x2=mouseX;
      y2=mouseY;
      clicks++;
      break;
    case 2:
      x3=mouseX;
      y3=mouseY;
      clicks++;
      var perpslope = function(xone,yone,xtwo,ytwo){
        var up = ytwo - yone;
        var down = xtwo - xone;
        var rec = down/up;
        return rec * -1;
      };
      // Finding midpoint of AB
      mx1 = avg(x1,x2);
      my1 = avg(y1,y2);
      // Finding midpoint of BC
      mx2 = avg(x2,x3);
      my2 = avg(y2,y3);
      // Finding midpoint of CA
      mx3 = avg(x1,x3);
      my3 = avg(y1,y3);
      //Finding perpendicular slope of AB
      slopeAB = perpslope(x1,y1,x2,y2);
      //Finding perpendicular slope of BC
      slopeBC = perpslope(x2,y2,x3,y3);
      //Finding perpendicular slope of CA
      slopeCA = perpslope(x1,y1,x3,y3);
      // Finding coordinates of triangle
  }
}
