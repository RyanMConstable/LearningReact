function Button(props){
    const test = () => {
        alert(props.alertInfo);
    }

    return <button onClick = {test}>{props.text}</button>;
}

export default Button;