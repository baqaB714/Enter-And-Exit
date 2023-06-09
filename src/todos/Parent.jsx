import React, { useCallback, useState } from "react"
import Title from "./Title"
import Countbox from "./CountBox"
import Countbutton from "./CountButton"

const Parent =()=>{
    const [title , setTitle] = useState("سلام دوستان من")
    const[count , setCount] = useState(0)
    const[count2 , setCount2] = useState(5)

    const handleFirstCount = useCallback(()=>{
        setCount(count+1)
    },[count])

    const handleSecondCount = useCallback(()=>{
        setCount2(count2+2)
    },[count2])

    return(
        <div>
            <Title title={title}/>
            <Countbox title="مجموعه1" count={count}/>
            <Countbutton title="مجموعه1" handleClick={handleFirstCount} />            
            <Countbox title="مجموعه2" count={count2}/>
            <Countbutton title="مجموعه2" handleClick={handleSecondCount} />            

        </div>
    )
}

export default Parent;