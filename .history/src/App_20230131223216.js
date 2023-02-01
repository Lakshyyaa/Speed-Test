import React, { useState, useEffect, use } from "react";
function App(props) {
  const THETIME = 5
  const [text, setText] = useState('');
  const [time, setTime] = useState(THETIME);
  const [start, setStart] = useState(false);
  const [count, setCount] = useState(0);
  function handleChange(e) {
    const { value } = e.target;
    setText(value)
  }
  function handleStart() {
    setStart(true);
    setCount(0);
    setText('');
    setTime(THETIME)
  }
  function wordCount(str) {
    const arr = str.trim().split(' ')
    const filtered = arr.filter(word => (word != ''))
    return (filtered.length)
  }
  useEffect(() => {
    if (time > 0 && start) {
      setTimeout(() => {
        setTime(time => time - 1)
      }, 1000)
    }
    else if (time === 0) {
      setStart(false)
      setCount(wordCount(text))
      console.log(count)
    }
  }, [time, start])
  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea
        onChange={handleChange}
        value={text}
        disabled={!start}
      />
      <h4>Time remaining: {time}</h4>
      <button onClick={() => handleStart()} disabled={start}>Start</button>
      {/* cant directly call the wordCount here like handleChange because event listener automatically passes the e */}
      <h1>Word Count: {count}</h1>
    </div>
  )
}
export default App;