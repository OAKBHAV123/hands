prediction_1="";
prediction_2="";

Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});
 
Webcam.attach("#camera");

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='capture_img' src='"+data_uri+"'>";
    });
}

console.log("ml5",ml5.version);

var classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/6NB6EnxXM/model.json",model_loaded);

function model_loaded()
{
    console.log("model loaded successfully");
}

function speak()
{
    var syth=window.speechSynthesis;
    speak_data_1="the first prediction is"+prediction_1;
    speak_data_2="The Second prediction is"+prediction_2;
utterthis=new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
syth.speak(utterthis);
}