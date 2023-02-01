import React, { useState, useEffect } from "react";

function App(props) {
  const [text, setText] = useState('');
  const [time, setTime] = useState(6);
  const [start, setStart] = useState(false);
  function handleChange(e) {
    const { value } = e.target;
    setText(value)
    console.log(text);
  }
  function wordCount(str) {
    const arr = str.trim().split(' ')
    const filtered = arr.filter(word => (word != ''))
    // console.log(filtered)
    return(filtered.length)
  }
  useEffect(() => {
    if (time > 0 && start) {
      setTimeout(() => {
        setTime(time => time - 1)
      }, 1000)
    }
    else if(time===0)
    {
      wordCount(text)
      setStart(false)
    }
  }, [time, start])

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea
        onChange={handleChange}
        value={text}
      />
      <h4>Time remaining: {time}</h4>
      <button onClick={() => setStart(true)}>Start</button>
      {/* cant directly call the wordCount here like handleChange because event listener automatically passes the e */}
      <h1>Word Count: ???</h1>
    </div>
  )
}

export default App;