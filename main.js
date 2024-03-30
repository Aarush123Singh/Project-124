function setup(){
    video=createCapture(VIDEO);
    video.size(600,500);

    canvas=createCanvas(600,410);
    canvas.position(650,100);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background('#1CFCC9');
}

function modelLoaded(){
    console.log('PoseNet Is Initialized.');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }
}