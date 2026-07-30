let recognition;
let isRecording = false;

const transcriptBox = document.getElementById("transcript");

const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resumeBtn = document.getElementById("resumeBtn");

if ('webkitSpeechRecognition' in window) {

recognition = new webkitSpeechRecognition();

recognition.continuous = true;
recognition.interimResults = true;
recognition.lang = "en-IN";

recognition.onresult = function(event){

let finalText = "";

for(let i=0;i<event.results.length;i++){

finalText += event.results[i][0].transcript + " ";

}

transcriptBox.value = finalText;

};

recognition.onerror = function(event){

console.log(event.error);

};

}

startBtn.onclick = function(){

if(recognition){

recognition.start();
isRecording = true;

}

};

stopBtn.onclick = function(){

if(recognition){

recognition.stop();
isRecording = false;

}

};

pauseBtn.onclick = function(){

if(recognition && isRecording){

recognition.stop();

}

};

resumeBtn.onclick = function(){

if(recognition){

recognition.start();

}

};