function preload(){
    img=loadImage('hp.jpeg');
}
function setup(){
    canvas=createCanvas(500,500);
    canvas.center()
    objectdiretor=ml5.objectDetector('cocossd',modelloded);
    document.getElementById("detector").innerHTML="status:detectingObjects";
}
function modelloded(){
    console.log("model is loaded");
}
function back(){
    window.alert("say back");
}