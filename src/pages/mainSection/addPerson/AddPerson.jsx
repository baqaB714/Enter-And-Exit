import { Outlet, useParams } from "react-router-dom";
const AddPerson = () => {
    const {id} = useParams()

    return (
        <div className="container mt-2 ">
            <div>
                <form id="formAddUser" className="bg-light rounded py-3 px-5" action="">
                    <h1 className="text-center "><i className="fas fa-user-plus"></i></h1>
                    <h4 className="p-1 text-center ">{id ? "ویرایش اطلاعات" : "افزودن عضو"}</h4>
                    <h6 className="text-center my-3 text-danger ">موارد ستاره دار را الزاماً پر کنید...</h6>
                    <div className="row justify-content-between px-2 my-1 ">
                        <div className="row col-12 col-md-6 my-2 ">
                            <label className="col-12 col-md-4" htmlFor="">
                                نام  :
                                <i className="fas fa-star text-danger size_star me-2"></i>
                            </label>
                            <input type="text" className="col-12 col-md-8 form-control-sm" placeholder="لطفا نام را وارد کنید..." />
                        </div>
                        <div className="row col-12 col-md-6 my-2 ">
                            <label className="col-12 col-md-4" htmlFor="">
                                نام خانوادگی :
                                <i className="fas fa-star text-danger size_star me-2"></i>
                            </label>
                            <input type="text" className="col-12 col-md-8 form-control-sm" placeholder="لطفا نام را وارد کنید..." />
                        </div>
                    </div>
                    <div className="row justify-content-between px-2 my-1 ">
                        <div className="row col-12 col-md-6 my-2 ">
                            <label className="col-12 col-md-4" htmlFor=""> جنسیت:</label>
                            <input type="text" className="col-12 col-md-8 form-control-sm" placeholder="لطفا نام را وارد کنید..." />
                        </div>
                        <div className="row col-12 col-md-6 my-2 ">
                            <label className="col-12 col-md-4" htmlFor=""> سن  :</label>
                            <input type="text" className="col-12 col-md-8 form-control-sm" placeholder="لطفا نام را وارد کنید..." />
                        </div>
                    </div>
                    <div className="row justify-content-between px-2 my-1 ">
                        <div className="row col-12 col-md-6 my-2 ">
                            <label className="col-12 col-md-4" htmlFor=""> کد ملی  :</label>
                            <input type="text" className="col-12 col-md-8 form-control-sm" placeholder="لطفا نام را وارد کنید..." />
                        </div>
                        <div className="row col-12 col-md-6 my-2 ">
                            <label className="col-12 col-md-4" htmlFor=""> موبایل  :</label>
                            <input type="text" className="col-12 col-md-8 form-control-sm" placeholder="لطفا نام را وارد کنید..." />
                        </div>
                    </div>
                    <div className="row justify-content-between px-2 my-1 ">
                        <div className="row col-12 col-md-6 my-2 ">
                            <label className="col-12 col-md-4" htmlFor=""> آدرس  :</label>
                            <input type="text" className="col-12 col-md-8 form-control-sm" placeholder="لطفا نام را وارد کنید..." />
                        </div>
                        <div className="row col-12 col-md-6 my-2 ">
                            <label className="col-12 col-md-4" htmlFor=""> هدف  :</label>
                            <input type="text" className="col-12 col-md-8 form-control-sm" placeholder="لطفا نام را وارد کنید..." />
                        </div>
                    </div>
                    <div className="row justify-content-between px-2 my-1 ">
                        <div className="row col-12 col-md-6 my-2 ">
                            <label className="col-12 col-md-4 text-nowrap " htmlFor=""> اتمام بیمه ورزشی  :</label>
                            <input type="text" className="col-12 col-md-8 form-control-sm" placeholder="لطفا نام را وارد کنید..." />
                        </div>
                        <div className="row col-12 col-md-6 my-2 ">
                            <label className="col-12 col-md-4" htmlFor=""> تاریخ ثبت نام  :</label>
                            <input type="text" className="col-12 col-md-8 form-control-sm" placeholder="لطفا نام را وارد کنید..." />
                        </div>
                    </div>
                    <div className="row justify-content-between px-2 my-1 ">
                        <div className="row col-12 col-md-6 my-2 ">
                            <label className="col-12 col-md-4 text-nowrap " htmlFor=""> نوع ثبت نام  :</label>
                            <input type="text" className="col-12 col-md-8 form-control-sm" placeholder="مثال : یک ماهه یا سه ماهه.." />
                        </div>
                        <div className="row col-12 col-md-6 my-2 ">
                            <label className="col-12 col-md-4" htmlFor=""> تعداد جلسات  :</label>
                            <input type="text" className="col-12 col-md-8 form-control-sm" placeholder="لطفا نام را وارد کنید..." />
                        </div>
                    </div>
                    <div className="row justify-content-between px-2 my-1 ">
                        <div className="row col-12 col-md-6 my-2 ">
                            <label className="col-12 col-md-4 text-nowrap " htmlFor=""> مبلغ شهریه  :</label>
                            <input type="text" className="col-12 col-md-8 form-control-sm" placeholder="مثال : یک ماهه یا سه ماهه.." />
                        </div>
                        <div className="row col-12 col-md-6 my-2 ">
                            <label className="col-12 col-md-4" htmlFor=""> تاریخ شهریه بعدی  :</label>
                            <input type="text" className="col-12 col-md-8 form-control-sm" placeholder="لطفا نام را وارد کنید..." />
                        </div>
                    </div>
                    <div className="mt-4 text-center ">
                        <button className="btn btn-success px-5 ">
                        {id ? "ویرایش" : "تایید"}
                        </button>
                    </div>
                </form>

            </div>
        </div>
    )

}

export default AddPerson;