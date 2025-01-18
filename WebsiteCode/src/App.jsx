import Header from "./headers/Header";
import FirstPage from "./page1/FirstPage";
import SecondPage from "./page2/secondpage";
import ThirdPage from "./page3/ThirdPage";
import ForthPage from "./page4/ForthPage";
import React, { useRef } from "react";

function App() {
  const homeRef = useRef(null);
  const projectRef = useRef(null);
  const educationRef = useRef(null);
  const aboutmeRef = useRef(null);

  return (
    <>
      <Header
        homeRef={homeRef}
        projectRef={projectRef}
        educationRef={educationRef}
        aboutmeRef={aboutmeRef}
      />
      <FirstPage ref={homeRef} />
      <SecondPage ref={projectRef} />
      <ThirdPage ref={educationRef} />
      <ForthPage ref={aboutmeRef} />
    </>
  );
}

export default App;
