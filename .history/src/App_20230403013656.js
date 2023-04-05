// correct its css for speed tester

import React, { useState, useEffect, useRef, useContext } from "react";
import Logic from "./Logic";
function App(props) {
  const { handleChange, text, start, areaRef, time, handleStart, count } = Logic()
  const [timerText, setTimerText] = useState('Begins in 5 seconds')
  const countdown = () => {
    setTimeout(() => {
      handleStart();
      console.log('whye');
    }, 5000)
  }
  return (
    <div>
      <div className="countdown">
        {do}
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
