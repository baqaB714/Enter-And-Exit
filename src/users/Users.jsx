import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import style from '../style.module.css'
import swal from 'sweetalert';
import axios from 'axios';


const Users = () => {
    const navigate = useNavigate();

    const [users, setUsers] = useState([]);
    const [mainUsers , setMainUsers] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
            setUsers(res.data)
            setMainUsers(res.data)
        }).catch(err => {
            swal("متاسفانه مشکلی پیش آمده...", {
                icon: "error",
                button: "متوجه شدم"
            })
        })

        // const func = () => {
        //     return new Promise((resolv, reject) => {

        //         console.log(1);

        //         setTimeout(() => {
        //             console.log(2);
        //             resolv(3)
        //         }, 1000)


        //     })
        // }
        // const test = async () => {
        //     const aa = await func();
        //     console.log(aa);
        // }
        // test();


        // const arr = [1, 2, 3, 4, 5, 6];

        // const prom = async (id) => {
        //     return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        // }

        // const func1 = async (id) => {
        //     await prom(id).then(res => {
        //         console.log(res.data);
        //     });
        //     console.log(id)
        // }

        // for (const item of [1, 2, 3, 4, 5, 6]){
        //     func1(item)
        // }
    }, [])



    const handleDelete = (itemID) => {
        swal({
            title: "حذف !",
            text: `آیا از حذف رکورد ${itemID} مطمئن هستید؟`,
            icon: "warning",
            buttons: ["خیر", "بله"],
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axios({
                        method: "DELETE",
                        url: `https://jsonplaceholder.typicode.com/users/${itemID}`
                    }).then(res => {
                        if (res.status == 200) {
                            const newUsers = users.filter(u => u.id != itemID);
                            setUsers(newUsers);
                            swal(`رکورد ${itemID} با موفقیت حذف شد`, {
                                icon: "success",
                            });
                        } else {
                            swal('عملیات با خطا مواجه شد', {
                                icon: "error",
                                button: "متوجه شدم"
                            })

                        }
                    })


                } else {
                    swal("شما از حذف منصرف شدید...", {
                        icon: "error",
                        button: "متوجه شدم"
                    });
                }
            });
    }

    const handleCearch = (e)=>{
        setUsers(mainUsers.filter(u=>(u.name.includes(e.target.value) || u.username.includes(e.target.value)) ))
    }

    return (
        <div className={`${style.item_content} mt-5 p-4 container-fluid`}>
            <h4 className="text-center">مدیریت کاربران</h4>
            <div className="row my-2 mb-4 justify-content-between w-100 mx-0">
                <div className="form-group col-10 col-md-6 col-lg-4">
                    <input type="text" className="form-control shadow" placeholder="جستجو" onChange={handleCearch} />
                </div>
                <div className="col-2 text-start px-0">
                    <Link to="/users/add" >
                        <button className="btn btn-success">
                            <i className="fas fa-plus text-light"></i>
                        </button>
                    </Link>
                </div>
            </div>
            <table className="table bg-light shadow">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>نام</th>
                        <th>نام کاربری</th>
                        <th>ایمیل</th>
                        <th>عملیات</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(u => (

                        <tr key={u.id}>
                            <td>{u.id}</td>
                            <td>{u.name}</td>
                            <td>{u.username}</td>
                            <td>{u.email}</td>
                            <td>
                                <i className="fas fa-edit text-warning mx-2 pointer" onClick={() => navigate(`/users/add/${u.id}`)}></i>
                                <i className="fas fa-trash text-danger mx-2 pointer" onClick={() => handleDelete(u.id)}></i>
                            </td>
                        </tr>

                    ))}
                </tbody>
            </table>
        </div>
    )

}

export default Users;