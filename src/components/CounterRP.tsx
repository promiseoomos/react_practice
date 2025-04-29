import { useState } from "react"

export interface Render {
    render: (counter: number, handleIncrement : () => void) => JSX.Element,
}

const CounterRP = ({ render } : Render) => {

    const [counter, setCounter] = useState(0);

    const handleIncrement = () => {
        setCounter((oldCounter) => oldCounter + 1);
    }

    return (
        render(counter, handleIncrement)
    )
}

export default CounterRP;