import ModalCreateUser from "./content/ModalCreateUser";
import { useState, useEffect } from "react";
import TablePage from '../component/TablePage'
import api from '../../Sevice/api';

const User = () => {

    const [show, setShow] = useState(false);
    const [user, setUser] = useState([]);
    const handleShow = () => setShow(true);

    useEffect(() => {
        fetchListUser();
    }, [user]);


    const fetchListUser = async () => {
        try {
            const res = await api.getListUsers();          // gọi API
            console.log("check list: ", res.data);     // json-server: res.data là mảng
            setUser(res.data);                         // cập nhật state
        } catch (err) {
            console.error("fetch users error: ", err);
        }
    };
    return (
        <>
            <button className="btn" onClick={handleShow}>Add user</button>
            <ModalCreateUser show={show} setShow={setShow} />
            <div className="table">
                <TablePage
                    user={user}
                />
            </div>
        </>
    );
}

export default User;