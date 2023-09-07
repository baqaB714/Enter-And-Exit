import axios from "axios"

export const getAllUsers = ()=>{
    return(
        axios.get('https://jsonplaceholder.typicode.com/users')
    )
}

export const getOneUsers = (id)=>{
    return(
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    )
}