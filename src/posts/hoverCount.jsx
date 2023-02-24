import Counter from "./counter";

const HoverCount = (props)=>{

    const {count , handlleCount} = props


    return(
        <div className="text-center w-100">
            <button onMouseEnter={handlleCount} className="btn btn-danger">count : {count}</button>
        </div>
    )
}

export default Counter(HoverCount , 3);