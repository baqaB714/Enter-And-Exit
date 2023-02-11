import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Mcontext } from './contexts/Mcontext';
import style from './style.module.css';

const items = [
    { to: "/users", text: "کاربران" },
    { to: "/posts", text: "پست ها" },
    { to: "/gallery", text: "گالری" },
    { to: "/todos", text: "کارها" }
]

const Sidebar = () => {

    const { showMenu, setShowMenu } = useContext(Mcontext);




    return (
        <div className={`${style.sidebar_section} bg-secondary`} style={{ right: showMenu && 0 }}>
            <ul className={`${style.sidebar_list} m-0 p-0`}>
                <li className={style.sidebar_avatar}>
                    <img src="/assets/images/user2.jpg" alt="" />
                </li>
                {
                    items.map((item) => (
                        <li>
                            <NavLink className={({ isActive }) => `${isActive ? style.bg_sidebar_link : ""} ${style.transition_100}`} to={item.to}>{item.text}</NavLink>
                        </li>
                    ))
                }
            </ul>
        </div>
    )

}

export default Sid