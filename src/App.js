import React, { useState } from 'react';

const App = () => {

    const [showMenu, setShowMenu] = useState(false);


    return (
        <div className='body'>

            <div id='menuBar' className='top_menu bg-light w-100 '>
                <div className='menu_icon container row p-3'>
                    <a title='لیست شاگردان' className='pointer col-md-2 col-3 d-flex flex-column align-items-center pt-3 text-decoration-none'>
                        <i className='fas fa-list fs-4 '></i>
                        <span  className='text-center d-none d-md-block'>لیست شاگردان</span>
                    </a>
                    <a title='افزودن شاگرد' className='pointer col-md-2 col-3 d-flex flex-column align-items-center pt-3 text-decoration-none'>
                        <i className='fas fa-user-plus fs-4'></i>
                        <span  className='text-center d-none d-md-block'>افزودن شاگرد</span>
                    </a>
                    <a title='ثبت ورود و خروج' className='pointer col-md-2 col-3 d-flex flex-column align-items-center pt-3 text-decoration-none'>
                        <i className='fas fa-door-open fs-4'></i>
                        <span  className='text-center d-none d-md-block'>ثبت ورود و خروج</span>
                    </a>
                    <a title='ثبت شهریه' className='pointer col-md-2 col-3 d-flex flex-column align-items-center pt-3 text-decoration-none'>
                        <i className='fas fa-money-check-alt fs-4'></i>
                        <span className='text-center d-none d-md-block'>ثبت شهریه</span>
                    </a>
                </div>
            </div>

            <div className='main bg-dark'>
            </div>


        </div>
    )
}


export default App;
