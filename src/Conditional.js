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


export default TestorNot;