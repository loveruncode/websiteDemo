import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Signupmodal = ({ show, handleClose }) => {
  const [formData, setFormData] = useState({
    UserName: "",
    Email: "",
    Password: "",
    FullName: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post("http://localhost:5114/api/user", formData);
      console.log("Response:", response.data);
      handleClose(); 
      toast.success('Đăng ký tài khoản thành công !!');
    } catch (error) {
      console.error("Error during form submission:", error);
      toast.error('Đăng Ký Thất Bại, Vui lòng nhập lại');
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Sign Up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="UserName" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="UserName"
              value={formData.UserName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="FullName" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="FullName"
              value={formData.FullName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="Email"
              value={formData.Email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input
              type="number" 
              className="form-control"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="Password"
              value={formData.Password}
              onChange={handleChange}
            />
          </div>
          <Button type="submit" variant="primary">
            Sign Up
          </Button>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Signupmodal;
