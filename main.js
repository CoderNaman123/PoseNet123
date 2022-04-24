noseX = "";
noseY = "";
//wigX = "";
//wigY= "";
shoulderX = "";
shoulderY = "";
function preload()
{
  clown_nose = loadImage('https://i.postimg.cc/25GG67VS/clownnose.png');
  //wig = loadImage('https://i.postimg.cc/B6svh2gH/Pngtree-capable-short-hair-lady-wig-6018786.png');
  parrot = loadImage('https://i.postimg.cc/1ttDCxMp/Pngtree-colorful-parrot-creative-illustration-4474016.png');
}

function setup()
{
  canvas = createCanvas(300,300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300,300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
  console.log('posnet is initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x-17;
    noseY = results[0].pose.nose.y-17;
    console.log("noseX = " + noseX);
    console.log("noseY = " + noseY);

    //wigX = results[0].pose.nose.x-87;
    //wigY = results[0].pose.nose.y-155;
    //console.log("wigX = " + wigX);
    //console.log("wigY = " + wigY);

    shoulderX = results[0].pose.rightShoulder.x-100;
    shoulderY = results[0].pose.rightShoulder.y-100;
    console.log("shoulderX = " + shoulderX);
    console.log("shoulderY = " + shoulderY);
    
  }


}

function draw()
{
  image(video, 0,0,300,300);
  image(clown_nose, noseX, noseY, 30, 30);
  //image(wig, wigX, wigY, 175 , 175);
  image(parrot, shoulderX, shoulderY, 180, 180)
}

function Snapshot()
{
    save('myFilteredimage.png');
}


