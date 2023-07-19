import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from './Button.js';

//const myFirstElement = <h1>Hello React!</h1>

function Test(){
  return <h1>Hello this is a test!</h1>
}

//Prop testing
function TestProps(props){
  return <input></input>
}




function Main() {
  return (
    <>
      <TestProps color='red'/>
      <Test/>
      <Button text="Button time!" alertInfo="The button works!"/>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main/>);
