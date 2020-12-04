import React, { Component, useState } from 'react';


function App() {

  const[count, setcount] = useState(0);
  return(
    <div>
      <p>click {count} </p>
      <button onClick = { () => setcount(count + 1)}></button>
    </div>
  )
}


export default App;

