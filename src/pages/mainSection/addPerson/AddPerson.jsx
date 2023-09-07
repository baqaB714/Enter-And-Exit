import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { getOneUsers } from "../../../services/dataSevices";
const AddPerson = () => {
    const { id, type } = useParams()
    const [onePerson, setOnePerson] = useState();

    const navigate = useNavigate()

    useEffect(() => {
        if (id) {
            getOneUsers(id).then(res => {
                const getOnePerson = res.data
                setOnePerson(getOnePerson)
            }).catch(err => {
                alert("مشکلی پیش آمده")
            })

        }
    }, [])
    console.log(onePerson);

    return (
        <div className="container mt-2 ">
            <div>
                <form id="formAddUser" className="bg-light rounded py-3 px-md-5 px-3" action="">
                    <h1 className="text-center "><i className={`fas  ${type == "show" ? "fa-user-alt" : type == "edit" ? "fa-user-edit" : "fa-user-plus"}`}></i></h1>
                    <h4 className="p-1 text-center ">{type == "edit" ? "ویرایش اطلاعات" : type == "show" ? "مشاهده طلاعات" : "افزودن عضو"}</h4>

                    {type == "show" ? (

                        null
                    ) : (
                        <h6 className="text-center my-3 text-danger ">موارد ستاره دار را الزاماً پر کنید...</h6>

                    )}

                    <div className="row justify-content-between px-2 my-1 ">
                        <div className="row col-12 col-md-6 my-2 ">
                            <label className="col-12 col-md-4" htmlFor="">
                                نام  :
                                <i className="fas fa-star text-danger size_star me-2"></i>
                            </label>
                            <input value={onePerson?.name} type="text" className="col-12 col-md-8 form-control-sm" placeholder="لطفا نام را وارد کنید..." />
                        </div>
                        <div className="row col-12 col-md-6 my-2 ">
                            <label className="col-12 col-md-4" htmlFor="">
                                نام خانوادگی :
                                <i className="fas fa-star text-danger size_star me-2"></i>
                            </label>
                            <input value={onePerson?.name} type="text" className="col-12 col-md-8 form-control-sm" placeholder="لطفا نام را وارد کنید..." />
                        </div>
                        <div className="row col-12 col-md-6 my-2 ">
                            <label className="col-12 col-md-4" htmlFor=""> جنسیت:</label>
                            <div className="col-12 col-md-8 form-control-sm">
                                <label className="mx-1" htmlFor="">زن</label>
                                <input className="mx-1" type="radio" value={1} name="gender" />
                                <label className="mx-1" htmlFor="">مرد</label>
                                <input className="mx-1" type="radio" value={2} name="gender" />
                            </div>
                        </div>
                        <div className="row col-12 col-md-6 my-2 ">
                            <label className="col-12 col-md-4" htmlFor=""> سن  :</label>
                            <input type="number" className="col-12 col-md-8 form-control-sm" placeholder="لطفا نام را وارد کنید..." />
                        </div>
                        <div className="row col-12 col-md-6 my-2 ">
                            <label className="col-12 col-md-4" htmlFor=""> کد ملی  :</label>
                            <input type="number" className="col-12 col-md-8 form-control-sm" placeholder="لطفا نام را وارد کنید..." />
                        </div>
                        <div className="row col-12 col-md-6 my-2 ">
                            <label className="col-12 col-md-4" htmlFor=""> موبایل  :</label>
                            <input type="number" className="col-12 col-md-8 form-control-sm" placeholder="لطفا نام را وارد کنید..." />
                        </div>
                        <div className="row col-12 col-md-6 my-2 ">
                            <label className="col-12 col-md-4" htmlFor=""> آدرس  :</label>
                            <input type="text" className="col-12 col-md-8 form-control-sm" placeholder="لطفا نام را وارد کنید..." />
                        </div>
                        <div className="row col-12 col-md-6 my-2 ">
                            <label className="col-12 col-md-4" htmlFor=""> هدف:</label>
                            <div className="col-12 col-md-8 form-control-sm">
                                <label className="mx-1" htmlFor="">کاهش حجم</label>
                                <input className="mx-1" type="radio" value={1} name="target" />
                                <label className="mx-1" htmlFor="">افزایش حجم</label>
                                <input className="mx-1" type="radio" value={2} name="target" />
                                <label className="mx-1" htmlFor="">تناسب اندام</label>
                                <input className="mx-1" type="radio" value={3} name="target" />
                            </div>
                        </div>
                        <div className="row col-12 col-md-6 my-2 ">
                            <label className="col-12 col-md-4 text-nowrap " htmlFor=""> اتمام بیمه ورزشی  :</label>
                            <input type="date" className="col-12 col-md-8 form-control-sm" />
                        </div>
                        <div className="row col-12 col-md-6 my-2 ">
                            <label className="col-12 col-md-4" htmlFor=""> تاریخ ثبت نام  :</label>
                            <input type="date" className="col-12 col-md-8 form-control-sm" />
                        </div>
                        <div className="row col-12 col-md-6 my-2 ">
                            <label className="col-12 col-md-4" htmlFor=""> نوع ثبت نام:</label>
                            <div className="col-12 col-md-8 form-control-sm">
                                <label className="mx-1" htmlFor="">یک ماهه</label>
                                <input className="mx-1" type="radio" value={1} name="gender" />
                                <label className="mx-1" htmlFor="">سه ماهه</label>
                                <input className="mx-1" type="radio" value={2} name="gender" />
                                <label className="mx-1" htmlFor="">خصوصی</label>
                                <input className="mx-1" type="radio" value={2} name="gender" />
                            </div>
                        </div>
                        <div className="row col-12 col-md-6 my-2 ">
                            <label className="col-12 col-md-4" htmlFor=""> تعداد جلسات  :</label>
                            <div className="col-12 col-md-8 form-control-sm">
                                <input className=" form-control-sm" type="number" />
                                <label className="mx-1 " htmlFor="">6 </label>
                                <label className="mx-1" htmlFor="">باقیمانده</label>
                            </div>
                        </div>
                        <div className="row col-12 col-md-6 my-2 ">
                            <label className="col-12 col-md-4 text-nowrap " htmlFor=""> مبلغ شهریه  :</label>
                            <input type="tnumber" className="col-12 col-md-8 form-control-sm" placeholder="مبلغ پرداختی" />
                        </div>
                        <div className="row col-12 col-md-6 my-2 ">
                            <label className="col-12 col-md-4" htmlFor=""> تاریخ شهریه بعدی  :</label>
                            <input type="date" className="col-12 col-md-8 form-control-sm" />
                        </div>
                    </div>
                    <div className="mt-4 text-center ">
                        {type == "show" ? (
                            <button onClick={() => navigate("/")} className="btn btn-success px-5 ">
                                بازگشت
                            </button>

                        ) : (

                            <button onClick={() => navigate("/")} className="btn btn-success px-5 ">
                                {id ? "ویرایش" : "تایید"}
                            </button>
                        )}
                    </div>
                </form>

            </div>
        </div>
    )

}

export default AddPerson;