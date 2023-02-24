import Counter from "./counter";

const ClickCount = (props)=>{

    const {count , handlleCount , name} = props
    console.log(name);


    return(
        <div className="text-center w-100">
            <button onClick={handlleCount} className="btn btn-success">{name} - count : {count}</button>
        </div>
    )
}

export default Counter(ClickCount , 5);