import Header from "./headers/Header";
import FirstPage from "./page1/FirstPage";
import SecondPage from "./page2/secondpage";
import React, { useRef } from "react";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);

  return (
    <>
      <Header homeRef={homeRef} aboutRef={aboutRef} />
      <FirstPage ref={homeRef} />
      <SecondPage ref={aboutRef} />
    </>
  );
}

export default App;
