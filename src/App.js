
import React from 'react'
import Nav from "./components/Nav";
import ToDo from "./components/ToDo";


function App() {
  return (
    // enclose it in a fragment so you can pull multiple components"
    <>
      <Nav />
      {/* container puts the whole body into a container */}
      <div className='container'>
      <ToDo />
      </div>
    </>
  );
}

export default App;
