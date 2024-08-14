import React, { useState, useEffect } from "react";
import SignInModal from "./SignInModal";
import SignupModal from './Signupmodal';
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

const Nav = () => {
  const [modalType, setModalType] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("http://localhost:5114/api/user/6");
        setName(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchUser();
  }, []);

  const handleClose = () => setModalType(null);

  const handleShowSignUp = () => setModalType('signUp');
  const handleShowSignIn = () => setModalType('signIn');

  const handleLogout = () => {
    setIsLoggedIn(false);
    toast.success('Đăng Xuất Thành Công');
  };

  const handleLoginSuccess = (userName) => {
    setIsLoggedIn(true);
    setName(userName); 
    handleClose();
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container">
          <img src="/file.png" alt="logo" height={50} />

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto p-3">
              <li className="nav-item mt-1 ">
                <a href="/" className="nav-link p-2">
                  Trang Chủ
                </a>
              </li>
              {!isLoggedIn ? (
                <>
                  <li className="nav-item me-3 mt-1">
                    <Button onClick={handleShowSignIn} className="nav-link p-2">
                      Đăng Nhập
                    </Button>
                  </li>
                  <li className="nav-item mt-md-1">
                    <Button onClick={handleShowSignUp} className="mt-md-1">
                      Đăng Ký
                    </Button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item me-3">
                   
                    <img
                      src="/mamoo.png"
                      alt="Avatar"
                      className="rounded-circle"
                      style={{ width: 40, height: 40 }}
                    />
                    <span className="text-white ms-2">{name}</span> 
                  </li>
                  <li className="nav-item me-3">
                    <Button onClick={handleLogout} className="nav-link">
                      Logout
                    </Button>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>

      {modalType === 'signUp' && (
        <SignupModal show={modalType === 'signUp'} handleClose={handleClose} />
      )}
      {modalType === 'signIn' && (
        <SignInModal show={modalType === 'signIn'} handleClose={handleClose} onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
};

export default Nav;
