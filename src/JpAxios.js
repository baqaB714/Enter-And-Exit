import axios from "axios"

export const JpAxios = axios.create({
    baseURL : 'https://jsonplaceholder.typicode.com' , 
    headers : {
        Authorization : "Bearer 6fgagfafg5ta2wfg6q4rtwet6awtgw3t6tg6rfg ..." , 
        "Content-Type" : "application/json"
    } , 
    timeote : 5000 ,
    timeoutErrorMessage : "زمان پاسخ گویی بیش از 5 ثانیه ..."

})