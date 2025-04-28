import { useState } from "react";


const CounterApp = () => {

    const [counter, setCounter ] = useState(0)

    const handleAddition = () => {
        setCounter((oldVal) => oldVal + 1)
    }

    const handleReduction = () => {
        setCounter((oldVal) => oldVal > 0 ? oldVal - 1 : 0)
    }
    return (
        <div>
            <button onClick={handleReduction}>-</button>
            <p>{ counter }</p>
            <button onClick={handleAddition}>+</button>
        </div>
    )
}

export default CounterApp;