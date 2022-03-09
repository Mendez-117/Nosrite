noseX=150;
noseY=150;

function preload() {

}

function setup() {
    canvas=createCanvas(500,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw() {
    strokeWeight(3);
    stroke(0,0,0);
    fill(0,0,0);
    line(noseX,noseY,noseX,noseY);
   
}

function modelLoaded() {
    console.log("Model Loaded!")
}

function gotPoses(results) {
    if(results.length>0) {
        console.log(results);
        noseX=results[0].pose.nose.x-15;
        noseY=results[0].pose.nose.y-15;
        console.log("x position of nose is " + results[0].pose.nose.x);
        console.log("y position of nose is " + results[0].pose.nose.y);
    }
}


function clr() {
    clear();
} 