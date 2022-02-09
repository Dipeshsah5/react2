import React from "react";
import "./index.css";

function App() {
  let time = new Date();
  time = time.getHours();
  let greet = "";
  const cssStyle = {};
  if (time >= 1 && time < 12) {
    greet = "Good Morning";
    cssStyle.color = "red";
  } else if (time > 12 && time < 16) {
    greet = "Good Afternoon";
    cssStyle.color = "orange";
  } else if (time > 16 && time < 20) {
    greet = "Good Evening";
    cssStyle.color = "yellow";
  } else {
    greet = "Good Night";

    cssStyle.color = "green";
  }
  return (
    <>
      <div>
        <h1 className="greeting">
          Hello Sir, <span style={cssStyle}> {greet}</span>
        </h1>
      </div>
    </>
  );
};

export default App;
