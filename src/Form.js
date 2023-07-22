import { useState } from 'react';

export default function MyForm() {
    //The useState is the empty input value
    const [inputs, setInputs] = useState({'username' : "Ryan Constable", 'age' : "22"});
    //This shows me in the browser what is going on (records name perfectly)
    console.log(inputs)
    
    const handleChange = (event) => {
        console.log("Handle change has been called")
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        console.log("Handle submit was called")
        event.preventDefault();
        alert(inputs);
    }
    
    
    return (
        <form onSubmit={handleSubmit}>
            <label>Enter your name:
                <input type = "text" name = "username" value = {inputs.username || ""} onChange={handleChange}/>
            </label>
            <label>Enter your age:
                <input type = "number" name = 'age' value = {inputs.age || ""} onChange={handleChange}/>
            </label>
            <input type = "submit"/>
        </form>
    )
}