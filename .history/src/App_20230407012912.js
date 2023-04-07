// text on white screen written in color and user copies them in color
// text on green screen written in color and user copies them in color
// moment user completes
import React, { useState, useEffect, useRef, useContext } from "react";
import Logic from "./Logic";
import userEvent from "@testing-library/user-event";
function App(props) {
  // const { handleChange, text, start, areaRef, time, handleStart, count } = Logic()
  const { start, setStart } = Logic()
  const [timerText, setTimerText] = useState(5)
  const [words, setWords] = useState([])
  const [wordspm, setWordspm]=useState(0);
  const [accuracy, setAccuracy]=useState(0)
  const countdowndiv = useRef(null)
  const maindiv = useRef(null)
  const spandiv = useRef(null)
  // const startbtn=useRef(null)
  // let wordsArray
  const countdown = () => {
    setStart(true)
    countdowndiv.current.style.display = 'block'
    maindiv.current.style.opacity = '0.2'
    // startbtn.current.style.pointerEvents = 'none'
    // maindiv.current.style.pointerEvents = 'non-clickable'
    timerLoop(5)
    fetch('https://random-word-api.herokuapp.com/word?number=10')
      .then(x => x.json())
      .then(y => {
        // console.log(y);
        const wordsArray = y.map((word) => word + " ")
        let x = wordsArray.pop()
        x = (x.trim() + 1)
        wordsArray.push(x)
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
      // setStart(false);
      //handle start?
      // start=!start
      countdowndiv.current.style.display = 'none'
      maindiv.current.style.opacity = '1'
      beginTyping()
    }
  }
  return (
    <div>
      <div className="countdown" ref={countdowndiv}>
        Begins in: {timerText}
      </div>
      <div ref={maindiv}>
        <h1>How fast do you type?</h1>
        {/* <textarea
          onChange={handleChange} as no need for handle change
          // value={words} 
          value={text}
          disabled={!start}
          ref={areaRef}
        /> */}
        <div ref={spandiv} className="spandiv">
          {words}
        </div>
        {/* {words} */}
        {/* <h4>Time remaining: {time}</h4>  */}
        {/* onKeyDown={(e) => { e.preventDefault() }} */}
        <button onClick={() => countdown()} disabled={start}>Start</button>
        <h1>WPM: {wordspm}</h1>
        {/* cant directly call the wordCount here like handleChange because event listener automatically passes the e */}
        {/* <h1>Word Count: {count}</h1> */}
        <h1>Accuracy: {accuracy}%</h1>
      </div>
    </div>
  )
}
export default App;
