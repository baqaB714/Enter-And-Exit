import { NavLink } from "react-router-dom";

const MenuBar = () => {



    return (

        <div>
            <div className='menu_icon container row m-0  p-3 justify-content-center '>
                <NavLink to="/" title='کاربر' className={`pointer mx-1 col-md-2 col-2 d-flex flex-column align-items-center pt-3 text-decoration-none`}>
                    <img src="assets/images/user2.jpg" className="w_2rem" alt="" />
                    {/* <i className='fas fa-user-circle fs-4 '></i> */}
                    <span className='text-center d-none d-md-block'>کاربر</span>
                </NavLink>
                <NavLink to="/personList" title='لیست شاگردان' className='pointer mx-1 col-md-2 col-2 d-flex flex-column align-items-center pt-3 text-decoration-none'>
                    <i className='fas fa fa-list fs-4 '></i>
                    <span className='text-center d-none d-md-block'>لیست اعضاء</span>
                </NavLink>
                <NavLink to="/addPerson" title='افزودن شاگرد' className='pointer mx-1 col-md-2 col-2 d-flex flex-column align-items-center pt-3 text-decoration-none'>
                    <i className='fas fa-user-plus fs-6'></i>
                    <span className='text-center d-none d-md-block'>افزودن عضو</span>
                </NavLink>
                <NavLink to="/enterAndExit" title='ثبت ورود و خروج' className='pointer mx-1 col-md-2 col-2 d-flex flex-column align-items-center pt-3 text-decoration-none'>
                    <i className='fas fa-door-open fs-4'></i>
                    <span className='text-center d-none d-md-block'>ثبت ورود و خروج</span>
                </NavLink>
                <NavLink to="/registrationTuition" title='ثبت شهریه' className='pointer mx-1 col-md-2 col-2 d-flex flex-column align-items-center pt-3 text-decoration-none'>
                    <i className='fas fa-money-check-alt fs-4'></i>
                    <span className='text-center d-none d-md-block'>ثبت شهریه</span>
                </NavLink>
            </div>
        </div>

    )
}

export default MenuBar;