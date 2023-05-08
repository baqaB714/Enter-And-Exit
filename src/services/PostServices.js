import { JpAxios } from "../JpAxios";
import swal from "sweetalert";

export const getPostServices = ()=>{
    return JpAxios.get('/posts');
}



export const setPostService = async (data)=>{
    const res = await JpAxios.post('/posts' , data);
    if (res) {
        console.log(res);
        swal(`${res.data.title} با موفقیت ایجاد شد`, {
            icon: "success",
            buttons: "متوجه شدم",            
        });
    }
}


export const updatePostService = async (data , postId)=>{
    const res = await JpAxios.put(`/posts/${postId}` , data);
    if (res) {
        swal(`${res.data.title} با موفقیت ویرایش شد`, {
            icon: "success",
            buttons: "متوجه شدم",            
        });
    }
}

