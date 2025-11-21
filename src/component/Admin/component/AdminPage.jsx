import React from "react";
import { FaShieldHeart } from "react-icons/fa6";
import { Outlet } from "react-router-dom";

const AdminPage = () => {
    return (
        <div className='admin-content'>
            <div className="admin-header">
                <FaShieldHeart />
            </div>
            <div className="admin-main">
                <Outlet />   {/* /admin/createUser sẽ render ModalCreateUser ở đây */}
            </div>
        </div>
    );
}

export default AdminPage;
