let thing1;
let thing2;
let thing3;
let thing4;
let thing5;
let thing6;
let thing7;
let thing8;
let thing9;
let random_w;
let random_h;
let jump;
let x_thing;
let mouse_clicked
let start_w
let start_h

function setup() {

  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
  background(random(1,255),random(1,255),random(1,255))

  thing1 = new Thing(10);
  thing2 = new Thing(20);
  thing3 = new Thing(30);
  thing4 = new Thing(40);
  thing5 = new Thing(50);
  thing6 = new Thing(60);
  thing7 = new Thing(70);
  thing8 = new Thing(80);
  thing9 = new Thing(90);
  random_w = random(0,50);
  random_h = random(50,100);
  jump = random(0.001,0.005)
  x_thing = random(2,10)
  y_thing = random(1,10)
  mouse_clicked = 0
  start_w = windowWidth/2
  start_h = windowHeight/2
}

class Thing {
  constructor(seed) {
    this.seed = seed
    this.width = random(0,4)
    this.space = random(1,5)
    this.min_height = random(-350,-50)
    this.max_height = random(100,600)
    this.start = random(1,1000)
    this.min_x = random(0,300)
    this.max_x = this.min_x+random(50,300)
    this.red = random(1,700)
    this.red_off = random(0,255)
    this.green = random(1,700)
    this.green_off = random(0,255)
    this.blue = random(1,700)
    this.blue_off = random(1,255)
    this.start_off = random(0.005,0.015)
    this.factor_r = random(1,500)
    this.factor_b = random(1,500)
    this.factor_g = random(1,500)
    this.decider = random()
    this.transp = random(1,255)

  }

  display(){



    for (let ii=0;ii<360;ii+=this.space/10){
      let xoff=map(cos(ii),-1,1,0,x_thing)
      let yoff=map(sin(ii),-1,1,0,y_thing)
      let n = noise(xoff+this.start,yoff+this.start)
      let height = map(n,0,1,this.min_height,this.max_height)
      rotate(this.space/10)
      fill((map(n*this.factor_r,0,100,0,this.red,random)+this.red_off%150),(map(n*this.factor_g,0,100,0,this.green,random)+this.green_off)%255,(map(n*this.factor_b,0,100,0,this.blue)+this.blue_off)%255,this.transp)


      if(this.decider<0.7){
      rect(map(n,0,1,this.min_x,this.max_x),4,height,this.width)}
      if (this.decider>=0.7){
      circle(map(n,0,1,this.min_x,this.max_x),random(),height/2)}

    }
    this.start += this.start_off

  }
}


function draw() {
  let draw_noise = noise(random_w,random_h)
  //background(random(1,255),random(1,255),random(1,255))
  //background(0)
  noStroke()

  if((frameCount%55)==30){
    thing1 = new Thing(10);
    thing2 = new Thing(20);
    thing3 = new Thing(30);
    thing4 = new Thing(40);
    thing5 = new Thing(50);
    thing6 = new Thing(60);
    thing7 = new Thing(70);
    thing8 = new Thing(80);
    thing9 = new Thing(90);
    x_thing = random(2,10)
    start_w = random(0,windowWidth)
    start_h = random(0,windowHeight)
  }

  translate(start_w,start_h)
  thing1.display();
  thing2.display();
  thing3.display();
  thing4.display();
  thing5.display();
  thing6.display();
  thing7.display();
  thing8.display();
  thing9.display();
  random_w += jump
  random_h += jump
  start_w += map(draw_noise,0,1,-5,5)
  start_h += map(draw_noise,0,1,-5,5)

}

function mouseClicked(){
  thing1 = new Thing(10);
  thing2 = new Thing(20);
  thing3 = new Thing(30);
  thing4 = new Thing(40);
  thing5 = new Thing(50);
  thing6 = new Thing(60);
  thing7 = new Thing(70);
  thing8 = new Thing(80);
  thing9 = new Thing(90);
  x_thing = random(2,10)
  start_w = random(0,windowWidth)
  start_h = random(0,windowHeight)
}

  /*
  let space = 0.3

  for (let i=0;i<360;i+=space){
    let xoff=map(cos(i),-1,1,0,3)
    let yoff=map(sin(i),-1,1,0,4)
    let n = noise(xoff+start,yoff+start)
    let h = map(n,0,1,-200,250)
    let r = map(sin(i),-1,1,10,200)
    let g = map(h,-150,150,0,250)
    let b = map(n,0,1,10,255)
    rotate(space)
    fill(random(0,255),map(n,0,1,50,255),map(n*2,0,1,0,255))
    rect(100,0,h,15)

    fill(random(0,255))
    rect(map(n,0,1,200,400),0,h,1)
    fill(map(n*2,0,1,0,255),random(0,255),map(n,0,1,0,255))
    rect(map(n,0,1,50,200),0,random(10,100),1)
    fill(map(n*2,0,1,0,255),map(n,0,1,0,255),map(n/2,0,1,0,255))
    rect(map(n,0,1,100,300),0,h,1)
    fill(random(0,255),random(0,255),random(0,255))
    rect(map(n,0,1,100,400),0,h,1)
    fill(map(n/2,0,1,0,255),map(n/2,0,1,0,255),map(n,0,1,0,255))
    rect(map(n,0,1,0,100),0,h,1)
    fill(map(n,0,1,0,255),map(n/2,0,1,0,255),random(0,255))
    rect(map(n,0,1,0,50),0,h,1)


  }
  start += 0.01
*/
