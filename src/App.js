import React from 'react';
import './App.css';
import ComponentTwo from './ComponentTwo';
import ComponentThree from './ComponentThree';
import ComponentZero from './ComponentZero';
import ComponentFive from './ComponentFive';



function App(props) {
  const title = "Welcome to Ayawa Movie Review!";

  return (
    <div>
      <ComponentZero title = {title}/>
      <ComponentTwo/>
      <ComponentThree/>
      <ComponentFive/>

    </div>
  );
}

export default App;
