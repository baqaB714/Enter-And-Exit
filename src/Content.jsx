import React, { useContext, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Mcontext } from './contexts/Mcontext';
import Gallery from './gallery/Gallery';
import Posts from './posts/Posts';
import style from './style.module.css'
import Todos from './todos/Todos';
import AddUser from './users/AddUser';
import EditDesc from './users/EditDesc';
import Users from './users/Users';

const Content = () => {

    const { showMenu, setShowMenu } = useContext(Mcontext)
    const [isUser , setIsUser] = useState(false);


    return (
        <div className={style.content_section} onClick = {()=>setShowMenu(false)}>
            <i className={`${style.menu_button} fas fa-bars text-dark m-2 pointer`}
                onClick={(e) => {setShowMenu(!showMenu) ; e.stopPropagation() }}
            ></i>
                <Routes>
                    <Route path="/users" element={<Users/>} />
                    <Route path="/users/add" element={<AddUser/>}>
                        <Route path=":userId"/>
                    </Route>
                    <Route path="/Posts" element={<Posts/>} />
                    <Route path="/gallery" element={<Gallery/>} />
                    <Route path="/todos" element={<Todos/>} />
                    <Route path="*" element={<Users/>} />
                </Routes>
        </div>

    )

}

export default Content;