import React, { useState, useEffect } from "react";
import 'regenerator-runtime/runtime';
import SpeechToText from "./components/SpeechToText";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <div className="loader">Loading...</div>
      ) : (
        <SpeechToText />
      )}
    </div>
  );
}

export default App;