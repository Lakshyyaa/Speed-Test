import React, { useState } from "react";

function App(props) {
  const [text, setText] = useState('');
  const [time, setTime] = useState(60);
  function handleChange(e) {
    const { value } = e.target;
    setText(value)
    console.log(text);
  }
  function wordCount(str) {
    const arr = str.trim().split(' ')
    const filtered = arr.filter(word => (word != ''))
    console.log(filtered)
    console.log(filtered.length)
  }
  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea
        onChange={handleChange}
        value={text}
      />
      <h4>Time remaining: {time}</h4>
      <button onClick={() => (wordCount(text))}>Start</button>
      {/* cant directly call the wordCount here like handleChange because event listener automatically passes the e */}
      <h1>Word Count: ???</h1>
    </div>
  )
}

export default App;
// function WordCount(str) {
//   var totalSoFar = 0;
//   for (var i = 0; i < WordCount.length; i++)
//     if (str(i) === " ") { // if a space is found in str
//       totalSoFar = +1; // add 1 to total so far
//     }
//   totalsoFar += 1; // add 1 to totalsoFar to account for extra space since 1 space = 2 words
// }

// console.log(WordCount("Random String"));