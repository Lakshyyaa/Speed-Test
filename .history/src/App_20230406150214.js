// correct its css for speed tester
// add feature that the first one in room can start and if he leaves the next one becomes admin maybe?
import React, { useState, useEffect, useRef, useContext } from "react";
import Logic from "./Logic";
function App(props) {
  // const { handleChange, text, start, areaRef, time, handleStart, count } = Logic()
  const [timerText, setTimerText] = useState(5)
  const [words, setWords] = useState([])
  const countdowndiv = useRef(null)
  const maindiv = useRef(null)
  // let wordsArray
  const countdown = () => {
    countdowndiv.current.style.display = 'block'
    maindiv.current.style.opacity = '0.2'
    timerLoop(5)
    fetch('https://random-word-api.herokuapp.com/word?number=10')
      .then(x => x.json())
      .then(y => {
        const wordsArray = y.map((word) => word + " ")
        setWords(wordsArray)
        // console.log(y)
      })
  }
  // useEffect(() => {
  //   const wordsArray=words.map((word)=>word+" sex ")
  //   console.log(wordsArray)
  // },[words])
  function timerLoop(i) {
    if (i > 0) {
      setTimerText(i)
      setTimeout(() => {
        i--
        timerLoop(i)
      }, 1000)
    }
    else if (i === 0) {
      handleStart();
      countdowndiv.current.style.display = 'none'
      maindiv.current.style.opacity = '1'
    }
  }
  return (
    <div>
      <div className="countdown" ref={countdowndiv}>
        Begins in: {timerText}
      </div>
      <div ref={maindiv}>
        <h1>How fast do you type?</h1>
        <textarea
          // onChange={handleChange} as no need for handle change
          value={words} 
          // value={text}
          disabled={!start}
          ref={areaRef}
        />
        {words}
        <h4>Time remaining: {time}</h4>
        <button onClick={() => countdown()} disabled={start}>Start</button>
        {/* cant directly call the wordCount here like handleChange because event listener automatically passes the e */}
        <h1>Word Count: {count}</h1>
      </div>
    </div>
  )
}
export default App;
