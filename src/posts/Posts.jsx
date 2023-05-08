import React, { useEffect, useState } from 'react';
import style from '../style.module.css'
import { Link, useNavigate } from 'react-router-dom';
import { getPostServices } from '../services/PostServices';

const Posts = () => {

    const navigate = useNavigate();
    const [posts, setPost] = useState([]);
    const [mainPosts, setMainPosts] = useState([]);
    const [uId, setUId] = useState("");



    const handleSearch = () => {
        if (uId > 0) {
            setPost(mainPosts.filter(p => p.userId == uId))
        } else {
            setPost(mainPosts)
        }
    }

    const handleDelete = (postId) => { }

    const getPosts = async () => {
        const res = await getPostServices();
        setPost(res.data);
        setMainPosts(res.data);
    }


    useEffect(() => {
        getPosts();
    }, []);

    useEffect(() => {
        console.log(`chang by uId ${uId}`);
        handleSearch();
    }, [uId])

    return (
        <div className={`${style.item_content} mt-5 p-4 container-fluid`}>
            <h4 className="text-center">مدیریت پست ها</h4>

            <div className="row my-2 mb-4 justify-content-between w-100 mx-0">
                <div className="form-group col-10 col-md-6 col-lg-4">
                    <input type="number" className="form-control shadow" placeholder="جستجو" value={uId} onChange={e => setUId(e.target.value)} />
                </div>
                <div className="col-2 text-start px-0">
                    <Link to="/posts/add" >
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
                        <th>آی دی کاربر</th>
                        <th>عنوان</th>
                        <th>متن</th>
                        <th>عملیات</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map(u => (

                        <tr key={u.id}>
                            <td>{u.id}</td>
                            <td style={{ cursor: 'pointer' }} onClick={() => setUId(u.userId)} >{u.userId}</td>
                            <td>{u.title}</td>
                            <td>{u.body}</td>
                            <td>
                                <i className="fas fa-edit text-warning mx-2 pointer" onClick={() => navigate(`/posts/add/${u.id}`)}></i>
                                <i className="fas fa-trash text-danger mx-2 pointer" onClick={() => handleDelete(u.id)}></i>
                            </td>
                        </tr>

                    ))}
                </tbody>
            </table>

        </div>
    )

}

export default Posts;