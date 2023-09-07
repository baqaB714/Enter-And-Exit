import { useEffect } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { getOneUsers } from "../../../services/dataSevices";

const Action = ({ rowData }) => {

    const handleDelete = () => {
        console.log(rowData);
        swal({
            title: `آیا از حذف  ${rowData.name + " " + rowData.family} مطمئن هستید؟`,
            text: "",
            icon: "error",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("حذف با موفقیت انجام شد", {
                        icon: "success",
                    });
                } else {
                    // swal("انصراف!", {
                    //     icon: "warning",
                    // });

                }
            });
    }


    return (
        <div className="d-flex justify-content-center ">
            <Link to={`/addPerson/${rowData.id}/show`} >
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
            <i onClick={handleDelete} className="pointer fas fa-trash text-danger mx-2" title="حذف"></i>
        </div>
    )
}

export default Action;