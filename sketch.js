

let start = 0.5
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
  //background(0)
  // put setup code here
}

function draw() {
  background(30)
  noStroke()
  translate(width/2,height/2)
  let space = 0.1

  for (let i=0;i<360;i+=space){
    let xoff=map(cos(i),-1,1,0,3)
    let yoff=map(sin(i),-1,1,0,3)
    let n = noise(xoff+start,yoff+start)
    let h = map(n,0,1,-150,150)
    let r = map(sin(i),-1,1,100,200)
    let g = map(h,-150,150,0,150)
    let b = map(n,0,1,150,255)
    rotate(space)
    fill(map(n/2,0,1,0,255),map(n,0,1,0,255),map(n*2,0,1,0,255))
    rect(map(n,0,1,0,600),0,h,1)
    fill(0)
    rect(map(n,0,1,200,400),0,h,1)
    fill(map(n*2,0,1,0,255),map(n/2,0,1,0,255),map(n,0,1,0,255))
    rect(map(n,0,1,50,200),0,h,1)
    fill(map(n*2,0,1,0,255),map(n,0,1,0,255),map(n/2,0,1,0,255))
    rect(map(n,0,1,100,300),0,h,1)
    fill(map(n*2,0,1,0,255),map(n/2,0,1,0,255),map(n/2,0,1,0,255))
    rect(map(n,0,1,100,400),0,h,1)
    fill(map(n/2,0,1,0,255),map(n/2,0,1,0,255),map(n,0,1,0,255))
    rect(map(n,0,1,0,100),0,h,1)
    fill(map(n,0,1,0,255),map(n/2,0,1,0,255),map(n,0,1,0,255))
    rect(map(n,0,1,0,50),0,h,1)


  }
  start += 0.01


}
