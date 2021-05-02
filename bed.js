img = "";
status = "";

function preload(){
    img = loadImage("15664759475d5e86ab51679.jpeg");
}

function setup(){
    canvas = createCanvas(540,420);
    canvas.position(350,200);
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("object_status").innerHTML = "STATUS : Detecting Objects";
}
function modelLoaded(){
    console.log("model loaded!");
    status = true;
    objectDetector.detect(img,gotResults);
}

function gotResults(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
}

function draw(){
    image(img,0,0,540,420);
}