import React from 'react';
import ReactDOM from 'react-dom/client';

import Button from './Button.js';
import TestorNot from './Conditional.js'
import TestProps from './Input.js'
import Garage from './Lists.js';
import MyForm from './Form.js';
import TestingTextArea from './TextArea.js';





function Main() {
  return (
    <>
      <TestProps color='red'/>
      <TestorNot isTest={false}/>
      <TestorNot isTest={true}/>
      <Button text="Button time!" alertInfo="The button works!"/>
      <Garage/>
      <MyForm/>
      <TestingTextArea/>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main/>);
