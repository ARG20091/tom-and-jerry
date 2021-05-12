var cat
var mouse
function preload() {
    //load the images here
    Tom = loadAnimation("cat1.png")
    Jerry = loadAnimation("mouse1.png")
    background = loadImage("garden.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(200,200,20,20)
    mouse = createSprite(200,250,10,10)
    cat.addImage ("Tom")
    mouse.addImage("Jerry")
}

function draw() {

    background("background");
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
