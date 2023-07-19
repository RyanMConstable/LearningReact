import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from './Button.js';

//const myFirstElement = <h1>Hello React!</h1>


//The functions until the next comment are to test ternary operators
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
/////////////////////////////////////////////////////////////////////////////
//Input bar
function TestProps(props){
  return <input></input>
}
/////////////////////////////////////////////////////////////////
//Testing list development
function Car(props){
  return <li>A {props.brand}</li>
}

function Garage(){
  const cars = [
    {id:1, brand:"Ford"}, 
    {id:2, brand:"BMW"},
    {id:3, brand:"Audi"}]

  return (
    <>
      <h1>What cars are in my garage?</h1>
      <ul>{cars.map((car) => <Car key={car.id} brand={car.brand}/>)}</ul>
    </>
  )
}

function Main() {
  return (
    <>
      <TestProps color='red'/>
      <TestorNot isTest={false}/>
      <TestorNot isTest={true}/>
      <Button text="Button time!" alertInfo="The button works!"/>
      <Garage/>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main/>);
