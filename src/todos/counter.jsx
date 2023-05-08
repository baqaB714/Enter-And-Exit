import React, { useEffect, useReducer } from "react";
import { useState } from "react";

const init = {
    value1: 0,
    value2: 5
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, value1: state.value1 + action.val }
        case 'decrement':
            return { ...state, value1: state.value1 - action.val }
        case 'increment2':
            return { ...state, value2: state.value2 + action.val }
        case 'decrement2':
            return { ...state, value2: state.value2 - action.val }
        case 'reset':
            return init

        default:
            return state;
    }
}

const Counter = () => {

    // const [count, setCount] = useState(0)



    const [count, dispatch] = useReducer(reducer, init)


    return (
        <div className="text-center my-3">
            <h1 className="text-center text-danger">{count.value1}</h1>
            <h1 className="text-center">{count.value2}</h1>

            <div className="text-center my-3">
                <button className="btn btn-success" onClick={() => dispatch({ type: 'increment', val: 1, vo: 12 })} >افزایش</button>
                <button className="btn btn-danger" onClick={() => dispatch({ type: 'decrement', val: 2 })} >کاهش</button>
            </div >

            <div className="text-center my-3">
                <button className="btn btn-success" onClick={() => dispatch({ type: 'increment2', val: 5 })} >افزایش</button>
                <button className="btn btn-danger" onClick={() => dispatch({ type: 'decrement2', val: 3 })} >کاهش</button>
            </div >

            <button className="btn btn-warning" onClick={() => dispatch({ type: 'reset' })} >ریست</button>
        </div>
    )
}

export default Counter;