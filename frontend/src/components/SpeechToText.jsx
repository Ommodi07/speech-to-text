import React, { useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

const SpeechToText = () => {
  const [language, setLanguage] = useState("en-IN"); // Default language: English (India)
  const { transcript, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  // Check if the browser supports speech recognition
  if (!browserSupportsSpeechRecognition) {
    return <div>Your browser does not support speech recognition.</div>;
  }

  // Start listening
  const startListening = () => {
    SpeechRecognition.startListening({ language });
  };

  // Stop listening
  const stopListening = () => {
    SpeechRecognition.stopListening();
  };

  // Handle language change
  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div className="container">
      <h1>Speech to Text Conversion</h1>
      <div>
        <label>Select Language: </label>
        <select value={language} onChange={handleLanguageChange}>
          <option value="en-IN">English</option>
          <option value="hi-IN">Hindi</option>
          <option value="gu-IN">Gujarati</option>
        </select>
      </div>
      <div>
        <button onClick={startListening}>Start Listening</button>
        <button onClick={stopListening}>Stop Listening</button>
        <button onClick={resetTranscript}>Reset</button>
      </div>
      <div>
        <h2>Transcript:</h2>
        <p>{transcript}</p>
      </div>
    </div>
  );
};

export default SpeechToText;