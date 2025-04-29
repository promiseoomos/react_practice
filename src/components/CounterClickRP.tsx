
const CounterClickRP = ({ counter, handleIncrement } : { counter : number, handleIncrement : () => void }) => {

    return (
        <div>
            <button onClick={handleIncrement}>Clicked me {counter}</button> 
        </div>
    )
}

export default CounterClickRP