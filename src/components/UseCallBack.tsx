import { useState, useCallback, useMemo } from "react"
import Title from "./TItle"
import ShowCounter from "./ShowCounter"

const UseCallBack = () => {

    const [counter1, setCounter1] = useState(0)
    const [counter2, setCounter2] = useState(0)

    const handleIncrementByOne = useCallback(() => {
        setCounter1((oldCounter) => oldCounter + 1)
    }, [counter1]);

    useMemo(() => {
        // slowFunction(counter2);

        // Slow function ensures that Functions or codes only run when the particular dependencies changes
    }, [counter2])

    const handleIncrementByFive = useCallback(() => {
        setCounter2((oldCounter) => oldCounter + 5)
    }, [])

    return (
        <div>
            <div>
                <Title />
                <ShowCounter title="Counter 1" counter={counter1} />
                <button onClick={handleIncrementByOne}>Increment by 1</button>
            </div>

            <div>
                <ShowCounter title="Counter 2" counter={counter2} />
                <button onClick={handleIncrementByFive}>Increment by 5</button>
            </div>
        </div>
    )
}


export default UseCallBack;