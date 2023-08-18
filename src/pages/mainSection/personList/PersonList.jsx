import { Link, Outlet } from "react-router-dom";
import Action from "./Action";

const PersonList = () => {

    const dataInfo = [
        {
            field: "id",
            title: "ش عضویت"
        },
        {
            field: "name",
            title: "نام "
        },
        {
            field: "family",
            title: "نام خانوادگی"
        },
        {
            field: "sportField",
            title: "رشته ورزشی"
        },
        {
            field: "remainSession",
            title: "تعداد باقیمانده"
        },
        {
            title: "عملیات",
            elements: () => <Action />
        }
    ]

    const personArr = [
        {
            id: 1,
            name: "عباس",
            family: "بساکی",
            sportField: "بدنسازی",
            numOfSession: "16",
            remainSession: "10",
        },
        {
            id: 2,
            name: "قاسم",
            family: "بساکی",
            sportField: "بدنسازی",
            numOfSession: "16",
            remainSession: "11",
        }
    ]


    return (

        <div className="container mt-2 overflow_md_scroll">
            <h4 className="p-2 text-center ">لیست اعضاء</h4>

            <div id="search_section" className="m-2">
                <div class="input-group">
                    <div id="search-autocomplete" class="form-outline w-50 w_md_80">
                        <input type="search" id="form1" class=" form-control" placeholder="بخشی از نام یا نام خانوادگی را وارد کنید" />
                    </div>
                    <button type="button" class="btn btn-primary rounded mx-1">
                        <i class="fas fa-search"></i>
                    </button>
                </div>

            </div>



            <table className="table table-light table-hover table-bordered">
                <thead className="table-primary">
                    <tr>
                        {dataInfo.map((d) => (
                            <th className="vertical_align_middle" key={d.math}>{d.title}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {personArr.map((pa) => (
                        <tr key={pa.math}>
                            {dataInfo.map((d) => (
                                d.field ? (
                                    <td>{pa[d.field]}</td>
                                ) : (
                                    <td key={pa.math}>{d.elements(pa)}</td>
                                )
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>


    )

}

export default PersonList;