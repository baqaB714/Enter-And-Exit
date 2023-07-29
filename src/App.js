import React, { useState } from 'react';

const App = () => {

    const [showMenu, setShowMenu] = useState(false);


    return (
        <div className='body'>

            <div className='top_menu bg-light w-100'>
                <div className='menu_icon container row p-3'>
                    <a className='pointer col-md-2 col-4 d-flex flex-column align-items-center pt-3 text-decoration-none'>
                        <i className='fas fa-user-plus fs-4'></i>
                        <span className=''>افزودن شاگرد</span>
                    </a>
                    <a className='pointer col-md-2 col-4 d-flex flex-column align-items-center pt-3 text-decoration-none'>
                        <i className='fas fa-door-open fs-4'></i>
                        <span >ثبت ورود و خروج</span>
                    </a>
                    <a className='pointer col-md-2 col-4 d-flex flex-column align-items-center pt-3 text-decoration-none'>
                        <i className='fas fa-money-check-alt fs-4'></i>
                        <span >ثبت شهریه</span>
                    </a>
                </div>
            </div>

            <div className='main bg-dark'>
            </div>


        </div>
    )
}


export default App;
