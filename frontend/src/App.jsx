import 'regenerator-runtime/runtime'; 
import React from 'react';
import ReactDOM from 'react-dom/client';
import SpeechToText from "./components/SpeechToText";
import "./App.css";

function App() {
  return (
    <div className="App">
      <SpeechToText />
    </div>
  );
}

export default App;