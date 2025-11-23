import React from "react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import createUser from "../../../Sevice/api";
import api from '../../../Sevice/api'
const ModalCreateUser = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassWord] = useState("");
    const [userName, setUserName] = useState("")
    const { show, setShow } = props;

    const handleSubmitCreateUser = async (e) => {
        e.preventDefault();
        try {
            let res = await api.createUser(email, userName, password);
            console.log("check res: ", res.data);
        } catch (err) {
            console.error("Create user error: ", err);
        }
    };

    const handleClose = () => {
        setShow(false);
        setUserName("")
        setEmail("");
        setPassWord("");
    }

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3 needs-validation" noValidate>
                        <div className="col-md-6">
                            <label htmlFor="validationCustom03" className="form-label">Email</label>
                            <input type="text" className="form-control" value={email} id="validationCustom03" onChange={(e) => setEmail(e.target.value)} required />
                            <div className="invalid-feedback">
                                Please provide a valid city.
                            </div>
                        </div>

                        <div className="col-md-4">
                            <label htmlFor="validationCustomUsername" className="form-label">Username</label>
                            <div className="input-group has-validation">
                                <span className="input-group-text" id="inputGroupPrepend">@</span>
                                <input type="text" className="form-control" value={userName} id="validationCustomUsername" onChange={(e) => setUserName(e.target.value)} aria-describedby="inputGroupPrepend" required />
                                <div className="invalid-feedback">
                                    Please choose a username.
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="validationCustom03" className="form-label">Password</label>
                            <input type="text" className="form-control" value={password} id="validationUserName" onChange={(e) => setPassWord(e.target.value)} required />
                        </div>
                        <div className="col-12">
                            <button className="btn btn-primary" type="submit" onClick={handleSubmitCreateUser}>Submit form</button>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary">Save</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default ModalCreateUser;