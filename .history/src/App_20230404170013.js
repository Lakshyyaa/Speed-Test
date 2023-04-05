// correct its css for speed tester

import React, { useState, useEffect, useRef, useContext } from "react";
import Logic from "./Logic";
function App(props) {
  const { handleChange, text, start, areaRef, time, handleStart, count } = Logic()
  const [timerText, setTimerText] = useState(5)
  const countdown = () => {
    setTimeout(() => {
      handleStart();
      console.log('whye');
    }, 5000)
    let x=5
    for(let i=0;i<5;i++){
      setTimeout(()=>{
        setTimerText()
      },1000)
    }
  }
  return (
    <div>
      <div className="countdown">
        Begins in: {timerText}
      </div>
      <h1>How fast do you type?</h1>
      <textarea
        onChange={handleChange}
        value={text}
        disabled={!start}
        ref={areaRef}
      />
      <h4>Time remaining: {time}</h4>
      <button onClick={() => countdown()} disabled={start}>Start</button>
      {/* cant directly call the wordCount here like handleChange because event listener automatically passes the e */}
      <h1>Word Count: {count}</h1>
    </div>
  )
}
export default App;
