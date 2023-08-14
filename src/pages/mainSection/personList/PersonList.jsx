import { Link } from "react-router-dom";

const PersonList = () => {
    return (

        <div className="container mt-2 overflow_md_scroll">
            <h4 className="p-2 text-center ">لیست اعضاء</h4>

            <table className="table table-light table-hover table-bordered">
                <thead className="table-primary">
                    <tr>
                        <th>ش عضویت</th>
                        <th>نام و نام خانوادگی</th>
                        <th>رشته ورزشی</th>
                        <th>تعداد جلسات</th>
                        <th>تعداد باقیمانده</th>
                        <th>عملیات</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>عباس بساکی</td>
                        <td>بدنسازی</td>
                        <td>16</td>
                        <td>10</td>
                        <td>
                            <Link to='/addPerson/1' >
                            <i className="fas fa-edit ms-2 pointer text-success " title="ویرایش" ></i>
                            </Link>
                            <i className="fas fa-door-open pointer text-warning " title="ثبت ورود و خروج"></i>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>قاسم بساکی</td>
                        <td>بدنسازی</td>
                        <td>16</td>
                        <td>10</td>
                        <td>
                            <Link to='/addPerson' >
                            <i className="fas fa-edit ms-2 pointer text-success " title="ویرایش" ></i>
                            </Link>
                            <i className="fas fa-door-open pointer text-warning " title="ثبت ورود و خروج"></i>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>


    )

}

export default PersonList;