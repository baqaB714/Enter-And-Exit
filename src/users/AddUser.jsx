import React, { useEffect, useState } from 'react';
import { useParams, Outlet, useNavigate } from 'react-router';
import style from '../style.module.css'
import axios from 'axios';
import swal from 'sweetalert';
import { JpAxios } from '../JpAxios';
 import { setUserService , updateUserService } from '../services/UserServices';

const AddUser = () => {

    const { userId } = useParams();
    const navigate = useNavigate();

    const [addData, setAddData] = useState({
        name: "",
        username: "",
        email: "",
        address: {
            street: "",
            city: "",
            suite: "",
            zipcode: ""
        }
    })


    const handleAddUser = (e) => {
        e.preventDefault();
        if (!userId) {
            setUserService(addData)
            navigate(-1);
        } else {
            updateUserService(addData , userId);
            navigate(-1);
        }
    }

    useEffect(() => {
        if (userId) {
            JpAxios.get(`/users/${userId}`).then(res => {

                setAddData({
                    name: res.data.name,
                    username: res.data.username,
                    email: res.data.email,
                    address: {
                        street: res.data.address.street,
                        city: res.data.address.city,
                        suite: res.data.address.suite,
                        zipcode: res.data.address.zipcode
                    }
                })

                console.log(res.data)
            })
        }
    }, [])

    return (
        <div className={`${style.item_content} mt-5 p-4 container-fluid container`}>
            <h4 className="text-center text-primary">
                {userId ? "ویرایش کاربر" : "افزودن کاربر"}
            </h4>
            <div className="row justify-content-center mt-5 ">
                <form onSubmit={handleAddUser} className="col-12 col-md-6 bg-light rounded shadow-lg p-3">
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">نام و نام خانوادگی</label>
                        <input type="text" value={addData.name} onChange={(e) => setAddData({ ...addData, name: e.target.value })} className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">نام کاربری</label>
                        <input type="text" value={addData.username} onChange={(e) => setAddData({ ...addData, username: e.target.value })} className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">ایمیل</label>
                        <input type="email" value={addData.email} onChange={(e) => setAddData({ ...addData, email: e.target.value })} className="form-control" />
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="exampleInputEmail1" className="form-label">آدرس</label>
                        <div className="col-6 my-1">
                            <input type="text" value={addData.address.city} onChange={(e) => setAddData({ ...addData, address: { ...addData.address, city: e.target.value } })} className="form-control" placeholder="شهر" />
                        </div>
                        <div className="col-6 my-1">
                            <input type="text" value={addData.address.street} onChange={(e) => setAddData({ ...addData, address: { ...addData.address, street: e.target.value } })} className="form-control" placeholder="خیابان" />
                        </div>
                        <div className="col-6 my-1">
                            <input type="text" value={addData.address.suite} onChange={(e) => setAddData({ ...addData, address: { ...addData.address, suite: e.target.value } })} className="form-control" placeholder="ادامه آدرس" />
                        </div>
                        <div className="col-6 my-1">
                            <input type="text" value={addData.address.zipcode} onChange={(e) => setAddData({ ...addData, address: { ...addData.address, zipcode: e.target.value } })} className="form-control" placeholder="کد پستی" />
                        </div>
                    </div>

                    <div className="col-12 text-start">
                        <button type="button" className="btn btn-danger ms-2" onClick={() => navigate(-1)}>بازگشت</button>
                        <button type="submit" className="btn btn-primary" >
                            {userId ? "ویرایش " : "افزودن "}
                        </button>
                    </div>
                </form>
            </div>
            <Outlet />
        </div>
    )
}

export default AddUser;