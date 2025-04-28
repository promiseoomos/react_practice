import { useReducer } from "react";

export interface State {
    counter : number
}

export interface Action {
    type: string,
    value: number
}

const initialState = {
    counter: 0
}


const CounterWithReducer = () => {
    const counterReducer = (state : State, action : Action) => {
        switch(action.type){
            case "reduce":
                return { counter: state.counter - action.value }
            case "add":
                return { counter: state.counter + action.value }
            default:
                return state;
        }
    
    }
    
    const [state, dispatch] = useReducer(counterReducer, initialState)   

    return (
        <div>
            <button onClick={() => dispatch({ type : "add", value: 5})}>+</button>
            <p>{state.counter}</p>
            <button onClick={() => dispatch({ type : "reduce", value: 4})}>-</button>

        </div>
    )
}

export default CounterWithReducer;