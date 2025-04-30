import { useEffect, useState } from "react";

const Timer = () => {

    const [timer, setTimer] = useState(new Date())

    useEffect(() => {
        setInterval(() => {
            setTimer(new Date())
        }, 1000)
    })
    return (
        <div>
            <p>Timer Example</p>
            <p>{timer.toLocaleTimeString()}</p>
        </div>
    )
}

export default Timer;