import React, { useState } from "react"

const Counter = (MainComponent , Number)=>{

    const NewComponent = (props)=>{
        const [count , setCount] = useState(0);

        const handlleCount = ()=>{
            setCount(count + Number)
        }
    
        return (
            <MainComponent {...props} count = {count} handlleCount={handlleCount}/>
        )
    }
    return NewComponent
}

export default Counter