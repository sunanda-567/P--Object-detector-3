img="";
status="";
objects="";
function preload()
{
img= loadImage('bedroom.jpg');
}

function setup()
{
canvas=createCanvas(600, 500);
canvas.center();

objectDetector=ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML="status : Detecting Objects";
}

function modelLoaded()
{
    console.log("modelLoaded");
    status=true;
    objectDetector.detect(img, gotResults);
  
}

function gotResults(error, results)
{
if(error)
{
    console.log(error);
}

else{

console.log(results);
}

}

function draw()
{
image(img, 0, 0, 600, 500);

if(status != "")
{

    for(i=0; i< objects.length; i++)
    {
    
        document.getElementById("status").innerHTML = "Status-Objects detected";

        fill("#941e49");
       percent = floor(objects[i].confidence * 100);
       text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15 );
       noFill();
       stroke("#941e49");
       rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);


    }

}

}
