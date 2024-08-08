import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignInModal = ({ show, handleClose, onLoginSuccess }) => {
  const [formData, setFormData] = useState({
    Password: "",
    phone: "",
  });
  const [error, setError] = useState(null);

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
      const response = await axios.post(
        "http://localhost:5114/api/user/login",
        {
          phone: formData.phone,
          password: formData.Password,
        }
      );
      console.log("Login successful:", response.data);
      toast.success('Đăng Nhập Thành Công !!');
      onLoginSuccess(); 
      handleClose(); 
      setError(null); 
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      handleClose(); 
      setError("Login failed. Please check your phone number and password.");
      toast.error('Đăng Nhập Tài Khoản Thất Bại');
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Sign In</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
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
              required
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
              required
            />
          </div>
          {error && <div className="alert alert-danger">{error}</div>}
          <Button type="submit" variant="primary">
            Sign In
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

export default SignInModal;

