SpeechRecognition = window.webkitSpeechRecognition;
recognition = new SpeechRecognition();
camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format: "png",
    png_quality:90
});

function start_button()
{
    recognition.start();
} 




recognition.onresult = function(event){
    console.log(event);
    words = event.results[0][0].transcript;
    document.getElementById("speech").innerHTML = words;
    if(words == "take my selfie"){
        console.log("Taking selfie.")
        speak();
    }
}

function speak(){

    
    Webcam.attach(camera);
    synth = window.speechSynthesis;
    speak_data = "Taking selfie in 5 seconds.";
    utter = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter);

    setTimeout(function(){
        img_id = "pic_1"
        speak_data = "Taking selfie in 5 seconds.";
        utter = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utter);
        take_picture();
    }, 5000)


    setTimeout(function(){
        img_id = "pic_2"
        speak_data = "Taking selfie in 5 seconds.";
        utter = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utter);
        take_picture();
    }, 10000)


    setTimeout(function(){
        img_id = "pic_3"
        take_picture();
    }, 15000)
}
function take_picture(){
    Webcam.snap(function(data_uri){
        if(img_id == "pic_1"){
            document.getElementById("result1").innerHTML = "<img src ='"+data_uri+"'>"
        }
        if(img_id == "pic_2"){
            document.getElementById("result2").innerHTML = "<img src ='"+data_uri+"'>"
        }
        if(img_id == "pic_3"){
            document.getElementById("result3").innerHTML = "<img src ='"+data_uri+"'>"
        }
    })}
