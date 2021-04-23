noseX = 0;
noseY = 0;

function preload(){
    clown_nose = loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png");
}

function setup(){
    canvas = createCanvas(450, 450);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(450, 450);
    video.hide();

    PoseNet = ml5.poseNet(video, modelLoaded);
    PoseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet is initialized. ');
}

function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}

function draw(){
    image(video, 0, 0, 450, 450);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    //circle(noseX, noseY, 50);
    image(clown_nose, noseX-20, noseY-17, 50, 50);
}

function take_snapshot(){
    save('myImage.jpg');
}