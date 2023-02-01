import React, {useState} from "react";

function App(props){
  console.log(props);
  const [Text, setText]=useState('');
  function handleChange(e){
    const {value}=e.target;
    setText[]
  }
  return(
    <div>
      <h1>How fast do you type?</h1>
      <textarea 
      onChange={handleChange}
      />
      <h4>Time remaining: ???</h4>
      <button>Start</button>
      <h1>Word Count: ???</h1> 
    </div>
  )
}

export default App;
