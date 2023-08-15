import { Link } from "react-router-dom";

const Action = () => {
    return (
        <div className="d-flex justify-content-center ">
            <Link to='/addPerson/1' >
                <i className="fas fa-edit ms-2 pointer text-success " title="ویرایش" ></i>
            </Link>
            <Link to='/enterAndExit/1'>
            <i className="fas fa-door-open pointer text-warning " title="ثبت ورود و خروج"></i>
            </Link>
        </div>
    )
}

export default Action;