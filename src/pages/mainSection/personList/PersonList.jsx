import react from "react";
const PersonList = () => {
    return (

        <div className="container mt-2 ">
            <h4 className="p-2 text-center ">لیست اعضاء</h4>

            <table className="table table-light table-hover table-bordered">
                <thead className="table-primary">
                    <tr>
                        <th>نام</th>
                        <th>نوع ثبت نام</th>
                        <th>تعداد جلسات</th>
                        <th>تعداد باقیمانده</th>
                        <th>عملیات</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>عباس بساکی</td>
                        <td>ماهانه</td>
                        <td>16</td>
                        <td>10</td>
                        <td>
                            <i className="fas fa-edit ms-2 pointer text-success "></i>
                            <i className="fas fa-door-open pointer text-warning "></i>
                        </td>
                    </tr>
                    <tr>
                        <td>قاسم بساکی</td>
                        <td>جلسه آزاد</td>
                        <td>1</td>
                        <td>0</td>
                        <td className="pointer">
                            <i className="fas fa-edit ms-2 pointer text-success "></i>
                            <i className="fas fa-door-open pointer text-warning "></i>
                        </td>

                    </tr>
                    <tr>
                        <td>نیما امینی</td>
                        <td>ماهانه</td>
                        <td>16</td>
                        <td>10</td>
                        <td className="pointer">
                            <i className="fas fa-edit ms-2 pointer text-success "></i>
                            <i className="fas fa-door-open pointer text-warning "></i>
                        </td>

                    </tr>
                </tbody>
            </table>

        </div>


    )

}

export default PersonList;