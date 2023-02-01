import React from "react";

function App(props){
  console.log(props.time);
  return(
    <div>
      <h1>How fast do you type?</h1>
      <textarea />
      <h4>Time remaining: </h4>
      <button>Start</button>
      <h1>Word Count: ???</h1> 
    </div>
  )
}

export default App;
