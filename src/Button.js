function Button(props){
    const test = (a) => {
        alert(a);
    }

    return (
        <>
            <button onClick = {() => test("What happens now?")}>{props.text}</button>
            <button onClick = {() => test("Test!")}>{props.text}</button>
        </>
    );
}

export default Button;