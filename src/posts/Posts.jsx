import React from 'react';
import style from '../style.module.css'
import ClickCount from './clickCount';
import HoverCount from './hoverCount';

const Posts = ()=>{

    return (
        <div className={`${style.item_content} mt-5 p-4 container-fluid`}>
            <h4 className="text-center">مدیریت پست ها</h4>
            <ClickCount name = "Abbas"/>
            <br />
            <HoverCount/>
        </div>
    )

}

export default Posts;