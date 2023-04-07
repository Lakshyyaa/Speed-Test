// text on white screen written in color and user copies them in color
// text on green screen written in color and user copies them in color
// moment user completes
import React, { useState, useEffect, useRef, useContext, useDebugValue, useCallback } from "react";
import Logic from "./Logic";
import userEvent from "@testing-library/user-event";
function App(props) {
  let boolstart = false
  const { start, setStart } = Logic()
  const [timerText, setTimerText] = useState(5)
  const [words, setWords] = useState('')
  const [wordspm, setWordspm] = useState(0);
  const [accuracy, setAccuracy] = useState(0)
  const [typed, setTyped] = useState('')
  const countdowndiv = useRef(null)
  const maindiv = useRef(null)
  const spandiv = useRef(null)
  const wordsRef = useRef(words)
  const typedRef = useRef(typed)
  // make a similar ref for typed and compare them in begintyping?
  const countdown = () => {
    setStart(true)
    countdowndiv.current.style.display = 'block'
    maindiv.current.style.opacity = '0.2'
    timerLoop(5)
    fetch('https://random-word-api.herokuapp.com/word?number=10')
      .then(x => x.json())
      .then(y => {
        setWords(y.join(' '))
      })
  }
  useEffect(() => {
    wordsRef.current = words
  }, [words])
  useEffect(() => {
    typedRef.current = typed
  }, [typed])

  useEffect(() => {
    document.addEventListener('keydown', (e) => handlekey(e))
    return () => {
      document.removeEventListener('keydown', (e) => handlekey(e))
    }
  }, [])
  function handlekey(e) {
    setTyped(e.key)
  }
  function beginTyping(i) {
    if(boolstart){
      if (wordsRef.current[0]===typedRef.current){
        console.log(wordsRef.current[0] + typedRef.current)
        function beginTyping(0)
      }
    }
    // console.log()
  }
  function timerLoop(i) {
    if (i > 0) {
      setTimerText(i)
      setTimeout(() => {
        i--
        timerLoop(i)
      }, 1000)
    }
    else if (i === 0) {
      countdowndiv.current.style.display = 'none'
      maindiv.current.style.opacity = '1'
      boolstart = true
      beginTyping(0)
    }
  }

  return (
    <div>
      <div className="countdown" ref={countdowndiv}>
        Begins in: {timerText}
      </div>
      <div ref={maindiv}>
        <h1>How fast do you type?</h1>
        <div ref={spandiv} className="spandiv" onKeyDown={e => { console.log(e) }}>
          {words}
        </div>
        <button onClick={() => countdown()} disabled={start}>Start</button>
        <h1>WPM: {wordspm}</h1>
        <h1>Accuracy: {accuracy}%</h1>
      </div>
    </div>
  )
}
export default App;
