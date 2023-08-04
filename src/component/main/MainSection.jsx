import react from "react";

const MainSection = () => {
    return (
        <div>

            <table className="table table-success table-striped">
                <tr>
                    <th>نام</th>
                    <th>نوع ثبت نام</th>
                    <th>تعداد جلسات</th>
                    <th>تعداد باقیمانده</th>
                </tr>
                <tr>
                    <td>عباس بساکی</td>
                    <td>ماهانه</td>
                    <td>16</td>
                    <td>10</td>
                </tr>
                <tr>
                    <td>قاسم بساکی</td>
                    <td>جلسه آزاد</td>
                    <td>1</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>نیما امینی</td>
                    <td>ماهانه</td>
                    <td>16</td>
                    <td>10</td>
                </tr>

            </table>

        </div>

    )
}

export default MainSection;