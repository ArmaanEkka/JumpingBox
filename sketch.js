var canvas;
var music;
var box ,surface1 ,surface2 ,surface3 ,surface4,edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create's 4 different surfaces
    surface1 = createSprite(0,580,360,30);
    surface1.shapeColor = "red";

    surface2 = createSprite(295,580,200,30);
    surface2.shapeColor = "lime";

    surface3 = createSprite(515,580,200,30);
    surface3.shapeColor = "cyan";

    surface4 = createSprite(740,580,220,30);  
    surface4.shapeColor = "magenta";

    //create's box sprite and give velocity
    box = createSprite(Math.random(20,750),100,40,40);
    box.velocityX = 17;
    box.velocityY = 8;
    box.shapeColor =" yellow";

    //create's edgeSprites

    edges = createEdgeSprites();


}

function draw() {
    background(rgb(169,169,169));

    box.bounceOff(edges);
   
    if(surface1.isTouching(box) && box.bounceOff(surface1)){
        box.shapeColor = surface1.shapeColor;
        music.play();
    }

    if(surface2.isTouching(box) && box.bounceOff(surface2)){
        box.shapeColor = surface2.shapeColor;
        music.stop();
        box.velocityX = 0;
        box.velocityY = 0;
    }

    if(surface3.isTouching(box) && box.bounceOff(surface3)){
        box.shapeColor = surface3.shapeColor;
       // music.play();
    }

    if(surface4.isTouching(box) && box.bounceOff(surface4)){
        box.shapeColor = surface4.shapeColor;
       // music.play();
    }


    drawSprites();


    //add condition to check if box touching surface and make it box
}
