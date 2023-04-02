// correct its css for speed tester

import React, { useState, useEffect, useRef, useContext } from "react";
import Logic from "./Logic";
function App(props) {
  const { handleChange, text, start, areaRef, time, handleStart, count } = Logic()
  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea
        onChange={handleChange}
        value={text}
        ok
        disabled={!start}
        ref={areaRef}
      />
      <h4>Time remaining: {time}</h4>
      <button onClick={() => handleStart()} disabled={start}>Start</button>
      {/* cant directly call the wordCount here like handleChange because event listener automatically passes the e */}
      <h1>Word Count: {count}</h1>
    </div>
  )
}
export default App;
