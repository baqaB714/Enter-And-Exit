import react from "react"

const MenuBar = () => {
    return (
        <div className='menu_icon container row p-3'>
            <a href="/personList" title='لیست شاگردان' className='pointer col-md-2 col-3 d-flex flex-column align-items-center pt-3 text-decoration-none'>
                <i className='fas fa fa-list fs-4 '></i>
                <span className='text-center d-none d-md-block'>لیست اعضاء</span>
            </a>
            <a href="/addPerson" title='افزودن شاگرد' className='pointer col-md-2 col-3 d-flex flex-column align-items-center pt-3 text-decoration-none'>
                <i className='fas fa-user-plus fs-4'></i>
                <span className='text-center d-none d-md-block'>افزودن عضو</span>
            </a>
            <a href="/enterAndExit" title='ثبت ورود و خروج' className='pointer col-md-2 col-3 d-flex flex-column align-items-center pt-3 text-decoration-none'>
                <i className='fas fa-door-open fs-4'></i>
                <span className='text-center d-none d-md-block'>ثبت ورود و خروج</span>
            </a>
            <a href="/registrationTuition" title='ثبت شهریه' className='pointer col-md-2 col-3 d-flex flex-column align-items-center pt-3 text-decoration-none'>
                <i className='fas fa-money-check-alt fs-4'></i>
                <span className='text-center d-none d-md-block'>ثبت شهریه</span>
            </a>
        </div>

    )
}

export default MenuBar;