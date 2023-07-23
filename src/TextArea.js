import { useState } from 'react';

export default function TestingTextArea(){
    const [myText, setMyText] = useState("Testing my text area");

    const handleChange = (event) => {
        setMyText(event.target.value)
        console.log("Handle Change called!")
    }

    return (
        <form>
            <textarea value = {myText} onChange = {handleChange}/>
        </form>
    )
}