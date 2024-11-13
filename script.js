let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.getElementById("voice")
function speak(text) {
  let textSpeak = new SpeechSynthesisUtterance(text);
  textSpeak.rate = 1;
  textSpeak.pitch = 1;
  textSpeak.volume = 1;
  window.speechSynthesis.speak(textSpeak);
}

function wishMe() {
  let day = new Date();
  let hours = day.getHours();
  if (hours >= 0 && hours < 12) {
    speak("Good Morning Sir");
  } else if (hours >= 12 && hours < 16) {
    speak("Good Afternoon Sir");
  } else {
    speak("Good Evening Sir");
  }
}

let speechRecognition =
  window.speechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition();

recognition.onresult = (event) => {
  let currentIndex = event.resultIndex;
  let transcript = event.results[currentIndex][0].transcript;
  content.innerHTML = transcript; // Display the recognized speech text
  takeCommand(transcript.toLowerCase()); // Process the command based on the transcript
};

btn.addEventListener("click", () => {
  recognition.start();
  btn.style.display = "none";
  voice.style.display = "block"
});

let takeCommand = (message) => {
  voice.style.display = "none"
  btn.style.display = "block";
  
  if (message.includes("hello") || message.includes("hey")) {
    speak("Hello sir, how can I help you?");
  }
  else if (message.includes("who is shakib") || message.includes("sakib") || message.includes("shakib")) {
    speak("Shakib is a heroinchi; cazy guy; who is half-mental; came from pabna");
  }
  else if (message.includes("who are you")) {
    speak("I am Chat GPT, Your Virtual Assistant");
  }
  else if (message.includes("open whatsapp")) {
    speak("Opening WhatsApp...");
    window.open("https://web.whatsapp.com/");
  } else if (message.includes("open facebook")) {
    speak("Opening Facebook...");
    window.open("https://facebook.com/");
  } else if (message.includes("open visual studio code")) {
    speak("Opening Visual Studio Code...");
    window.open("vscode://");
  } else if (message.includes("time")) {
    let time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
    speak(time);
  } else if (message.includes("date")) {
    let date = new Date().toLocaleDateString();
    speak(`Today's date is ${date}`);
  } else if (message.includes("open chatgpt")) {
    speak("Opening ChatGPT...");
    window.open("https://chat.openai.com/");
  } else if (message.includes("open pinterest")) {
    speak("Opening Pinterest...");
    window.open("https://pinterest.com/");
  } else if (message.includes("open ostad")) {
    speak("Opening Ostad...");
    window.open("https://ostad.app/");
  } else if (message.includes("open hugeicons")) {
    speak("Opening Hugeicons...");
    window.open("https://hugeicons.com/");
  } else if (
    message.includes("jung kook") ||
    message.includes("jankook") ||
    message.includes("JK") ||
    message.includes("jk") ||
    message.includes("john cook")
  ) {
    speak("Playing music by Jungkook...");
    window.open("https://youtu.be/YbzuOmGEOsI?si=4kKUbeK0Pxt5chb6");
  } else if (message.includes("open instagram")) {
    speak("Opening Instagram...");
    window.open("https://instagram.com/");
  } else if (message.includes("open youtube")) {
    speak("Opening YouTube...");
    window.open("https://youtube.com/");
  } else {
    speak(`This is what I found on the internet regarding "${message}"`);
    window.open(`https://www.google.com/search?q=${message}`);
  }
};
