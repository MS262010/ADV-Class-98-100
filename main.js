var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function my_start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function run(event) {
    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML = Content;

    if(Content=="take my selfie"){
    console.log("take my selfie");
    speak();
    }
}
function speak(){
    var synth=window.speechSynthesis;
    speak_data="Taking your selfie in 5 seconds";
    var Utterthis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(Utterthis);
    Webcam.attach(camera)
}
camera=document.getElementById("camera");
Webcam.set({
    width:359,
    height: 256,
    image_format:"png",
    png_quality:90
});
