
let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("#voiceSelect");
let listenButton = document.querySelector("#listenButton");
let textarea = document.querySelector("textarea");

// Function to populate voice options
function populateVoiceList() {
    voices = window.speechSynthesis.getVoices();
    voiceSelect.innerHTML = '';
    voices.forEach((voice, i) => {
        let option = document.createElement('option');
        option.textContent = voice.name;
        option.setAttribute('data-lang', voice.lang);
        option.setAttribute('data-index', i);
        voiceSelect.appendChild(option);
    });
}

// Populate voices on page load
populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
}

// Event listener for button click
listenButton.addEventListener("click", () => {
    speech.text = textarea.value;
    let selectedIndex = voiceSelect.options[voiceSelect.selectedIndex].getAttribute('data-index');
    speech.voice = voices[selectedIndex];
    window.speechSynthesis.speak(speech);
});
