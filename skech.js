function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background("white");
  } 
  
  function draw() {
     fill("red");
     circle(200,200,50);
  } 
  
  let cor;
  let posicaoHorizontal // x
  let posicaoVertical // y
  function setup() {
    createCanvas(400, 400);
    background("white");
    cor = "blue";
  }
  
  function draw() {
    fill(cor);
    circle(200,200,50);
  }
  
  function setup() {
    createCanvas(400, 400);
    background("white");
    cor = color(random(0, 255), 0, 0);
  }
  
  
  function setup() {
    createCanvas(400, 400);
    background("white");
    cor = color(random(0, 255), random(0, 255), random(0, 255))
     posicaoHorizontal = 200;
    posicaoVertical = 200;
  }
  
  function draw() {
    
    fill(cor);
    circle(posicaoHorizontal, posicaoVertical, 50);
  }
  