import { JpAxios } from "../JpAxios";
import swal from "sweetalert";

export const setUserService = async (addData) => {
    const res = await JpAxios.post('/users', addData);
    if (res) {
        console.log(res)
        swal(`${res.data.name} با موفقیت ایجاد شد`, {
            icon: "success",
            buttons: "موتوجه شدم"
        })
    }
}

export const updateUserService = async (addData , userId) => {
    const res = await JpAxios.put(`/users/${userId}`, addData);
    if (res) {
        console.log(res)
        swal(`${res.data.name} با موفقیت ویرایش شد`, {
            icon: "success",
            buttons: "متوجه شدم"
        })
    }
}
