import { useState } from 'react';

export default function Dropdown() {
    const [car, setCar] = useState("")

    const handleChange = (event) => {
        console.log(car)
        setCar(event.target.value)
    }

    return (
        <form>
            <label>
                <select value = {car} onChange = {handleChange}>
                    <option>Porsche</option>
                    <option>BMW</option>
                    <option>Audi</option>
                </select>
            </label>
        </form>
    )
}