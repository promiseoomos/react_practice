import { useEffect, useState } from "react";


const useEffectLesson = () => {
    const [counter, setCounter] = useState(0);

    const handleClick = () => {
        setCounter((oldCounter) => oldCounter + 1)
    }

    useEffect(() => {
        console.log("Display on every new re-render")
    })

    useEffect(() => {
        console.log("Call this function only in initial render")
    }, [])

    useEffect(() => {
        console.log("Call this function only when dependencies changes");
    }, [ counter ])

    return (
        <div>
            <p>Counter Value is {counter}</p>
            <button onClick={handleClick}>{counter}</button>
        </div>
    )
}


export default useEffectLesson;