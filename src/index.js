import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from './Button.js';

//const myFirstElement = <h1>Hello React!</h1>

function TestorNot(props){
  const isTest = props.isTest
  return (
    isTest ? <Test/> : <NotaTest/>
  )
}

function Test(){
  return <h1>Hello this is a test!</h1>
}

function NotaTest(){
  return <h1>Hello this is NOT a test!</h1>
}




function Main() {
  return (
    <>
      <TestProps color='red'/>
      <TestorNot isTest={false}/>
      <TestorNot isTest={true}/>
      <Button text="Button time!" alertInfo="The button works!"/>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main/>);
