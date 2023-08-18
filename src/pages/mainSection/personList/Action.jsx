import { Link } from "react-router-dom";

const Action = () => {
    return (
        <div className="d-flex justify-content-center ">
            <Link to='/addPerson/1/show' >
                <i className="fas fa-eye  pointer text-info mx-2" title="جزییات" ></i>
            </Link>
            <Link to='/addPerson/1/edit' >
                <i className="fas fa-edit pointer text-success mx-2" title="ویرایش" ></i>
            </Link>
            <Link to='/enterAndExit/1'>
            <i className="fas fa-door-open pointer text-warning mx-2" title="ثبت ورود و خروج"></i>
            </Link>
            <Link to='/registrationTuition/1'>
            <i className="fas fa-money-check-alt text-primary mx-2" title="ثبت شهریه"></i>
            </Link>
        </div>
    )
}

export default Action;