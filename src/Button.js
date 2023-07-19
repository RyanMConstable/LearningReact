function Button(props){
    const test = (a) => {
        alert(a);
    }

    return <button onClick = {() => test("What happens now?")}>{props.text}</button>;
}

export default Button;