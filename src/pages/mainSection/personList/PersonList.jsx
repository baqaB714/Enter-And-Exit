import { Link, Outlet } from "react-router-dom";
import Action from "./Action";
import { memo, useEffect, useState } from "react";
import axios from "axios";

const PersonList = () => {

    const [users, setUsers] = useState([]);

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
            field: "username",
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


    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
            const newData = res.data.map((u) => {
                const arrName = u.name
                const firstName = arrName.split(" ")[0];
                const lastName = arrName.split(" ")[1];
                return { ...u, name: firstName, family: lastName, remainSession: firstName.length }
            }, [])
            setUsers(newData)
        }).catch(err => {
        })
    }, [])





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
                    {users.map((u) => (
                        <tr key={Math.random + u.id}>
                            {dataInfo.map((d, index) => (
                                d.field ? (
                                    <td>{u[d.field]}</td>
                                ) : (
                                    <td key={Math.random + index}>{d.elements(u)}</td>
                                )
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>


    )

}

export default memo(PersonList);